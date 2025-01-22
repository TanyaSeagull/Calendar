const getDay = (date) => {
    let day = date.getDay();
    if (day === 0) {
      day = 7;
    }
  
    return day - 1;
}
  
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const calendar = (elem, year, month) => {
    const element = document.querySelector(elem);
    const monthIndex = month - 1;
    let date = new Date(year, monthIndex);
  
    let table = `
      <div class="calendar-card">
        <table class="calendar-card__table">
        <caption class="calendar-card__caption">${monthNames[monthIndex]}</caption>
        <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
        </tr>
    <tr>`;

      // пробелы для первого ряда
      // с понедельника до первого дня месяца
      // * * * 1  2  3  4
    for (let i = 0; i < getDay(date); i++) {
        table += '<td class="calendar-card__table-td"></td>';
    }

      // <td> ячейки календаря с датами
    while (date.getMonth() == monthIndex) {
        table += '<td class="calendar-month-card__table-td">' + date.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

      // добить таблицу пустыми ячейками, если нужно
      // 29 30 31 * * * *
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
          table += '<td></td>';
        }
    }

      // закрыть таблицу
    table += '</tr></table>';

    element.insertAdjacentHTML('beforeend', table);
};

const createYearCalendar = (elem, year) => {
    const element = document.querySelector(elem);
    element.innerHTML = '';
    for (let month = 1; month <= 12; month++) {
        calendar(container, year, month);
    }
};