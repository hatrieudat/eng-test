import { generateUniqueRandomNumbers } from "./utils.js";

const idx = {
  id: 1,
  title: "Choose the word whose underlined part is pronounced differently.",
  content: [
    {
      key: 1,
      quest: [
        "<u>a</u>nnoyed ",
        "b<u>a</u>lloon",
        "p<u>a</u>ssport ",
        "<u>a</u>broad ",
      ],
      ans: [
        "Phát âm 'a'",
        [
          "annoyed /əˈnɔɪd/",
          "balloon /bəˈluːn/",
          "passport /ˈpɑːs.pɔːt/",
          "abroad /əˈbɔːd/",
        ],
        "Phần gạch chân của đáp án passport phát âm là /ɑː/, phần gạch chân của các đáp án còn lại phát âm là /ə/.",
        "passport",
      ],
    },
    {
      key: 2,
      quest: [
        "bus<u>es</u>",
        "bicycl<u>es</u>",
        "cloth<u>es</u>",
        "rul<u>es</u>",
      ],
      ans: [
        "Phát âm 'es'",
        [
          "buses /ˈbʌs.ɪz/",
          "bicycles /ˈbaɪ.sɪ.klz/",
          "clothes /kloʊðz/",
          "rules /ruːlz/",
        ],
        "Phần gạch chân của đáp án buses phát âm là /ɪz/, phần gạch chân của các đáp án còn lại phát âm là /z/.",
        "buses",
      ],
    },
    {
      key: 3,
      quest: [
        "bef<u>o</u>re",
        "rep<u>o</u>rt",
        "homew<u>o</u>rk",
        "unif<u>o</u>rm",
      ],
      ans: [
        "Phát âm 'o'",
        [
          "before /bɪˈfɔːr/",
          "report /rɪˈpɔːt/",
          "homework /ˈhəʊm.wɜːk/",
          "uniform /ˈjuː.nɪ.fɔːm/",
        ],
        "Phần gạch chân của đáp án homework phát âm là /ɜː/, phần gạch chân của các đáp án còn lại phát âm là /ɔː/.",
        "homework",
      ],
    },
    {
      key: 4,
      quest: [
        "s<u>u</u>bway",
        "l<u>u</u>ggage",
        "p<u>u</u>blic",
        "s<u>u</u>pport",
      ],
      ans: [
        "Phát âm 'u'",
        [
          "subway /ˈsʌb.weɪ/",
          "luggage /ˈlʌɡ.ɪdʒ/",
          "public /ˈpʌb.lɪk/",
          "support /səˈpɔːt/",
        ],
        "Phần gạch chân của đáp án support phát âm là /ə/, phần gạch chân của các đáp án còn lại phát âm là /ʌ/.",
        "support",
      ],
    },
    {
      key: 5,
      quest: [
        "l<u>i</u>ghtning",
        "d<u>i</u>nner",
        "Chr<u>i</u>stmas",
        "v<u>i</u>sit",
      ],
      ans: [
        "Phát âm 'i'",
        [
          "lightning /ˈlaɪt.nɪŋ/",
          "dinner /ˈdɪn.ər/",
          "Christmas /ˈkrɪs.məs/",
          "visit /ˈvɪz.ɪt/",
        ],
        "Phần gạch chân của đáp án lightning phát âm là /aɪ/, phần gạch chân của các đáp án còn lại phát âm là /ɪ/.",
        "lightning",
      ],
    },
    {
      key: 6,
      quest: [
        "excit<u>ed</u>",
        "annoy<u>ed</u>",
        "pleas<u>ed</u>",
        "surpris<u>ed</u>",
      ],
      ans: [
        "Phát âm 'ed'",
        [
          "excited /ɪkˈsaɪ.tɪd/",
          "annoyed /əˈnɔɪd/",
          "pleased /pliːzd/",
          "surprised /səˈpraɪzd/",
        ],
        "Phần gạch chân của đáp án excited phát âm là /id/, phần gạch chân của các đáp án còn lại phát âm là /d/.",
        "excited",
      ],
    },
    {
      key: 7,
      quest: [
        "backpack<u>s</u>",
        "ticket<u>s</u>",
        "custom<u>s</u>",
        "passport<u>s</u>",
      ],
      ans: [
        "Phát âm 's'",
        [
          "backpacks /ˈbæk.pæks/",
          "tickets /ˈtɪk.ɪts/",
          "customs /ˈkʌs.təmz/",
          "passports /ˈpɑːs.pɔːts/",
        ],
        "Phần gạch chân của đáp án customs phát âm là /z/, phần gạch chân của các đáp án còn lại phát âm là /s/.",
        "customs",
      ],
    },
    {
      key: 8,
      quest: [
        "Itali<u>an</u>",
        "Brazili<u>an</u>",
        "Australi<u>an</u>",
        "Egypti<u>an</u>",
      ],
      ans: [
        "Phát âm 'ian'",
        [
          "Italian /ɪˈtæl.jən/",
          "Brazilian /brəˈzɪl.jən/",
          "Australian /ɒsˈtreɪ.li.ən/",
          "Egyptian /iˈdʒɪp.ʃən/",
        ],
        "Phần gạch chân của đáp án Egyptian phát âm là /ən/, phần gạch chân của các đáp án còn lại phát âm là /jən/.",
        "Egyptian",
      ],
    },
    {
      key: 9,
      quest: [
        "surpris<u>ed</u>",
        "annoy<u>ed</u>",
        "pleas<u>ed</u>",
        "pass<u>ed</u>",
      ],
      ans: [
        "Phát âm 'ed'",
        [
          "surprised /səˈpraɪzd/",
          "annoyed /əˈnɔɪd/",
          "pleased /pliːzd/",
          "passed /pɑːst/",
        ],
        "Phần gạch chân của đáp án passed phát âm là /t/, phần gạch chân của các đáp án còn lại phát âm là /d/.",
        "passed",
      ],
    },
    {
      key: 10,
      quest: [
        "st<u>u</u>dy",
        "T<u>u</u>esday",
        "S<u>u</u>nday",
        "b<u>u</u>nch",
      ],
      ans: [
        "Phát âm 'u'",
        [
          "study /ˈstʌd.i/",
          "Tuesday /ˈtʃuːz.deɪ/",
          "Sunday /ˈsʌn.deɪ/",
          "bunch /bʌntʃ/",
        ],
        "Phần gạch chân của đáp án Tuesday phát âm là /uː/, phần gạch chân của các đáp án còn lại phát âm là /ʌ/.",
        "Tuesday",
      ],
    },
    {
      key: 11,
      quest: [
        "be<u>c</u>ause",
        "<u>c</u>ustoms",
        "suit<u>c</u>ase",
        "<u>c</u>ity",
      ],
      ans: [
        "Phát âm 'c'",
        [
          "because /bɪˈkəz/",
          "customs /ˈkʌs.təmz/",
          "suitcase /ˈsuːt.keɪs/",
          "city /ˈsɪt.i/",
        ],
        "Phần gạch chân của đáp án city phát âm là /s/, phần gạch chân của các đáp án còn lại phát âm là /k/.",
        "city",
      ],
    },
    {
      key: 12,
      quest: [
        "<u>s</u>ure",
        "<u>s</u>treetcar",
        "<u>s</u>team",
        "<u>s</u>mall",
      ],
      ans: [
        "Phát âm 's'",
        [
          "sure /ʃɔːr/",
          "streetcar /ˈstriːt.kɑːr/",
          "steam /stiːm/",
          "small /smɔːl/",
        ],
        "Phần gạch chân của đáp án sure phát âm là /ʃ/, phần gạch chân của các đáp án còn lại phát âm là /s/.",
        "sure",
      ],
    },
    {
      key: 13,
      quest: [
        "fir<u>st</u>",
        "<u>st</u>ation",
        "li<u>st</u>en",
        "fa<u>st</u>er",
      ],
      ans: [
        "Phát âm 'st'",
        [
          "first /ˈfɜːst/",
          "station /ˈsteɪ.ʃən/",
          "listen /ˈlɪs.ən/",
          "faster /fɑːstər/",
        ],
        "Phần gạch chân của đáp án listen là âm câm, phần gạch chân của các đáp án còn lại phát âm là /st/.",
        "listen",
      ],
    },
    {
      key: 14,
      quest: ["sh<u>i</u>p", "b<u>i</u>cycle", "d<u>i</u>sh", "tax<u>i</u>"],
      ans: [
        "Phát âm 'i'",
        ["ship /ʃɪp/", "bicycle /ˈbaɪ.sɪ.kəl/", "dish /dɪʃ/", "taxi /ˈtæk.si/"],
        "Phần gạch chân của đáp án bicycle phát âm là /ai/, phần gạch chân của các đáp án còn lại phát âm là /i/.",
        "bicycle",
      ],
    },
    {
      key: 15,
      quest: ["h<u>o</u>le", "c<u>o</u>ld", "m<u>o</u>torbike", "b<u>o</u>wl"],
      ans: [
        "Phát âm 'o'",
        [
          "hole /həʊl/",
          "cold /kəʊld/",
          "motorbike /ˈməʊ.tə.baɪk/",
          "bowl /bəʊl/",
        ],
        "Phần gạch chân của đáp án motorbike phát âm là /ə/, phần gạch chân của các đáp án còn lại phát âm là /əʊ/.",
        "motorbike",
      ],
    },
    {
      key: 16,
      quest: ["h<u>a</u>nd", "tr<u>a</u>ffic", "c<u>a</u>ncel", "p<u>a</u>rk"],
      ans: [
        "Phát âm 'a'",
        [
          "hand /hænd/",
          "traffic /ˈtræf.ɪk/",
          "cancel /ˈkæn.səl/",
          "park /pɑːk/",
        ],
        "Phần gạch chân của đáp án park phát âm là /ɑː/, phần gạch chân của các đáp án còn lại phát âm là /æ/.",
        "park",
      ],
    },
    {
      key: 17,
      quest: [
        "s<u>u</u>bject",
        "tr<u>u</u>ck",
        "amb<u>u</u>lance",
        "l<u>u</u>ck",
      ],
      ans: [
        "Phát âm 'u'",
        [
          "subject /ˈsʌb.dʒekt/",
          "truck /trʌk/",
          "ambulance /ˈæm.bjə.ləns/",
          "luck /lʌk/",
        ],
        "Phần gạch chân của đáp án ambulance phát âm là /jə/, phần gạch chân của các đáp án còn lại phát âm là /ʌ/.",
        "ambulance",
      ],
    },
    {
      key: 18,
      quest: [
        "ill<u>e</u>gal",
        "h<u>e</u>licopter",
        "n<u>e</u>st",
        "d<u>e</u>ntist",
      ],
      ans: [
        "Phát âm 'e'",
        [
          "illegal /ɪˈliː.ɡəl/",
          "helicopter /ˈhel.ɪˌkɒp.tər/",
          "nest /nest/",
          "dentist /ˈden.tɪst/",
        ],
        "Phần gạch chân của đáp án illegal phát âm là /iː/, phần gạch chân của các đáp án còn lại phát âm là /e/.",
        "illegal",
      ],
    },
    {
      key: 19,
      quest: ["r<u>a</u>ilway", "l<u>a</u>w", "m<u>a</u>y", "tod<u>a</u>y"],
      ans: [
        "Phát âm 'a'",
        ["railway /ˈreɪl.weɪ/", "law /lɔː/", "may /meɪ/", "today /təˈdeɪ/"],
        "Phần gạch chân của đáp án law phát âm là /ɔː/, phần gạch chân của các đáp án còn lại phát âm là /eɪ/.",
        "law",
      ],
    },
    {
      key: 20,
      quest: [
        "a<u>c</u>cident",
        "coo<u>k</u>ies",
        "traffi<u>c</u>",
        "ca<u>r</u>ry",
      ],
      ans: [
        "Phát âm 'c'",
        [
          "accident /ˈæk.sɪ.dənt/",
          "cookies /ˈkʊk.i/",
          "traffic /ˈtræf.ɪk/",
          "carry /ˈkær.i/",
        ],
        "Phần gạch chân của đáp án accident phát âm là /s/, phần gạch chân của các đáp án còn lại phát âm là /k/.",
        "accident",
      ],
    },
    {
      key: 21,
      quest: [
        "enter<u>ed</u>",
        "lov<u>ed</u>",
        "kick<u>ed</u>",
        "discover<u>ed</u>",
      ],
      ans: [
        "Phát âm 'ed'",
        [
          "entered /ˈen.tərd/",
          "loved /lʌvd/",
          "kicked /kɪkt/",
          "discovered /dɪˈskʌv.ərd/",
        ],
        "Phần gạch chân của đáp án kicked phát âm là /t/, phần gạch chân của các đáp án còn lại phát âm là /d/.",
        "kicked",
      ],
    },
    {
      key: 22,
      quest: [
        "mov<u>i</u>ng",
        "romant<u>i</u>c",
        "exc<u>i</u>ting",
        "frighten<u>i</u>ng",
      ],
      ans: [
        "Phát âm 'i'",
        [
          "moving /ˈmuː.vɪŋ/",
          "romantic /rəʊˈmæn.tɪk/",
          "exciting /ɪkˈsaɪ.tɪŋ/",
          "frightening /ˈfraɪ.tən.ɪŋ/",
        ],
        "Phần gạch chân của đáp án frightening phát âm là /i/, phần gạch chân của các đáp án còn lại phát âm là /aɪ/.",
        "frightening",
      ],
    },
    {
      key: 23,
      quest: [
        "m<u>i</u>nute ",
        "d<u>i</u>fficult",
        "Chr<u>i</u>stmas",
        "del<u>i</u>ght",
      ],
      ans: [
        "Phát âm 'i'",
        [
          "minute /ˈmɪn.ɪt/",
          "difficult /ˈdɪf.ɪ.kəlt/",
          "Christmas /ˈkrɪs.məs/",
          "delight /dɪˈlaɪt/",
        ],
        "Phần gạch chân của đáp án delight phát âm là /aɪ/, phần gạch chân của các đáp án còn lại phát âm là /i/.",
        "delight",
      ],
    },
  ],
};

