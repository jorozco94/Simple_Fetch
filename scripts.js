// assign click function to our button that will perform fetch action
// perform fetch 
// create elements that will hold a name and e-mail
// loop thru each item in the JSON object and get it into the elements
// append those elements to the dom
const buttonEl = document.querySelector('.getInfo');
buttonEl.addEventListener('click', dataGrab)

function dataGrab() {
  fetch('https://jsonplaceholder.typicode.com/users', {}).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
  })
}