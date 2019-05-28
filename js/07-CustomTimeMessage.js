console.log('Time Message');

const button = document.querySelector('button');
const output = document.querySelector('.output');
const time = document.querySelector('.time');

output.setAttribute('style', 'color:red;width:250px;height:200px');
button.addEventListener('click', showOutput);

function showOutput() {
  const date = new Date();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  let cur = date.getHours();
  let message;
  // cur = 19;
  if (cur > 17) {
    message = "It's Evening";
    output.style.backgroundColor = '#333';
  } else if (cur > 12) {
    message = "It's Afternoon";
    output.style.backgroundColor = 'blue';
  } else if (cur > 0) {
    message = "It's Morning";
    output.style.backgroundColor = 'orange';
  } else {
    message = 'I have no idea what time it is';
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  output.innerHTML = '<h1>' + message + '</h1>';
  // time.innerHTML = date.toDateString();
  time.innerHTML = `${hours}:${minutes}`;
}
