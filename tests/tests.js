function getTestsResultsElement() {
  const className = 'tests-results';
  const element = document.querySelector(`${className}`);
  if (element) {
    element.parentNode.removeChild(element);
  }

  const newElement = document.createElement('div');
  newElement.classList.add(className);
  return newElement;
}

function runTests() {
  const tests = [{
    name: 'Nazwa strony została zmieniona.',
    isCorrect: () => {
      const defaultTitle = 'Your site name';
      const headerTitle = document.querySelector('.exercise-header').textContent;
      return document.title !== defaultTitle && headerTitle !== defaultTitle;
    }
  }];

  const resultsElement = getTestsResultsElement();
  resultsElement.innerText = 'hejo';
  tests.forEach(test => {
    if (test.isCorrect()) {
      console.log('test is correct!');
    } else {
      console.log('test is incorrect :(');
    }
  });
  document.querySelector('main').appendChild(resultsElement);
}

document.querySelector('.test-btn').addEventListener('click', () => {
  runTests();
});