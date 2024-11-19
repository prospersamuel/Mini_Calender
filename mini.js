let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");


    let currentDate = new Date();

const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const allMonths = [
    'January',
    'Febraury',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

 date.innerHTML = (currentDate.getDate()<10?"0":"")+currentDate.getDate();
day.innerHTML = weekDays[currentDate.getDay()];
month.innerHTML = allMonths[currentDate.getMonth()];
year.innerHTML = currentDate.getFullYear();