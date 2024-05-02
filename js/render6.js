import { idx_6 } from './midterm.js';
import { generateUniqueRandomNumbers } from './utils.js';

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx_6.questions.length - 1, 10);
  const quets = test.map((item, index) => {
    const quest = idx_6.questions[item];
    return `
      <div class="pb-3 lh-base fs-5 d-flex flex-row flex-wrap">
        <div class="w-100"><span style="padding-right: 5px">${
          index + 1
        }. </span>${quest.q}</div>
        <div>&#8680; ${
          quest.o
        } __________________________________________________</div>
      </div>      
    `;
  });

  return quets.join(' ');
};

const render6 = `
  <p class="fw-bold fs-4 text-decoration-underline">
    VI. Rewrite the following sentences without changing the meaning.
  </p>
  ${renderQuests()}
`;

export default render6;
