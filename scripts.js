const buttonEl = document.querySelector('.getInfo');
const tableDiv = document.createElement('div');
const mainEl = document.querySelector('main');
let tableAdded = false;

buttonEl.addEventListener('click', dataGrab);
tableDiv.classList.add('tableHolder');

// Using .then methodology
// function dataGrab() {
//   if (!tableAdded) {
//     buttonEl.classList.add('clicked');
//     fetch('https://jsonplaceholder.typicode.com/users', {}).then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok')
//       }
//       return response.json();
//     }).then((data) => {
//       data.forEach((el) => {
//         const dataCell = document.createElement('div');
//         const nameEl = document.createElement('p');
//         const emailEl = document.createElement('p');
//         dataCell.classList.add('dataCell')
//         nameEl.textContent = `Name: ${el.name}`;
//         emailEl.textContent = `E-mail: ${el.email}`;
//         dataCell.append(nameEl, emailEl);
//         tableDiv.append(dataCell);
//       })
//     }).catch((err) => {
//       console.error(`Error: ${err}`)
//     });
//     mainEl.append(tableDiv);
//     tableAdded = true;
//   }
// };

// Asyn/Await methodology
async function dataGrab() {
  if (!tableAdded) {
    buttonEl.classList.add('clicked');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {})
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json();
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
      mainEl.append(tableDiv);
      tableAdded = true;
    } catch (error) {
      console.error(`Error: ${error}`)
    }
  }
};