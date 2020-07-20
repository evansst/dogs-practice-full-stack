const my_dogs = [{
  name: 'Rokky!'
},{
  name: 'Bandit!'
},{
  name: 'Jake!'
}];

const $my_dogs = my_dogs.map(dog => {
  const $li = document.createElement('li');
  $li.textContent = dog.name;
  return $li;
});

const $ul = document.querySelector('ul.dogs');

$my_dogs.forEach($dog => {
  return $ul.append($dog);
});