const renderOptions = (alphabets, quest, ans) => {
  const options = alphabets.map((item, index) => {
    return `
      <div class="col">
        <span class="fw-bold">${item}.</span> ${quest[ans[index]]}
      </div>
    `;
  });
  return options.join(" ");
};

const renderAnswer = (ans) => {
  return `
    <ul class="list-group">
      <li class="list-group-item fw-bold">${ans[0]}</li>
      <li class="list-group-item">
        <ul class="list-group">
          <li class="list-group-item">${ans[1][0]}</li>
          <li class="list-group-item">${ans[1][1]}</li>
          <li class="list-group-item">${ans[1][2]}</li>
          <li class="list-group-item">${ans[1][3]}</li>
        </ul>
      </li>
      <li class="list-group-item"><span class="fw-bold">Giải thích:</span> ${ans[2]}</li>
      <li class="list-group-item"><span class="fw-bold">Đáp án:</span> ${ans[3]}</li>
    </ul>
  `;  
};

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx.content.length - 1, 5);
  const quests = test.map((item, index) => {
    const quest = idx.content[item].quest;
    const ans = generateUniqueRandomNumbers(0, 3, 4);
    const alphabets = ["A", "B", "C", "D"];
    return `
        <div class="pb-3 lh-sm fs-5 row" key=${idx.content[item].key}>
          <div class="row pb-1">
            <div class="col-1 fw-bold">${index + 1}. </div>
            ${renderOptions(alphabets, quest, ans)}
          </div>
          <div class="row d-none">
            ${renderAnswer(idx.content[item].ans)}
          </div>
        </div>
      `;
  });

  return quests.join(" ");
};

const render = `
    <p class="fw-bold fs-4 text-decoration-underline">
        I. ${idx.title}
    </p>
    ${renderQuests()}
`;

document.getElementById("idx-1").insertAdjacentHTML("beforeend", render);

