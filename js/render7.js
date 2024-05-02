import { idx_7 } from './midterm.js';
import { generateUniqueRandomNumbers, shufflePhrases } from './utils.js';

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx_7.questions.length - 1, 10);
  const quets = test.map((item, index) => {
    const quest = idx_7.questions[item];
    return `
      <div class="pb-3 lh-base fs-5 d-flex flex-row flex-wrap">
        <div class="w-100"><span style="padding-right: 5px">${
          index + 1
        }. </span>/ ${shufflePhrases(quest.q).join(" / ")} / . /</div>
        <div>&#8680; ____________________________________________________________</div>
      </div>      
    `;
  });

  return quets.join(' ');
};

const render7 = `
  <p class="fw-bold fs-4 text-decoration-underline">
    VII. Arrange these words or phases into their correct orders:
  </p>
  ${renderQuests()}
`;

export default render7;
