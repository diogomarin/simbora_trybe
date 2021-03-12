let cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'green';


let emergencyTasks = document.querySelectorAll('.emergency-tasks div');
for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = 'pink';
}

let titleEmergency = document.querySelectorAll('.emergency-tasks h3');
for (let j = 0; j < titleEmergency.length; j += 1) {
  titleEmergency[j].style.backgroundColor = 'black';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div');
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
  noEmergencyTasks[i].style.backgroundColor = 'orange';
}

let titleNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let k = 0; k < titleNoEmergency.length; k += 1) {
  titleNoEmergency[k].style.backgroundColor = 'black';
}

let rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'green';

