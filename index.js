// Import stylesheets
import './style.css';

import './tests/testsRunner.js';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log(document);
const submitBtn = document.querySelector('.submit-btn').addEventListener('click', submit);

function submit() {
  sendRequest().then((val) => {
    console.log(val);
  });
}

async function sendRequest() {
  const url = 'https://girls-js-exercise-1.free.beeceptor.com/';
  const response = await fetch(url, {
    method: 'POST',
  });
  return await response.json();
}