import { idx_7 } from './midterm.js';
import { generateUniqueRandomNumbers } from './utils.js';

const renderOptions = (alphabets, quest, ans) => {
  const options = alphabets.map((item, index) => {
    return `
      <div class="col">
        ${item}. ${quest.q[ans[index]]}
      </div>
    `;
  });
  return options.join(' ');
};

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx_7.questions.length - 1, 6);
  const quets = test.map((item, index) => {
    const quest = idx_7.questions[item];
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

const render7 = `
  <p class="fw-bold fs-4 text-decoration-underline">
    VII. Choose the word whose stress pattern is different from that the others.
  </p>
  ${renderQuests()}
`;

export default render7;
