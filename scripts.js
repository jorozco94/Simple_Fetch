// assign click function to our button that will perform fetch action
// perform fetch 
// create elements that will hold a name and e-mail
// loop thru each item in the JSON object and get it into the elements
// append those elements to the dom
const buttonEl = document.querySelector('.getInfo');
const tableDiv = document.createElement('div');
const mainEl = document.querySelector('main');
let tableAdded = false;

buttonEl.addEventListener('click', dataGrab);
tableDiv.classList.add('tableHolder');

function dataGrab() {
  if (!tableAdded) {
    fetch('https://jsonplaceholder.typicode.com/users', {}).then((response) => {
      return response.json();
    }).then((data) => {
      data.forEach((el) => {
        const dataCell = document.createElement('div');
        const nameEl = document.createElement('p');
        const emailEl = document.createElement('p');
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