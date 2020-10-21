let daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

let months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];
let sep = ".";
//let placeholder = "ДД.ММ.ГГГГ";

class DatePicker {
  constructor(element) {
    this.now = new Date();
    this.today = new Date();
    this.firstClick = true;
    this.startDate;
    this.endDate;
    this.element = element;
    this.year = () => this.now.getFullYear();
    this.month = () => months[this.now.getMonth()];
  }
  render() {
    //calendar
    let calendar = document.createElement("div");
    calendar.classList.add("calendar");

    //calendar header
    let calendarHeader = document.createElement("div");
    calendarHeader.classList.add("calendar-header");

    let calendarHeaderBack = document.createElement("button");
    calendarHeaderBack.classList.add("calendar-header-back");
    let clendararrowback = document.createElement("img");
    clendararrowback.setAttribute('src', '../img/arrow_back.svg');
    calendarHeaderBack.innerText = "";
    calendarHeaderBack.onclick = () => this.backBtn();

    let calendarHeaderFwd = document.createElement("button");
    calendarHeaderFwd.classList.add("calendar-header-fwd");
    let clendarrowforward = document.createElement("img");
    clendarrowforward.setAttribute('src', '../img/arrow_forward.svg');
    calendarHeaderFwd.innerText = "";
    calendarHeaderFwd.onclick = () => this.fwdBtn();

    let calendarHeaderContent = document.createElement("div");
    calendarHeaderContent.classList.add("calendar-header-content");
    calendarHeaderContent.innerText = this.month() + " " + this.year();

    //calendar content
    let calendarContent = document.createElement("div");
    calendarContent.classList.add("calendar-content");

    //calendar content header
    let calendarContentHeader = document.createElement("div");
    calendarContentHeader.classList.add("calendar-content-header");
    daysOfWeek.forEach(day => {
      let element = document.createElement("div");
      element.classList.add("calendar-content-header-days-of-week");
      element.innerText = day;
      calendarContentHeader.appendChild(element);
    });

    //calendar content dates
    let calendarContentDates = document.createElement("div");
    calendarContentDates.classList.add("calendar-content-dates");
    this.createCalendarDates().forEach(week => {
      let weekElement = document.createElement("div");
      weekElement.classList.add("calendar-content-week");
      week.forEach(day => {
        let dayElement = document.createElement("div");
        day.classes.forEach(classItem => dayElement.classList.add(classItem));
        dayElement.innerText = day.day;
        dayElement.onclick = () => this.dayClick(day.date);
        weekElement.appendChild(dayElement);
      });
      calendarContentDates.appendChild(weekElement);
    });

    //calendar content footer
    let calendarContentFooter = document.createElement("div");
    calendarContentFooter.classList.add("calendar-content-footer");

    let calendarContentFooterClear = document.createElement("button");
    calendarContentFooterClear.classList.add("calendar-content-footer-clear");
    calendarContentFooterClear.innerText = "Очистить";
    calendarContentFooterClear.onclick = () => this.clearClick();
    calendarContentFooter.appendChild(calendarContentFooterClear);

    let calendarContentFooterApply = document.createElement("button");
    calendarContentFooterApply.classList.add("calendar-content-footer-apply");
    calendarContentFooterApply.innerText = "Применить";
    calendarContentFooterApply.onclick = () => this.applyClick();
    calendarContentFooter.appendChild(calendarContentFooterApply);

    //collect blocks
    calendarHeader.appendChild(calendarHeaderBack);
    calendarHeader.appendChild(calendarHeaderContent);
    calendarHeader.appendChild(calendarHeaderFwd);
    calendarHeaderBack.appendChild(clendararrowback);
    calendarHeaderFwd.appendChild(clendarrowforward)

    calendarContent.appendChild(calendarContentHeader);
    calendarContent.appendChild(calendarContentDates);
    calendarContent.appendChild(calendarContentFooter);

    calendar.appendChild(calendarHeader);
    calendar.appendChild(calendarContent);
    this.element.appendChild(calendar);
  }
  createCalendarDates() {
    let firstDay = new Date(this.now.getTime());
    firstDay.setDate(1);
    //Воскресенье нулевой день
    let day = firstDay.getDay();
    day === 0 ? (day = 6) : (day = day - 1);
    firstDay.setDate(firstDay.getDate() - day);

    let lastDay = new Date(this.now.getTime());
    lastDay.setMonth(lastDay.getMonth() + 1);
    lastDay.setDate(1);
    lastDay.setDate(lastDay.getDate() - 1);

    let dateArray = [];
    while (firstDay < lastDay) {
      let week = [];
      for (let i = 0; i < 7; i++) {
        let day = {};
        day.day = firstDay.getDate();
        day.date = new Date(firstDay.getTime());
        day.classes = ["calendar-content-day"];
        if (this.startDate) {
          if (this.startDate.getTime() === day.date.getTime()) {
            day.classes.push("calendar-content-day__selected");
            //Не добавлять класс если в одной точке или не заполнена конечная дата
            if (this.endDate) {
              if (this.startDate.getTime() !== this.endDate.getTime()) {
                day.classes.push("calendar-content-day__start");
              }
            }
          }
        }
        if (this.endDate) {
          if (this.endDate.getTime() === day.date.getTime()) {
            day.classes.push("calendar-content-day__selected");
            if (this.startDate.getTime() !== this.endDate.getTime()) {
              day.classes.push("calendar-content-day__end");
            }
          }
        }
        if (this.endDate && this.startDate) {
          if (this.startDate < day.date && day.date < this.endDate) {
            day.classes.push("calendar-content-day__between");
          }
        }
        if (day.date.getMonth() !== this.now.getMonth()) {
          day.classes.push("calendar-content-day__another");
        }
        if (day.date.getTime() === this.today.getTime()) {
          day.classes.push("calendar-content-day__current");
        }
        week.push(day);
        firstDay.setDate(firstDay.getDate() + 1);
      }
      dateArray.push(week);
    }
    return dateArray;
  }
  update() {
    let calendar = this.element.querySelector(".calendar");
    calendar.outerHTML = "";
    this.render();
  }
  backBtn() {
    this.now.setMonth(this.now.getMonth() - 1);
    this.update();
  }
  fwdBtn() {
    this.now.setMonth(this.now.getMonth() + 1);
    this.update();
  }
  dayClick(date) {
    if (date.getMonth() < this.now.getMonth()) {
      this.putDate(date);
      this.backBtn();
    }
    if (date.getMonth() > this.now.getMonth()) {
      this.putDate(date);
      this.fwdBtn();
    } else {
      this.putDate(date);
      this.update();
    }
  }
  putDate(date) {
    if (this.firstClick) {
      if (this.endDate) {
        if (date < this.endDate) {
          this.startDate = date;
        } else {
          this.startDate = this.endDate;
          this.endDate = date;
        }
      } else {
        this.startDate = date;
      }
    } else {
      if (this.endDate) {
        if (date > this.startDate) {
          this.endDate = date;
        } else {
          this.endDate = this.startDate;
          this.startDate = date;
          this.firstClick = !this.firstClick;
        }
      } else {
        if (date > this.startDate) {
          this.endDate = date;
        } else {
          this.endDate = this.startDate;
          this.startDate = date;
          this.firstClick = !this.firstClick;
        }
      }
    }
    this.firstClick = !this.firstClick;
  }
  clearClick() {
    let startInput = document.querySelector(".date-picker-start");
    let endInput =document.querySelector(".date-picker-end");
    startInput.value = "";
    endInput.value = "";
    this.startDate = null;
    this.endDate = null;
    this.now = new Date(this.today.getTime());
    this.firstClick = true;
    this.update();
  }
  applyClick() {
    let startInput = document.querySelector(".date-picker-start");
    startInput.value = this.dateToString(this.startDate);
    let endInput = document.querySelector(".date-picker-end");
    endInput.value = this.dateToString(this.endDate);
    $(".date-picker").attr('style', 'visibility: hidden;');

  }
  dateToString(date) {
    let string =
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      sep +
      (date.getMonth() < 9
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      sep +
      date.getFullYear();
    return string;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let elements = document.querySelectorAll(".date-picker");
  elements.forEach(element => {
    let datepicker = new DatePicker(element);
    datepicker.render();
  });
});



$(document).ready(function(){
                  $(".date-picker-start").click(function(){
                    $(".date-picker").attr('style', 'visibility: visible;');
                  });
                  $(".date-picker-end").click(function(){
                    $(".date-picker").attr('style', 'visibility: visible;');
                  })
                  $(".calendar-content-footer-apply").click(function(){
                    $(".date-picker").attr('style', 'visibility: hidden;');
                  });
                  $("").click(function(){
                    $(".date-picker").attr('style', 'visibility: hidden;');
                  })
                  $(document).mouseup(function (e){
                    var div = $(".date-picker");
                    if (!div.is(e.target)
                        && div.has(e.target).length === 0) {
                      div.hide();
                    }
                    });
                  });

