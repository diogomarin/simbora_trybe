function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createMonthDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let i = -1; i < dezDaysList.length; i += 1) {
    const monthDays = dezDaysList[i];
    const monthDayItem = document.createElement('li');
    monthDayItem.innerText = monthDays;
    monthDayItem.className = 'day'
    monthDaysList.appendChild(monthDayItem);


    let holiday = [24, 25, 31];
    let friday = [4, 11, 18, 25];

    for (let j = 0; j < holiday.length; j += 1) {
      if (dezDaysList[i] === holiday[j]) {
        monthDayItem.className +=' holiday';
        monthDaysList.appendChild(monthDayItem);
      }
    }

    for (let k = 0; k < friday.length; k += 1) {
      if (dezDaysList[i] === friday[k]) {
        monthDayItem.className +=' friday';
        monthDaysList.appendChild(monthDayItem);
      }
    }
  }
}

createMonthDays();