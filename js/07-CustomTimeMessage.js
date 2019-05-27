console.log('Time Message');

const button = document.querySelector('button');
const output = document.querySelector('.output');
output.setAttribute('style', 'color:red;width:300px;height:200px');
button.addEventListener('click', showOutput);

function showOutput() {
  const date = new Date();
  let cur = date.getHours();
  let message;
  cur = 19;
  if (cur > 17) {
    message = "It's Evening Bozo";
    output.style.backgroundColor = '#333';
  } else if (cur > 12) {
    message = "It's Afternoon Bozo";
    output.style.backgroundColor = 'blue';
  } else if (cur > 0) {
    message = "It's Morning Bozo";
    output.style.backgroundColor = 'orange';
  } else {
    message = 'I have no idea what time it is Bozo';
  }
  output.innerHTML = '<h1>' + message + '</h1>';
}
