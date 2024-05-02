import { idx_4 } from './midterm.js';
import { generateUniqueRandomNumbers } from './utils.js';

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx_4.questions.length - 1, 10);
  const quets = test.map((item, index) => {
    const quest = idx_4.questions[item];
    return `
      <div class="pb-3 lh-sm fs-5 row">
        <div style="width: 30px">${index + 1}.</div>
        <div style="white-space: pre-line" class="col-9">${quest.q}</div>
        <div class="col-2 fw-bold">(${quest.o})</div>
      </div>
    `;
  });

  return quets.join(' ');
};

const render4 = `
  <p class="fw-bold fs-4 text-decoration-underline">
    IV. Use the correct tense or form of the verbs in parentheses. 
  </p>
  ${renderQuests()}
`;

export default render4;
