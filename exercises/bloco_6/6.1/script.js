function createOptions() {
  const states = document.getElementById('input-state');
  const options = {
    AC: "Acre",
    AL: "Alagoas",
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goías",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul",
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná",
    PE: "Pernambuco",
    PI: "Piauí",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraíma",
    SC: "Santa Catarina",
    SP: "São Paulo",
    SE: "Sergipe",
    TO: "Tocantins",
  };

  for (let properties in options) {
    const addOption = document.createElement('option');
    addOption.value = properties;
    addOption.innerText = options[properties];
    states.appendChild(addOption)
  }
}

createOptions();

// function checkDate(date) {
//   if (date.indexOf('/') === 2 || date.indexOf('/') === 5) {
//     const day = date.substr(0, 2);
//     const month = date.substr(3, 2);
//     const year = date.substr(6, 4);
//     if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
//       return true;
//     }
//   }
//   return false;
// }

// function validatingTheDate() {
//   const inputDate = document.querySelector('#input-start-date');
//   let date = inputDate.value;
//   if (!checkDate(date) && date.length) {
//     inputDate.value = '';
//     alert('Invalid Date');
//     return false;
//   }
//   return checkDate(date);
// }

const submitButton =  document.querySelector("#submit-button");
submitButton.addEventListener("click, ")

