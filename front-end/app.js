const $ul = document.querySelector('ul.dogs');

fetch('http://localhost:3000/dogs')
  .then(response => response.json())
  .then(response => addDogsToPage(response.dogs));

function addDogsToPage(dogs) {
  dogs
    .map(dogToElement)
    .forEach(addToDogs);
}

function dogToElement(dog) {
  const $li = document.createElement('li');
  $li.textContent = dog.name;
  return $li;
}

function addToDogs($dog) {
  return $ul.append($dog);
}
