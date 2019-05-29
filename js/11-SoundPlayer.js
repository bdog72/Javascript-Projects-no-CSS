const myArray = ['lion', 'cougar', 'bark'];
document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('Page Ready');

  myArray.forEach(function(item) {
    console.log(item);
    let div = document.createElement('div');
    div.setAttribute('class', 'animal' + item);
    div.innerText = item.toUpperCase();
    div.addEventListener('click', function() {
      playIt(item);
    });
    document.body.appendChild(div);
  });
}

const animals = document.querySelectorAll('.animal');
console.log(animals);
for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener('click', function() {
    let animal = this.innerHTML;
    let lowerAnimal = animal.toLowerCase();

    playIt(lowerAnimal);
  });
}

function playIt(name) {
  let activeElement = document.querySelector('.' + name);
  let sound1 = new Audio('../sound/' + name + '.mp3');
  sound1.play();
  activeElement.classList.add('active');
  setTimeout(function() {
    activeElement.classList.remove('active');
  }, 500);
}

// function addStyle(name) {
//   let activeElement = document.querySelector('.' + name);
//   console.log(activeElement);
//   activeElement.classList.add('active');
//   setTimeout(function() {
//     activeElement.classList.remove('active');
//   }, 500);
// }
