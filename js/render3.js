import { idx_3 } from './midterm.js';
import { generateUniqueRandomNumbers } from './utils.js';

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx_3.questions.length - 1, 6);
  const quets = test.map((item, index) => {
    const quest = idx_3.questions[item];
    return `
      <div class="pb-3 lh-sm fs-5 row">
        <div style="width: 20px">${index + 1}.</div>
        <div style="white-space: pre-line" class="col-9">${quest.q}</div>
        <div class="col-2 fw-bold">(${quest.o})</div>
      </div>
    `;
  });

  return quets.join(' ');
};

const render3 = `
  <p class="fw-bold fs-4 text-decoration-underline">
    III. Supply the correct form of the word in each bracket below: 
  </p>
  ${renderQuests()}
`;

export default render3;
