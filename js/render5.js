import { idx_5 } from './midterm.js';
import { generateUniqueRandomNumbers } from './utils.js';

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx_5.questions.length - 1, 6);
  const quets = test.map((item, index) => {
    const quest = idx_5.questions[item];
    return `
      <div class="pb-3 lh-base fs-5 d-flex flex-row flex-wrap">
        <div class="w-100"><span style="padding-right: 5px">${
          index + 1
        }. </span>${quest.q}</div>
        <div>&#8680; ____________________________________________________________</div>
      </div>      
    `;
  });

  return quets.join(' ');
};

const render5 = `
  <p class="fw-bold fs-4 text-decoration-underline">
    V. Arrange these words or phases into their correct orders:
  </p>
  ${renderQuests()}
`;

export default render5;
