import { idx_6 } from './midterm.js';
import { generateUniqueRandomNumbers } from './utils.js';

const checkDiphthongs = (text) => text === 'th' || text === 'es';

const changeFont = (text, pos) => {
  const arr = text.split('');
  const diph = arr[pos] + arr[pos + 1];
  if (checkDiphthongs(diph)) {
    arr.splice(pos, 2, arr[pos] + arr[pos + 1]);
  }
  arr[pos] = `<span class="text-decoration-underline">${arr[pos]}</span>`;
  return arr.join('');
};

const renderOptions = (alphabets, quest, ans) => {
  const options = alphabets.map((item, index) => {
    return `
      <div class="col">
        ${item}. ${changeFont(quest.q[ans[index]], quest.o[ans[index]])}
      </div>
    `;
  });
  return options.join(' ');
};

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx_6.questions.length - 1, 6);
  const quets = test.map((item, index) => {
    const quest = idx_6.questions[item];
    const ans = generateUniqueRandomNumbers(0, 3, 4);
    const alphabets = ['A', 'B', 'C', 'D'];
    return `
      <div class="pb-3 lh-sm fs-5 row">
        <div class="col-1">${index + 1}. </div>
        ${renderOptions(alphabets, quest, ans)}
      </div>
    `;
  });

  return quets.join(' ');
};

const render6 = `
  <p class="fw-bold fs-4 text-decoration-underline">
    VI. Choose the word whose underlined part is pronounced differently.
  </p>
  ${renderQuests()}
`;

export default render6;
