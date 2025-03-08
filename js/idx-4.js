import { generateUniqueRandomNumbers } from "./utils.js";

const idx = {
  id: 4,
  title: "Write the correct form of the words in brackets.",
  content: [
    {
      key: 1,
      quest: [
        "Timothy was _________ at the result of his geography test.",
        "DISAPPOINT",
      ],
      ans: [
        "Từ loại",
        "Sau động từ tobe thường sẽ là một tính từ nên ta sẽ điền một tính từ vào chỗ trống.<br/>disappoint (v) => disappointed (adj)<br/>Timothy was <b>disappointed</b> at the result of his geography test.",
        "Timothy cảm thấy thất vọng với kết quả bài thi môn Địa lý của anh ta.",
        "disappointed",
      ],
    },
    {
      key: 2,
      quest: [
        "Ben came top of the class in all subjects and his parents were so _________.",
        "SURPRISE",
      ],
      ans: [
        "Từ loại",
        "Sau động từ tobe thường sẽ là một tính từ nên ta sẽ điền một tính từ vào chỗ trống.<br/>surprise (v) => surprised (adj)<br/>Ben came top of the class in all subjects and his parents were so <b>surprised</b>.",
        "Ben đứng đầu lớp ở tất cả các môn học và bố mẹ cậu ấy rất bất ngờ.",
        "surprised",
      ],
    },
    {
      key: 3,
      quest: [
        "Traveling around the UK by train is a fast and __________ way to explore the country.",
        "COMFORT",
      ],
      ans: [
        "Từ loại",
        "Chỗ trống đứng trước một danh từ nên từ cần điền sẽ là một tính từ.<br/>comfort (n) => comfortable (adj)<br/>Traveling around the UK by train is a fast and <b>comfortable</b> way to explore the country.",
        "Du lịch quanh nước Anh bằng tàu là một cách nhanh chóng và thoải mái để khám phá đất nước.",
        "comfortable",
      ],
    },
    {
      key: 4,
      quest: [
        "Although I prepared carefully, I got nervous when giving my __________.",
        "PRESENT",
      ],
      ans: [
        "Từ loại",
        "Sau một tính từ sở hữu ta cần điền một danh từ vào chỗ trống.<br/>present (v) => presentation (n)<br/>Although I prepared carefully, I got nervous when giving my <b>presentation</b>.",
        "Dù tôi đã chuẩn bị kĩ càng, tôi vẫn thấy lo lắng khi thuyết trình.",
        "presentation",
      ],
    },
    {
      key: 5,
      quest: [
        "Studying abroad makes you more __________ and open to new experiences.",
        "DEPEND",
      ],
      ans: [
        "Từ loại",
        "make sb adj: khiến ai đó cảm thấy như thế nào. Ta cần điền một tính từ vào chỗ trống.<br/>depend (v) => independent (adj)<br/>Studying abroad makes you more <b>independent</b> and open to new experiences.",
        "Du học sẽ khiến bạn cảm thấy tự chủ và cởi mở với những trải nghiệm mới.",
        "independent",
      ],
    },
    {
      key: 6,
      quest: [
        "During the Lazarim Carnival in Portugal, there are singing _________.",
        "COMPETE",
      ],
      ans: [
        "Từ loại",
        "Sau động từ tobe thường sẽ là một tính từ hoặc danh từ, và động từ tobe ở dạng số nhiều nên ta sẽ điền một danh từ số nhiều vào chỗ trống.<br/>compete (v) => competitions (n)<br/>During the Lazarim Carnival in Portugal, there are singing <b>competitions</b>.",
        "Trong lễ hội Lazarim ở Bồ Đào Nha, có rất nhiều cuộc thi hát.",
        "competitions",
      ],
    },
    {
      key: 7,
      quest: [
        "On __________ in Hanoi, I was picked up by my pen pal.",
        "ARRIVE",
      ],
      ans: [
        "Từ loại",
        "Sau giới từ 'on' cần một danh từ.<br/>arrive (v) => arrival (n)<br/>On <b>arrival</b> in Hanoi, I was picked up by my pen pal.",
        "Khi đến Hà Nội, tôi đã được người bạn qua thư đón.",
        "arrival",
      ],
    },
    {
      key: 8,
      quest: [
        "What have the authorities done to improve public __________ of the city?",
        "TRANSPORT",
      ],
      ans: [
        "Từ loại",
        "Sau tính từ 'public' cần một danh từ.<br/>transport (v) => transportation (n)<br/>What have the authorities done to improve public <b>transportation</b> of the city?",
        "Các nhà chức trách đã làm gì để cải thiện giao thông công cộng của thành phố?",
        "transportation",
      ],
    },
    {
      key: 9,
      quest: [
        "Life in __________ advanced countries is more comfortable.",
        "TECHNOLOGY",
      ],
      ans: [
        "Từ loại",
        "Trước tính từ 'advanced' cần một trạng từ.<br/>technology (n) => technologically (adv)<br/>Life in <b>technologically</b> advanced countries is more comfortable.",
        "Cuộc sống ở các quốc gia tiên tiến về công nghệ thoải mái hơn.",
        "technologically",
      ],
    },
    {
      key: 10,
      quest: [
        "My __________ boys can't stand staying indoors all weekend.",
        "ENERGY",
      ],
      ans: [
        "Từ loại",
        "Trước danh từ 'boys' cần một tính từ để bổ nghĩa.<br/>energy (n) => energetic (adj)<br/>My <b>energetic</b> boys can't stand staying indoors all weekend.",
        "Những đứa con trai tràn đầy năng lượng của tôi không thể chịu đựng nổi việc ở trong nhà suốt cả cuối tuần.",
        "energetic",
      ],
    },
    {
      key: 11,
      quest: [
        "We were not satisfied with the service. The sales assistants were __________.",
        "HELP",
      ],
      ans: [
        "Từ loại",
        "Sau động từ to be cần một tính từ để bổ nghĩa.<br/>help (v) => unhelpful (adj)<br/>We were not satisfied with the service. The sales assistants were <b>unhelpful</b>.",
        "Chúng tôi không hài lòng với dịch vụ. Các trợ lý bán hàng không nhiệt tình giúp đỡ.",
        "unhelpful",
      ],
    },
    {
      key: 12,
      quest: [
        "Today, we get a lot of energy from fossil fuels: coal, oil, and ________ gas.",
        "NATURE",
      ],
      ans: [
        "Từ loại",
        "Sau danh từ fossil fuels cần một tính từ để bổ nghĩa cho danh từ gas.<br/>nature (n) => natural (adj)<br/>Today, we get a lot of energy from fossil fuels: coal, oil, and <b>natural</b> gas.",
        "Ngày nay, chúng ta nhận được rất nhiều năng lượng từ nhiên liệu hóa thạch: than đá, dầu mỏ và khí đốt tự nhiên.",
        "natural",
      ],
    },
    {
      key: 13,
      quest: [
        "They are ________ and help me practice English every day.",
        "FRIEND",
      ],
      ans: [
        "Từ loại",
        "Sau động từ to be cần một tính từ để bổ nghĩa.<br/>friend (n) => friendly (adj)<br/>They are <b>friendly</b> and help me practice English every day.",
        "Họ rất thân thiện và giúp tôi luyện tiếng Anh mỗi ngày.",
        "friendly",
      ],
    },
    {
      key: 14,
      quest: [
        "The Thames Festival is an annual __________ of the River Thames in London with many exciting events and talks.",
        "CELEBRATE",
      ],
      ans: [
        "Từ loại",
        "Sau tính từ annual cần một danh từ.<br/>celebrate (v) => celebration (n)<br/>The Thames Festival is an annual <b>celebration</b> of the River Thames in London with many exciting events and talks.",
        "Lễ hội Thames là một lễ kỷ niệm hàng năm của sông Thames ở London với nhiều sự kiện và buổi nói chuyện thú vị.",
        "celebration",
      ],
    },
    {
      key: 15,
      quest: [
        "Buses in this country aren’t __________. They’re often late.",
        "RELY",
      ],
      ans: [
        "Từ loại",
        "Sau động từ to be cần một tính từ để bổ nghĩa.<br/>rely (v) => reliable (adj)<br/>Buses in this country aren’t <b>reliable</b>. They’re often late.",
        "Xe buýt ở đất nước này không đáng tin cậy. Chúng thường trễ.",
        "reliable",
      ],
    },
    {
      key: 16,
      quest: [
        "I was so __________ because I got an A plus on my English test.",
        "SURPRISE",
      ],
      ans: [
        "Từ loại",
        "Sau động từ to be cần một tính từ để bổ nghĩa.<br/>surprise (v) => surprised (adj)<br/>I was so <b>surprised</b> because I got an A plus on my English test.",
        "Tôi đã rất ngạc nhiên vì tôi đã đạt điểm A cộng trong bài kiểm tra tiếng Anh của mình.",
        "surprised",
      ],
    },
    {
      key: 17,
      quest: [
        "When we burn fossil fuels, they cause air ________, and they are non-renewable.",
        "POLLUTE",
      ],
      ans: [
        "Từ loại",
        "Sau danh từ 'air' cần một danh từ để tạo thành cụm danh từ có nghĩa.<br/>pollute (v) => pollution (n)<br/>When we burn fossil fuels, they cause air <b>pollution</b>, and they are non-renewable.",
        "Khi chúng ta đốt nhiên liệu hóa thạch, chúng gây ô nhiễm không khí và không thể tái tạo.",
        "pollution",
      ],
    },
    {
      key: 18,
      quest: [
        "Wind power is cheap and produces clean energy, but wind turbines can be ________ and some people think they look ugly.",
        "NOISE",
      ],
      ans: [
        "Từ loại",
        "Sau động từ 'to be' cần một tính từ để bổ nghĩa.<br/>noise (n) => noisy (adj)<br/>Wind power is cheap and produces clean energy, but wind turbines can be <b>noisy</b> and some people think they look ugly.",
        "Năng lượng gió rẻ và tạo ra năng lượng sạch, nhưng tua-bin gió có thể ồn ào và một số người cho rằng chúng trông xấu xí.",
        "noisy",
      ],
    },
    {
      key: 19,
      quest: [
        "Poutine and pouding chômeur are ________ dishes in Canada.",
        "TRADITION",
      ],
      ans: [
        "Từ loại",
        "Trước danh từ 'dishes' cần một tính từ để bổ nghĩa.<br/>tradition (n) => traditional (adj)<br/>Poutine and pouding chômeur are <b>traditional</b> dishes in Canada.",
        "Poutine và pouding chômeur là những món ăn truyền thống ở Canada.",
        "traditional",
      ],
    },
    {
      key: 20,
      quest: [
        "There are many amazing tourist ________ in Vancouver.",
        "ATTRACT",
      ],
      ans: [
        "Từ loại",
        "Sau tính từ 'amazing' cần một danh từ.<br/>attract (v) => attraction (n)<br/>There are many amazing tourist <b>attractions</b> in Vancouver.",
        "Có rất nhiều điểm du lịch tuyệt vời ở Vancouver.",
        "attractions",
      ],
    },
    {
      key: 21,
      quest: [
        "Last year, I participated in one of the Scottish dancing _________. I didn’t win, but I enjoyed myself a lot.",
        "COMPETE",
      ],
      ans: [
        "Từ loại",
        "Sau cụm từ 'one of the' cần một danh từ số nhiều.<br/>compete (v) => competitions (n)<br/>Last year, I participated in one of the Scottish dancing <b>competitions</b>. I didn’t win, but I enjoyed myself a lot.",
        "Năm ngoái, tôi đã tham gia một trong những cuộc thi khiêu vũ của Scotland. Tôi đã không chiến thắng, nhưng tôi đã rất vui vẻ.",
        "competitions",
      ],
    },
    {
      key: 22,
      quest: [
        "_________ energy uses panels to catch sunlight and convert it into electricity.",
        "SUN",
      ],
      ans: [
        "Từ loại",
        "Chỗ trống cần điền một danh từ để tạo thành cụm danh từ có nghĩa.<br/>sun (n) => solar (adj)<br/><b>Solar</b> energy uses panels to catch sunlight and convert it into electricity.",
        "Năng lượng mặt trời sử dụng các tấm pin để thu ánh sáng mặt trời và chuyển đổi thành điện năng.",
        "solar",
      ],
    },
    {
      key: 23,
      quest: ["Wind power is another type of ________ energy source.", "RENEW"],
      ans: [
        "Từ loại",
        "Chỗ trống cần điền một tính từ để tạo thành cụm danh từ có nghĩa.<br/>renew (v) => renewable (adj)<br/>Wind power is another type of <b>renewable</b> energy source.",
        "Năng lượng gió là một loại nguồn năng lượng tái tạo khác.",
        "renewable",
      ],
    },
    {
      key: 24,
      quest: [
        "When I first arrived, I spent half a day going ________ around Vancouver.",
        "SIGHTSEE",
      ],
      ans: [
        "Từ loại",
        "Chỗ trống cần điền một danh từ để tạo thành cụm danh từ có nghĩa.<br/>sightsee (v) => sightseeing (n)<br/>When I first arrived, I spent half a day going <b>sightseeing</b> around Vancouver.",
        "Khi tôi mới đến, tôi đã dành nửa ngày để đi tham quan xung quanh Vancouver.",
        "sightseeing",
      ],
    },
    {
      key: 25,
      quest: [
        "I think electric cars are more __________ than petrol cars because they don’t produce air pollution.",
        "FRIEND",
      ],
      ans: [
        "Từ loại",
        "Chỗ trống cần điền một tính từ để tạo thành cụm tính từ có nghĩa.<br/>friend (n) => eco-friendly (adj)<br/>I think electric cars are more <b>eco-friendly</b> than petrol cars because they don’t produce air pollution.",
        "Tôi nghĩ ô tô điện thân thiện với môi trường hơn ô tô chạy xăng vì chúng không gây ô nhiễm không khí.",
        "eco-friendly",
      ],
    },
    {
      key: 26,
      quest: [
        "Studying abroad puts you into an unfamiliar situation, so you will become more __________.",
        "DEPEND",
      ],
      ans: [
        "Từ loại",
        "Chỗ trống cần điền một tính từ để bổ nghĩa cho động từ 'become'.<br/>depend (v) => independent (adj)<br/>Studying abroad puts you into an unfamiliar situation, so you will become more <b>independent</b>.",
        "Du học đưa bạn vào một tình huống xa lạ, vì vậy bạn sẽ trở nên độc lập hơn.",
        "independent",
      ],
    },
    {
      key: 27,
      quest: [
        "As the world’s population increases, there is less land ________ for agriculture to feed all the people.",
        "LEAVE",
      ],
      ans: [
        "Từ loại",
        "Sau động từ 'is' cần một tính từ để bổ nghĩa cho danh từ 'land'.<br/>leave (v) => left (adj)<br/>As the world’s population increases, there is less land <b>left</b> for agriculture to feed all the people.",
        "Khi dân số thế giới tăng lên, sẽ có ít đất còn lại để canh tác nông nghiệp để nuôi sống tất cả mọi người.",
        "left",
      ],
    },
    {
      key: 28,
      quest: [
        "We participate in a lot of activities to help the ________ people in the countryside.",
        "OLD",
      ],
      ans: [
        "Từ loại",
        "Sau mạo từ 'the' cần một danh từ.<br/>old (adj) => elderly (n)<br/>We participate in a lot of activities to help the <b>elderly</b> people in the countryside.",
        "Chúng tôi tham gia rất nhiều hoạt động để giúp đỡ người già ở nông thôn.",
        "elderly",
      ],
    },
    {
      key: 29,
      quest: [
        "Natural gas is ________ and it is harmful to the environment.",
        "LIMIT",
      ],
      ans: [
        "Từ loại",
        "Sau động từ 'is' cần một tính từ.<br/>limit (v) => limited (adj)<br/>Natural gas is <b>limited</b> and it is harmful to the environment.",
        "Khí tự nhiên bị hạn chế và có hại cho môi trường.",
        "limited",
      ],
    },
    {
      key: 30,
      quest: [
        "He was still ________ when I saw him at 11 o’clock yesterday evening.",
        "WAKE",
      ],
      ans: [
        "Từ loại",
        "Sau động từ 'was' cần một tính từ.<br/>wake (v) => awake (adj)<br/>He was still <b>awake</b> when I saw him at 11 o’clock yesterday evening.",
        "Anh ấy vẫn còn thức khi tôi gặp anh ấy lúc 11 giờ tối hôm qua.",
        "awake",
      ],
    },
    {
      key: 31,
      quest: [
        "Traffic accidents can be ________ if people obey the rules.",
        "PREVENT",
      ],
      ans: [
        "Từ loại",
        "Chỗ trống cần điền một động từ để tạo thành cụm động từ bị động với động từ 'can'.<br/>prevent (v) => prevented (v-ed)<br/>Traffic accidents can be <b>prevented</b> if people obey the rules.",
        "Tai nạn giao thông có thể được ngăn chặn nếu mọi người tuân thủ các quy tắc.",
        "prevented",
      ],
    },
    {
      key: 32,
      quest: [
        "When too many people live in a small place, __________ can become very difficult.",
        "LIVE",
      ],
      ans: [
        "Từ loại",
        "Sau động từ 'can' cần một danh từ để tạo thành chủ ngữ trong câu.<br/>live (v) => life (n)<br/>When too many people live in a small place, <b>life</b> can become very difficult.",
        "Khi quá nhiều người sống trong một nơi nhỏ, cuộc sống có thể trở nên rất khó khăn.",
        "life",
      ],
    },
    {
      key: 33,
      quest: [
        "He is a __________ student because he goes to class every day.",
        "REGULAR",
      ],
      ans: [
        "Từ loại",
        "Trước danh từ 'student' cần một tính từ để bổ nghĩa.<br/>regular (adj) => regular (adj)<br/>He is a <b>regular</b> student because he goes to class every day.",
        "Anh ấy là một học sinh chăm chỉ vì anh ấy đi học mỗi ngày.",
        "regular",
      ],
    },
    {
      key: 34,
      quest: [
        "Coal will be __________ by another renewable source of energy in the future.",
        "REPLACE",
      ],
      ans: [
        "Từ loại",
        "Câu bị động với thì tương lai đơn. Cần điền động từ ở dạng quá khứ phân từ.<br/>replace (v) => replaced (v-ed)<br/>Coal will be <b>replaced</b> by another renewable source of energy in the future.",
        "Than sẽ được thay thế bằng một nguồn năng lượng tái tạo khác trong tương lai.",
        "replaced",
      ],
    },
    {
      key: 35,
      quest: [
        "How many __________ are there in the program tonight?",
        "PERFORM",
      ],
      ans: [
        "Từ loại",
        "Sau lượng từ 'many' cần một danh từ đếm được số nhiều.<br/>perform (v) => performances (n)<br/>How many <b>performances</b> are there in the program tonight?",
        "Có bao nhiêu tiết mục biểu diễn trong chương trình tối nay?",
        "performances",
      ],
    },
    {
      key: 36,
      quest: [
        "A man in a silver sports car __________ into a lady in a big blue truck in the middle of the intersection yesterday.",
        "CRASH",
      ],
      ans: [
        "Từ loại",
        "Động từ 'crash' cần chia ở thì quá khứ đơn để phù hợp với câu.<br/>crash (v) => crashed (v-ed)<br/>A man in a silver sports car <b>crashed</b> into a lady in a big blue truck in the middle of the intersection yesterday.",
        "Một người đàn ông đi xe thể thao màu bạc đã đâm vào một phụ nữ trên chiếc xe tải lớn màu xanh lam ở giữa ngã tư ngày hôm qua.",
        "crashed",
      ],
    },
    {
      key: 37,
      quest: [
        "Our government has spent a lot of money on schools and __________.",
        "HEALTH",
      ],
      ans: [
        "Từ loại",
        "Sau cụm từ 'a lot of money on' cần một danh từ.<br/>health (n) => healthcare (n)<br/>Our government has spent a lot of money on schools and <b>healthcare</b>.",
        "Chính phủ của chúng ta đã chi rất nhiều tiền cho các trường học và chăm sóc sức khỏe.",
        "healthcare",
      ],
    },
    {
      key: 38,
      quest: ["Do you like __________ by plane or by coach?", "TRAVEL"],
      ans: [
        "Từ loại",
        "Sau động từ 'like' cần một động từ ở dạng V-ing.<br/>travel (v) => traveling (v-ing)<br/>Do you like <b>traveling</b> by plane or by coach?",
        "Bạn thích đi du lịch bằng máy bay hay xe khách?",
        "traveling",
      ],
    },
    {
      key: 39,
      quest: ["I like solar energy because it is __________.", "PLENTY"],
      ans: [
        "Từ loại",
        "Sau động từ 'is' cần một tính từ.<br/>plenty (n) => plentiful (adj)<br/>I like solar energy because it is <b>plentiful</b>.",
        "Tôi thích năng lượng mặt trời vì nó rất phong phú.",
        "plentiful",
      ],
    },
    {
      key: 40,
      quest: [
        "A crazy cat and a __________ dog help him to find his parents.",
        "FRIEND",
      ],
      ans: [
        "Từ loại",
        "Trước danh từ 'dog' cần một tính từ để bổ nghĩa.<br/>friend (n) => friendly (adj)<br/>A crazy cat and a <b>friendly</b> dog help him to find his parents.",
        "Một con mèo điên và một con chó thân thiện giúp anh ta tìm thấy cha mẹ của mình.",
        "friendly",
      ],
    },
    {
      key: 41,
      quest: [
        "In the year 1905, astronauts __________ a life on this planet.",
        "DISCOVERY",
      ],
      ans: [
        "Từ loại",
        "Câu chia ở thì quá khứ đơn.<br/>discovery (n) => discovered (v-ed)<br/>In the year 1905, astronauts <b>discovered</b> a life on this planet.",
        "Vào năm 1905, các phi hành gia đã phát hiện ra sự sống trên hành tinh này.",
        "discovered",
      ],
    },
  ],
};

const renderAnswer = (ans) => {
  return `
        <ul class="list-group py-2">
          <li class="list-group-item fw-bold"><span class="fw-bold">Kiến thức: </span>${ans[0]}</li>
          <li class="list-group-item">
            ${ans[1]}
          </li>
          <li class="list-group-item"><span class="fw-bold">Dịch:</span> ${ans[2]}</li>
          <li class="list-group-item"><span class="fw-bold">Đáp án:</span> ${ans[3]}</li>
        </ul>
      `;
};

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx.content.length - 1, 10);
  const quests = test.map((item, index) => {
    const quest = idx.content[item].quest;
    return `
            <div class="pb-3 lh-sm fs-5 row" key=${idx.content[item].key}>
              <div class="pb-1">
                <span class="fw-bold">${index + 1}.</span> &nbsp${quest[0]} &nbsp(${quest[1]})
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
            IV. ${idx.title}
        </p>
        ${renderQuests()}
  `;

document.getElementById("idx-4").insertAdjacentHTML("beforeend", render);
