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


//Inserindo os dias do mês e atribuindo  as classes holiday (para feriados) e friday (para as sextas)
function createMonthDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
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
};

createMonthDays();

//Função que recebe como parâmetro uma string que será o nome de um botão criado dinamicamente, deve-se atribuir a id='btn-holiday' e inserido como filho da <div> com classe "butttos-container"
function createButtonHolidays(nameButton) {
  const buttons = document.querySelector('.buttons-container');
  const buttonShowHolidays = document.createElement('button');
  buttonShowHolidays.id = 'btn-holiday'
  buttonShowHolidays.innerText = nameButton;

  buttons.appendChild(buttonShowHolidays);
};

createButtonHolidays('Feriados');


//Adicionar ao botão feriados (criado no item anterior) um evento de click que altere a cor de fundo dos dias que possuem a classe holiday (colocar e tirar a cor ao clicar)
function colorDaysHolidays() {
  const getButtonHolidays = document.querySelector('#btn-holiday');
  const daysHoliday = document.getElementsByClassName('holiday');
  let changeColor = 'white';
  let baseColor = 'rgb(238, 238, 238)';

  getButtonHolidays.addEventListener("click", function() {
    for (let i in daysHoliday) {
      if (daysHoliday[i].style.backgroundColor !== changeColor) {
        daysHoliday[i].style.backgroundColor = changeColor;
      } else {
        daysHoliday[i].style.backgroundColor = baseColor;
      }
    }
  })
};

colorDaysHolidays();

//Função que recebe como parâmetro uma string que será o nome de um botão criado dinamicamente, deve-se atribuir a id='btn-friday' e inserido como filho da <div> com classe "butttos-container"
function createButtonFridays(nameButton) {
  const buttons = document.querySelector('.buttons-container');
  const buttonShowFridays = document.createElement('button');
  buttonShowFridays.id = 'btn-friday'
  buttonShowFridays.innerText = nameButton;

  buttons.appendChild(buttonShowFridays);
};

createButtonFridays('Sextou');

//Adicionar ao botão friday (criado no item anterior) um evento de click que altere o texto dos dias que possuem a classe friday (colocar e tirar o texto)
function textDaysFRidays(fridays) {
  const getButtonFridays = document.querySelector('#btn-friday');
  const daysFridays = document.getElementsByClassName('friday');
  let changeText = 'Sextou!';

  getButtonFridays.addEventListener("click", function() {
    for (let i in daysFridays) {
      if (daysFridays[i].innerText !== changeText) {
        daysFridays[i].innerText = changeText;
      } else {
        daysFridays[i].innerText = fridays[i]
      }
    }
  })
};

let dezembroFridays = [4, 11, 18, 25];
textDaysFRidays(dezembroFridays);


//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
var days = document.querySelector('#days');

function mouseOver() {
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  })
};

function mouseOut() {
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
};

mouseOver();
mouseOut();

//Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function taskAdd(task) {
  const tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');
  taskName.innerText = task;

  tasksContainer.appendChild(taskName);
};

taskAdd('Cozinhar');

//Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function colorTask(color) {
  const tasksContainer = document.querySelector('.my-tasks');
  let taskColor = document.createElement('div');
  taskColor.className = 'task';
  taskColor.style.backgroundColor = color;

  tasksContainer.appendChild(taskColor);
};

colorTask('red');

//Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
var selectedTask = document.getElementsByClassName('task-selected');
var existingTasks = document.querySelector('.task');
var days = document.querySelector('#days');

function addClassToTask() {
  existingTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task-selected';
    } else {
      event.target.className = 'task';
    }
  });
};

addClassToTask();

//Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
//Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function addColorTaskToDay() {
  const taskColor = existingTasks.style.backgroundColor;

  days.addEventListener('click', function(event) {
    let targetColor = event.target.style.color;
    if (selectedTask.length > 0 && targetColor !== taskColor) { //targetColor é diferente do taskcolor (taskColor foi atribuído antes do click).
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (targetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119, 119, 119)';
    }
  });
};

addColorTaskToDay();

function compromise() {
  let textBox = document.querySelector('#task-input');
  let addCompromise = document.querySelector('.task-list');
  let bottonAddCompromise = document.querySelector('#btn-add');

  bottonAddCompromise.addEventListener('click', function() {
    if (textBox.value.length > 0) {
      let newTaskList = document.createElement('li');
      newTaskList.innerText = textBox.value;

      addCompromise.appendChild(newTaskList);
      textBox.value = '';
    } else {
      alert('Erro ao adidiconar, digite o compromisso!');
    }
  })

  textBox.addEventListener('keyup', function(event) {
    if(event.keyCode === 13 && textBox.value.length > 0) {
      let newTaskList = document.createElement('li');
      newTaskList.innerText = textBox.value;

      addCompromise.appendChild(newTaskList);
      textBox.value = '';
    }
  });
};

compromise();