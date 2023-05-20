// Fetch the names and emails from the URL
// create elements that will hold a name and e-amil
// loop thru each item in the JSON object and get it into the elements
// append those elements to the dom
fetch('https://jsonplaceholder.typicode.com/users', {}).then((response) => {
  return response.json()
}).then((data) => {
  console.log(data)
})