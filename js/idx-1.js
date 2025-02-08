// import test from '../assets/sample.json';
import { generateUniqueRandomNumbers, fetchPart } from './utils.js';

let idx;

(async () => {
    try {
        idx = await fetchPart(1);
        console.log(idx);;        
    } catch (error) {
        console.error(error);        
    }
})

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
    const test = generateUniqueRandomNumbers(0, idx.content.length - 1, 5);
    const quests = test.map((item, index) => {
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
console.log(idx);

document.getElementById('idx-1').insertAdjacentHTML('beforeend', render);