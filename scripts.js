const buttonEl = document.querySelector('.getInfo');
const tableDiv = document.createElement('div');
const mainEl = document.querySelector('main');
let tableAdded = false;

buttonEl.addEventListener('click', dataGrab);
tableDiv.classList.add('tableHolder');

// Using .then methodology
function dataGrab() {
  if (!tableAdded) {
    buttonEl.classList.add('clicked');
    fetch('https://jsonplaceholder.typicode.com/users', {}).then((response) => {
      return response.json();
    }).then((data) => {
      data.forEach((el) => {
        const dataCell = document.createElement('div');
        const nameEl = document.createElement('p');
        const emailEl = document.createElement('p');
        dataCell.classList.add('dataCell')
        nameEl.textContent = `Name: ${el.name}`;
        emailEl.textContent = `E-mail: ${el.email}`;
        dataCell.append(nameEl, emailEl);
        tableDiv.append(dataCell);
      })
    });
    mainEl.append(tableDiv);
    tableAdded = true;
  }
};