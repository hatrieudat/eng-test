import test from '../assets/sample.json';
import { generateUniqueRandomNumbers } from './utils';

const idx = test[0];

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
    const test = generateUniqueRandomNumbers(0, idx_2.questions.length - 1, 5);
    const quets = test.map((item, index) => {
      const quest = idx.content[item];
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
}

const render = `
    <p class="fw-bold fs-4 text-decoration-underline">
        I. ${idx.title}
    </p>
    ${renderQuests}
`

const idx1 = document.getElementById('idx-1');
idx1.insertAdjacentHTML('beforeend', render);