import { generateUniqueRandomNumbers } from './utils.js';

const idx = {
    "id": 2,
    "title": "Choose the word that has a different stressed syllable from the rest.",
    "content": [
      {
        "key": 1,
        "quest":  ["suitcase ", "although", "ticket ", "subway "],
        "ans": ["Trọng âm của từ có hai âm tiết", ["suitcase /ˈsuːt.keɪs/", "although /ɔːlˈðəʊ/", "ticket /ˈtɪk.ɪt/", "subway /ˈsʌb.weɪ/"], "Trọng âm của đáp án 'although' rơi vào âm tiết thứ hai, trọng âm của các đáp án còn lại rơi vào âm tiết thứ nhất.", "although"]
      },
      {
        "key": 2,
        "quest": ["decorate", "educate", "uniform", "discover"],
        "ans": ["Trọng âm của từ có ba âm tiết", ["decorate /ˈdek.ə.reɪt/", "educate /ˈedʒ.u.keɪt/", "uniform /ˈjuː.nɪ.fɔːm/", "discover /dɪˈskʌv.ər/"], "Trọng âm của đáp án 'discover' rơi vào âm tiết thứ hai, trọng âm của các đáp án còn lại rơi vào âm tiết thứ nhất.", "discover"]
      },
      {
        "key": 3,
        "quest": ["classmate", "finish", "essay", "abroad"],
        "ans": ["Trọng âm", ["classmate /ˈklɑːs.meɪt/", "finish /ˈfɪn.ɪʃ/", "essay /ˈes.eɪ/", "abroad /əˈbrɔːd/"], "Phương án 'abroad' có trọng âm 2, các phương án còn lại có trọng âm 1.", "abroad"]
      },
      {
        "key": 4,
        "quest": ["environment", "transportation", "reliable", "convenient"],
        "ans": ["Trọng âm", ["environment /ɪnˈvaɪ.rən.mənt/", "transportation /ˌtræn.spɔːˈteɪ.ʃən/", "reliable /rɪˈlaɪ.ə.bəl/", "convenient /kənˈviː.ni.ənt/"], "Phương án 'transportation' có trọng âm 3, các phương án còn lại có trọng âm 2.", "transportation"]
      },
      {
        "key": 5,
        "quest": ["difficult", "however", "positive", "chemistry"],
        "ans": ["Trọng âm", ["difficult /ˈdɪf.ɪ.kəlt/", "however /ˌhaʊˈev.ər/", "positive /ˈpɒz.ə.tɪv/", "chemistry /ˈkem.ɪ.stri/"], "Phương án 'however' có trọng âm 2, các phương án còn lại có trọng âm 1.", "however"]
      },
      {
        "key": 6,
        "quest": ["around", "boarding", "baggage", "local"],
        "ans": ["Trọng âm", ["around /əˈraʊnd/", "boarding /ˈbɔː.dɪŋ/", "baggage /ˈbæɡ.ɪdʒ/", "local /ˈləʊ.kəl/"], "Phương án 'around' có trọng âm 2, các phương án còn lại có trọng âm 1.", "around"]
      },
      {
        "key": 7,
        "quest": ["demon", "balloon", "special", "welcome"],
        "ans": ["Trọng âm", ["demon /ˈdiː.mən/", "balloon /bəˈluːn/", "special /ˈspeʃ.əl/", "welcome /ˈwel.kəm/"], "Phương án 'balloon' có trọng âm 2, các phương án còn lại có trọng âm 1.", "balloon"]
      },
      {
        "key": 8,
        "quest": ["family", "festival", "introduce", "celebrate"],
        "ans": ["Trọng âm", ["family /ˈfæm.əl.i/", "festival /ˈfes.tɪ.vəl/", "introduce /ˌɪn.trəˈdʒuːs/", "celebrate /ˈsel.ə.breɪt/"], "Phương án 'introduce' có trọng âm 3, các phương án còn lại có trọng âm 1.", "introduce"]
      },
      {
      "key": 9,
      "quest": ["geography", "computer", "magazine", "fantastic"],
      "ans": ["Trọng âm", ["geography /dʒiˈɒɡ.rə.fi/", "computer /kəmˈpjuː.tər/", "magazine /ˌmæɡ.əˈziːn/", "fantastic /fænˈtæs.tɪk/"], "Phương án 'magazine' có trọng âm 3, các phương án còn lại có trọng âm 2.", "magazine"]
      },
      {
        "key": 10,
        "quest": ["discuss", "traffic", "water", "winter"],
        "ans": ["Trọng âm", ["discuss /dɪˈskʌs/", "traffic /ˈtræf.ɪk/", "water /ˈwɔː.tər/", "winter /ˈwɪn.tər/"], "Phương án 'discuss' có trọng âm 2, các phương án còn lại có trọng âm 1.", "discuss"]
      },
      {
        "key": 11,
        "quest": ["prepare", "relax", "produce", "summer"],
        "ans": ["Trọng âm", ["prepare /prɪˈpeər/", "relax /rɪˈlæks/", "produce /prəˈdʒuːs/", "summer /ˈsʌm.ər/"], "Phương án 'summer' có trọng âm 1, các phương án còn lại có trọng âm 2.", "summer"]
      },
      {
        "key": 12,
        "quest": ["science", "goggles", "review", "cannon"],
        "ans": ["Trọng âm", ["science /ˈsaɪ.əns/", "goggles /ˈɡɒɡ.əlz/", "review /rɪˈvjuː/", "cannon /ˈkæn.ən/"], "Phương án 'review' có trọng âm 2, các phương án còn lại có trọng âm 1.", "review"]
      },
      {
        "key": 13,
        "quest": ["poster", "tuna", "relic", "surround"],
        "ans": ["Trọng âm", ["poster /ˈpəʊ.stər/", "tuna /ˈtʃuː.nə/", "relic /ˈrel.ɪk/", "surround /səˈraʊnd/"], "Phương án 'surround' có trọng âm 2, các phương án còn lại có trọng âm 1.", "surround"]
      },
      {
        "key": 14,
        "quest": ["construct", "horror", "pancake", "sausage"],
        "ans": ["Trọng âm", ["construct /kənˈstrʌkt/", "horror /ˈhɒr.ər/", "pancake /ˈpæn.keɪk/", "sausage /ˈsɒs.ɪdʒ/"], "Phương án 'construct' có trọng âm 2, các phương án còn lại có trọng âm 1.", "construct"]
      },
      {
        "key": 15,
        "quest": ["highlight", "regard", "critic", "circle"],
        "ans": ["Trọng âm", ["highlight /ˈhaɪ.laɪt/", "regard /rɪˈɡɑːd/", "critic /ˈkrɪt.ɪk/", "circle /ˈsɜː.kəl/"], "Phương án 'regard' có trọng âm 2, các phương án còn lại có trọng âm 1.", "regard"]
      }
    ]
}

const renderOptions = (alphabets, quest, ans) => {
    const options = alphabets.map((item, index) => {
      return `
        <div class="col">
          ${item}. ${quest[ans[index]]}
        </div>
      `;
    });
    return options.join(' ');
  };

const renderQuests = () => {
    const test = generateUniqueRandomNumbers(0, idx.content.length - 1, 5);
    const quests = test.map((item, index) => {
      const quest = idx.content[item].quest;
      const ans = generateUniqueRandomNumbers(0, 3, 4);
      const alphabets = ['A', 'B', 'C', 'D'];
      return `
        <div class="pb-3 lh-sm fs-5 row" key=${idx.content[item].key}>
          <div class="col-1">${index + 1}. </div>
          ${renderOptions(alphabets, quest, ans)}
        </div>
      `;
    });
  
    return quests.join(' ');
}

const render = `
    <p class="fw-bold fs-4 text-decoration-underline">
        II. ${idx.title}
    </p>
    ${renderQuests()}
`

document.getElementById('idx-2').insertAdjacentHTML('beforeend', render);