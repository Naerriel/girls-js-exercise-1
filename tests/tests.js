export const tests = [{
  name: 'Nazwa strony została zmieniona.',
  isCorrect: () => {
    const defaultTitle = 'Your site name';
    const headerTitle = document.querySelector('.exercise-header').textContent;
    return document.title !== defaultTitle && headerTitle !== defaultTitle;
  },
  hint: 'Zmień nazwę strony nie tylko w headerze oraz w tytule karty.'
}, {
  name: 'Kolory headera i buttona zostały zmienione.',
  isCorrect: () => {
    const submitBtn = document.querySelector('.submit-btn');
    const header = document.querySelector('.exercise-header');
    const defaultButtonColors = [
      'rgb(221, 221, 221)', // Chrome on Windows
      'rgb(256, 256, 256)', // Chhrome on Mac
    ];

    const btnColor = window.getComputedStyle(submitBtn).getPropertyValue('background-color');
    const headerColor = window.getComputedStyle(header).getPropertyValue('background-color');
    return !defaultButtonColors.includes(btnColor) && headerColor !== 'rgb(128, 128, 128)';
  },
  hint: 'Header ma klasę .exercise-header, a button .submit-btn. Żeby przejść ten test należy zmienić im background-color w CSSach :)',
}, {
  name: 'Nie można zmienić rozmiaru dużego pola tekstowego.',
  isCorrect: () => {
    const textarea = document.querySelector('#interests');
    const textareResizing = window.getComputedStyle(textarea).getPropertyValue('resize');

    return textareResizing === 'none';
  },
  hint: 'Opcja w CSSach, która jest za to odpowiedzialna, jest opisana tutaj: https://developer.mozilla.org/en-US/docs/Web/CSS/resize'
}, {
  name: 'Pola tekstowe mają ten sam kolor bordera (obwódki).',
  isCorrect: () => {
    const inputs = [
      ...Array.from(document.querySelectorAll('.exercise-form input')),
      document.querySelector('.exercise-form textarea'),
    ];
    const color = window.getComputedStyle(inputs[0]).getPropertyValue('border-color');
    return inputs.every(input => window.getComputedStyle(input).getPropertyValue('border-color') === color) && color !== 'rgb(0, 0, 0)';
  },
  hint: 'Opcja w CSSie się nazywa border-color.'
}];