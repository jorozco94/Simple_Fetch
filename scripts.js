// assign click function to our button that will perform fetch action
// perform fetch 
// create elements that will hold a name and e-mail
// loop thru each item in the JSON object and get it into the elements
// append those elements to the dom
const buttonEl = document.querySelector('.getInfo');
const tableDiv = document.createElement('div');
const mainEl = document.querySelector('main');

buttonEl.addEventListener('click', dataGrab);
tableDiv.classList.add('tableHolder');

function dataGrab() {
  fetch('https://jsonplaceholder.typicode.com/users', {}).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    data.forEach((el) => {
      const nameEl = document.createElement('p');
      const emailEl = document.createElement('p');
      nameEl.textContent = `Name: ${el.name}`;
      emailEl.textContent = `E-mail: ${el.email}`;
      tableDiv.append(nameEl, emailEl);
    })
  });
  mainEl.append(tableDiv);
}