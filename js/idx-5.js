import { generateUniqueRandomNumbers } from "./utils.js";

const idx = {
    "id": 5,
    "title": "Read the following passage. For each question, choose the correct option that best suits each blank.",
    "content": [
        {
            "key": 1,
            "passage": "This story is about how my ___________ got lost on vacation. Last summer, I took an airplane to the Bahamas. I heard that airports are not always reliable and sometimes lose luggage. So, I put all my clothes in a ___________ suitcase that would stand out from the others, and I put my phone and camera in a small backpack to take on the plane. I checked in my suitcase using my boarding pass and got on the plane. When the plane landed, I went to the ___________ area to pick it up. I waited and waited, but it never came. I went to customs and showed them my ___________ and asked them about my suitcase, but they had not seen it. I looked everywhere. Luckily, I still had my ___________ with my phone in it. I was able to use it to call the airline and find my missing suitcase.",
            "quest": [
                [
                    "boarding pass",
                    "luggage",
                    "backpack",
                    "phone"
                ],
                [
                    "old pink large",
                    "large pink old",
                    "pink large old",
                    "large old pink"
                ],
                [
                    "baggage claim",
                    "customs",
                    "ticket counter",
                    "airport"
                ],
                [
                    "phone",
                    "passport",
                    "camera",
                    "ticket"
                ],
                [
                    "luggage",
                    "suitcase",
                    "backpack",
                    "wallet"
                ]
            ],
            "ans": [
                [
                    "Từ vựng",
                    "boarding pass (n): thẻ lên máy bay <br/>luggage (n): hành lí <br/>backpack (n): ba lô <br/>phone (n): điện thoại",
                    "This story is about how my <b>luggage</b> got lost on vacation.",
                    "Đây là câu chuyện về việc bằng cách nào mà hành lí của tôi thất lạc trong kì nghỉ.",
                    "luggage"
                ],
                [
                    "Trật tự tính từ",
                    "Chỗ trống cần điền một tính từ theo đúng trật tự: kích cỡ => tuổi => màu sắc. <br/>large (adj): lớn <br/>pink (adj): màu hồng <br/>old (adj): cũ",
                    "So, I put all my clothes in a <b>large old pink</b> suitcase that would stand out from the others.",
                    "Nên, tôi đã để tất cả quần áo vào một cái vali cũ lớn màu hồng mà có thể dễ phân biệt với những cái khác.",
                    "large old pink"
                ],
                [
                    "Từ vựng",
                    "baggage claim (n): khu nhận hành lý <br/>customs (n): hải quan <br/>ticket counter (n): quầy bán vé <br/>airport (n): sân bay",
                    "When the plane landed, I went to the <b>baggage claim</b> area to pick it up.",
                    "Khi máy bay hạ cánh, tôi đến khu vực nhận hành lí để nhặt nó.",
                    "baggage claim"
                ],
                [
                    "Từ vựng",
                    "phone (n): điện thoại <br/>passport (n): hộ chiếu <br/>camera (n): máy ảnh <br/>ticket (n): vé",
                    "I went to customs and showed them my <b>passport</b> and asked them about my suitcase, but they had not seen it.",
                    "Tôi đến hải quan và cho họ xem hộ chiếu của tôi và hỏi về cái va li của tôi nhưng họ nói họ không thấy.",
                    "passport"
                ],
                [
                    "Từ vựng",
                    "luggage (n): hành lí <br/>suitcase (n): vali <br/>backpack (n): ba lô <br/>wallet (n): ví",
                    "Luckily, I still had my <b>backpack</b> with my phone in it.",
                    "May mắn là, tôi vẫn còn ba lô với điện thoại trong đó.",
                    "backpack"
                ]
            ]
        },
        {
            "key": 2,
            "passage": "Studying abroad is becoming popular for many students looking to learn more about other languages and countries. Sometimes, students __________ work with an online exchange organization to make travel arrangements and make sure they have a wonderful and safe experience while away. Studying abroad is also a __________ way to meet new friends, visit new places, and experience different things. Students are __________ to learn about new opportunities and meet people from other cultures. __________ learning in a foreign country can be difficult, they are pleased when they __________ their first test, complete their first project, or meet amazing new people. Overall, it’s a great way to travel to other countries and learn more about the world.",
            "quest": [
                [
                    "have",
                    "have to",
                    "have",
                    "has to"
                ],
                [
                    "great",
                    "terrible",
                    "pleased",
                    "surprised"
                ],
                [
                    "upset",
                    "disappointed",
                    "delighted",
                    "annoyed"
                ],
                [
                    "Because",
                    "Although",
                    "However",
                    "So"
                ],
                [
                    "pass",
                    "present",
                    "fail",
                    "take"
                ]
            ],
            "ans": [
                [
                    "Cụm từ",
                    "Cấu trúc “have to” (phải) : S + have to + Vo (nguyên thể).",
                    "Sometimes, students <b>have to</b> work with an online exchange organization to make travel arrangements and make sure they have a wonderful and safe experience while away.",
                    "Đôi khi, sinh viên phải làm việc với một tổ chức trao đổi trực tuyến để sắp xếp việc đi lại và đảm bảo rằng họ có trải nghiệm tuyệt vời và an toàn khi đi xa.",
                    "have to"
                ],
                [
                    "Từ vựng",
                    "great (adj): tuyệt vời, tốt <br/>terrible (adj): tệ <br/>pleased (adj): hài lòng <br/>surprised (adj): ngạc nhiên",
                    "Studying abroad is also a <b>great</b> way to meet new friends, visit new places, and experience different things.",
                    "Du học cũng là một cách tuyệt vời để gặp gỡ những người bạn mới, thăm những địa điểm mới và trải nghiệm những điều khác biệt.",
                    "great"
                ],
                [
                    "Từ vựng",
                    "upset (adj): buồn <br/>disappointed (adj): thất vọng <br/>delighted (adj): vui sướng <br/>annoyed (adj): phiền",
                    "Students are <b>delighted</b> to learn about new opportunities and meet people from other cultures.",
                    "Học sinh rất vui khi tìm hiểu về những cơ hội mới và gặp gỡ những người từ các nền văn hóa khác.",
                    "delighted"
                ],
                [
                    "Từ vựng",
                    "because (conj): vì <br/>although (conj): mặc dù <br/>however (conj): tuy nhiên <br/>so (conj): vì vậy",
                    "Although learning in a foreign country can be difficult, they are pleased when they pass their first test.",
                    "Mặc dù việc học ở nước ngoài có thể khó khăn, nhưng họ hài lòng khi họ vượt qua bài kiểm tra đầu tiên của họ.",
                    "although"
                ],
                [
                    "Từ vựng",
                    "pass (v): đậu <br/>present (v): trình bày <br/>fail (v): trượt <br/>take (v): làm (bài kiểm tra)",
                    "Although learning in a foreign country can be difficult, they are pleased when they <b>pass</b> their first test.",
                    "Mặc dù học tập ở nước ngoài có thể khó khăn, nhưng họ rất vui khi vượt qua bài kiểm tra đầu tiên của mình.",
                    "pass"
                ]
            ]
        },
        {
            "key": 3,
            "passage": "Transportation __________ in many ways over the years. The oldest known form of transportation is __________ boat. Around 60,000 years ago, boats were made by hollowing out a tree trunk, also known as a canoe. Riders had to use paddles to control the canoe across the water. __________, today boats are more convenient because they have an engine that powers them. <br /> Next came horses. __________, it took 55,000 years after the invention of the boat to discover horses as a means of transportation. At first, horses were ridden without a saddle, also called riding bareback. But over time, riders used saddles to make traveling more comfortable and __________ to control the horse. After that, it didn’t take long for us to figure out we could use a wagon and a horse to help carry equipment and people.",
            "quest": [
                [
                    "changed",
                    "has changed",
                    "changes",
                    "is changing"
                ],
                [
                    "a",
                    "an",
                    "the",
                    "some"
                ],
                [
                    "However",
                    "Therefore",
                    "Otherwise",
                    "Although"
                ],
                [
                    "Surprising",
                    "Surprised",
                    "Surprisingly",
                    "Surprise"
                ],
                [
                    "easy",
                    "easily",
                    "the easiest",
                    "easier"
                ]
            ],
            "ans": [
                [
                    "Thì hiện tại hoàn thành",
                    "Dấu hiệu nhận biết 'over the years' (qua nhiều năm) => công thức thì hiện tại hoàn thành, chủ ngữ số ít ở dạng khẳng định: S + has + V3/ed.",
                    "Transportation <b>has changed</b> in many ways over the years.",
                    "Giao thông vận tải đã thay đổi theo nhiều cách trong những năm qua.",
                    "has changed"
                ],
                [
                    "Mạo từ",
                    "Cách sử dụng mạo từ The: <br/>_Đề cập đến đối tượng lần 2. <br/>_Khi đối tượng được nhắc đến đã rõ ràng, xác định. <br/>_Đối tượng nhắc đến là duy nhất. <br/>A/an: <br/>_Đề cập đến đối tượng lần đầu tiên. <br/>_Nói về công việc của ai đó. <br/>Không dùng mạo từ khi đối tượng nhắc đến mang tính tổng quát, không cụ thể. <br/>'boat' (con thuyền) trong bài là đối tượng đã được xác định nên dùng 'the'.",
                    "The oldest known form of transportation is <b>the</b> boat.",
                    "Hình thức vận chuyển lâu đời nhất được biết đến là thuyền.",
                    "the"
                ],
                [
                    "Từ vựng",
                    "however (adv): tuy nhiên <br/>therefore (adv): do đó <br/>otherwise (adv): nếu không <br/>although (conj): mặc dù",
                    "However, today boats are more convenient because they have an engine that powers them.",
                    "Tuy nhiên, ngày nay thuyền tiện lợi hơn vì chúng có động cơ chạy bằng động cơ.",
                    "However"
                ],
                [
                    "Từ loại",
                    "Đứng đầu câu, trước dấu phẩy cần một trạng từ. surprising (adj): bất ngờ <br/>surprised (adj): bị bất ngờ <br/>surprisingly (adv): một cách bất ngờ <br/>surprise (v): gây bất ngờ",
                    "Surprisingly, it took 55,000 years after the invention of the boat to discover horses as a means of transportation.",
                    "Đáng ngạc nhiên là phải mất 55.000 năm sau khi phát minh ra thuyền, người ta mới phát hiện ra ngựa là phương tiện di chuyển.",
                    "Surprisingly"
                ],
                [
                    "So sánh hơn",
                    "'and' (và) dùng để nối các từ cùng loại trong câu. Trước 'and' là tính từ dạng so sánh hơn 'more comfortable' (thoải mái hơn) nên sau 'and' cũng phải là một tính từ dạng so sánh hơn. easy (adj): đơn giản => tính từ ngắn <br/>Công thức so sánh hơn của tính từ ngắn: S1 + tobe + tính từ ngắn + er + than + S2.",
                    "But over time, riders used saddles to make traveling more comfortable and <b>easier</b> to control the horse.",
                    "Nhưng theo thời gian, những người cưỡi ngựa đã sử dụng yên ngựa để đi lại thoải mái hơn và dễ điều khiển ngựa hơn.",
                    "easier"
                ]
            ]
        },
        {
            "key": 4,
            "passage": "Last spring, I visited my cousin living in Ho Chi Minh City. She suggested the best time to visit the city was during the Tet __________. I had such a great time, so I want to share my personal __________ and what I learned about the Vietnam Lunar New Year. First, Tet is a __________ of the start of spring. The city is full of flower vendors, and all the trees are in bloom. Second, it’s about paying respect to your ancestors. I saw many people burning incense and families putting out food and fruit for their loved ones who have passed away. Finally, Tet __________ about spending time with your family. I was surprised at how empty the city was. My cousin told me it's a __________ for families to return to their hometown to celebrate the New Year.",
            "quest": [
                [
                    "tradition",
                    "festival",
                    "celebrate",
                    "experience"
                ],
                [
                    "experience",
                    "performance",
                    "competition",
                    "interest"
                ],
                [
                    "festival",
                    "experience",
                    "tradition",
                    "celebration"
                ],
                [
                    "won’t be",
                    "is",
                    "will be",
                    "can be"
                ],
                [
                    "competition",
                    "experience",
                    "tradition",
                    "holiday"
                ]
            ],
            "ans": [
                [
                    "Từ vựng",
                    "tradition (n): truyền thống <br/>festival (n): lễ hội <br/>celebrate (v): kỷ niệm <br/>experience (n): kinh nghiệm",
                    "She suggested the best time to visit the city was during the Tet <b>festival</b>.",
                    "Cô gợi ý thời gian tốt nhất để thăm thành phố là trong lễ Tết.",
                    "festival"
                ],
                [
                    "Từ vựng",
                    "experience (n): kinh nghiệm <br/>performance (n): phần thể hiện <br/>competition (n): cuộc thi <br/>interest (n): hứng thú",
                    "I want to share my personal <b>experience</b> and what I learned about the Vietnam Lunar New Year.",
                    "Tôi muốn chia sẻ kinh nghiệm cá nhân của tôi và những gì tôi học được về Tết Nguyên đán Việt Nam.",
                    "experience"
                ],
                [
                    "Từ vựng",
                    "festival (n): lễ hội <br/>experience (n): kinh nghiệm <br/>tradition (n): truyền thống <br/>celebration (n): sự ăn mừng",
                    "Tet is a <b>celebration</b> of the start of spring.",
                    "Tết là lễ mừng đầu xuân.",
                    "celebration"
                ],
                [
                    "Thì hiện tại đơn",
                    "Thì hiện tại đơn diễn tả một sự thật, một hành động có thật ở hiện tại. Công thức thì hiện tại đơn với động từ tobe ở dạng khẳng định chủ ngữ số ít: S + is.",
                    "Tet <b>is</b> about spending time with your family.",
                    "Tết là để dành thời gian cho gia đình của bạn.",
                    "is"
                ],
                [
                    "Từ vựng",
                    "competition (n): cuộc thi <br/>experience (n): kinh nghiệm <br/>tradition (n): truyền thống <br/>holiday (n): kì nghỉ",
                    "My cousin told me it's a <b>tradition</b> for families to return to their hometown to celebrate the New Year.",
                    "Anh họ tôi nói với tôi đó là truyền thống của các gia đình về quê ăn Tết.",
                    "tradition"
                ]
            ]
        },
        {
            "key": 5,
            "passage": "DAY OF THE DEAD <br /> Robert Jones, March 12 <br /> Day of the Dead is a special festival in Mexico and other countries in Latin America. It lasts two __________ from November 1st to November 2nd. Although you may think that it is similar to Halloween, the two __________ are very different. On Halloween, people wear costumes to scare ghosts away. On the Day of the Dead, people welcome the ghosts of their dead family members home. One of the __________ of this festival is making offrendas for the dead. An offrenda is like a collection of __________ for the dead. It includes flowers, candies, foods, and drinks. People add photos and beautiful paper cut-outs to their offrendas. These cut-outs are called papel picado. People believe the offrendas will __________ the dead the way home. Day of the Dead is a day of joy and love.",
            "quest": [
                [
                    "days",
                    "weeks",
                    "months",
                    "years"
                ],
                [
                    "festivals",
                    "places",
                    "vacations",
                    "events"
                ],
                [
                    "harvests",
                    "traditions",
                    "parties",
                    "celebrations"
                ],
                [
                    "shopping",
                    "gifts",
                    "donations",
                    "offerings"
                ],
                [
                    "look",
                    "listen",
                    "show",
                    "guide"
                ]
            ],
            "ans": [
                [
                    "Từ vựng",
                    "days (n): ngày <br/> weeks (n): tuần <br/> months (n): tháng <br/> years (n): năm",
                    "It lasts two <b>days</b> from November 1st to November 2nd.",
                    "Nó kéo dài hai ngày từ ngày 1 tháng 11 đến ngày 2 tháng 11.",
                    "days"
                ],
                [
                    "Từ vựng",
                    "festivals (n): lễ hội <br/> places (n): địa điểm <br/> vacations (n): kỳ nghỉ <br/> events (n): sự kiện",
                    "Although you may think that it is similar to Halloween, the two <b>festivals</b> are very different.",
                    "Mặc dù bạn có thể nghĩ rằng nó tương tự như Halloween, nhưng hai lễ hội này rất khác nhau.",
                    "festivals"
                ],
                [
                    "Từ vựng",
                    "harvests (n): vụ mùa <br/> traditions (n): truyền thống <br/> parties (n): bữa tiệc <br/> celebrations (n): sự ăn mừng",
                    "One of the <b>traditions</b> of this festival is making offrendas for the dead.",
                    "Một trong những truyền thống của lễ hội này là làm lễ tế cho người chết.",
                    "traditions"
                ],
                [
                    "Từ vựng",
                    "shopping (n): mua sắm <br/> gifts (n): quà tặng <br/> donations (n): sự quyên góp <br/> offerings (n): đồ cúng",
                    "An offrenda is like a collection of <b>gifts</b> for the dead.",
                    "Lễ tế giống như một bộ sưu tập quà tặng cho người chết.",
                    "gifts"
                ],
                [
                    "Từ vựng",
                    "look (v): nhìn <br/> listen (v): nghe <br/> show (v): chỉ đường <br/> guide (v): dẫn đường",
                    "People believe the offrendas will <b>show</b> the dead the way home.",
                    "Mọi người tin rằng lễ tế sẽ chỉ đường cho người chết về nhà.",
                    "show"
                ]
            ]
        },
        {
            "key": 6,
            "passage": "Traffic jams in Viet Nam frequently __________ place in big cities, such as Ha Noi and Ho Chi Minh City.<br />There is no fixed rule for the time a traffic jam to happen. But it is worst __________ the rush hour when everyone is in a hurry to get to work or come back home. Apart from peak hours, the time between 9 a.m. to 10 a.m. and between 3 p.m. to 4 p.m. also witnesses long lines of vehicles, mainly motorbikes. __________ it rains, the traffic jam gets more terrible. Taxis are extremely hard to catch or wave during the downpour.<br />__________, the most annoying thing about the traffic jam is the way people react to it. Most road users ride their motorbikes on the pavement rather than __________ calmly. Moreover, they constantly use their horns to hasten riders in the front, even shouting at them from time to time.",
            "quest": [
                [
                    "take",
                    "takes",
                    "took",
                    "are taking"
                ],
                [
                    "at",
                    "on",
                    "during",
                    "within"
                ],
                [
                    "That",
                    "When",
                    "After",
                    "Before"
                ],
                [
                    "Therefore",
                    "But",
                    "Though",
                    "However"
                ],
                [
                    "wait",
                    "to wait",
                    "waiting",
                    "waited"
                ]
            ],
            "ans": [
                [
                    "Thì hiện tại đơn",
                    "Dấu hiệu nhận biết 'frequently' (thường xuyên) => thì hiện tại đơn diễn tả sự thật hiển nhiên. Công thức thì hiện tại đơn ở dạng khẳng định với chủ ngữ số nhiều: S + V(nguyên thể).",
                    "Traffic jams in Viet Nam frequently <b>take</b> place in big cities, such as Ha Noi and Ho Chi Minh City.",
                    "Ùn tắc giao thông ở Việt Nam thường xuyên diễn ra ở các thành phố lớn, như Hà Nội và Thành phố Hồ Chí Minh.",
                    "take"
                ],
                [
                    "Giới từ",
                    "at: tại <br/> on: trên <br/> during: trong suốt <br/> within: trong vòng",
                    "But it is worst <b>during</b> the rush hour when everyone is in a hurry to get to work or come back home.",
                    "Nhưng điều tồi tệ nhất là vào giờ cao điểm khi mọi người đều vội vã đi làm hoặc trở về nhà.",
                    "during"
                ],
                [
                    "Từ vựng",
                    "That: đó <br/> When: khi <br/> After: sau khi <br/> Before: trước khi",
                    "When it rains, the traffic jam gets more terrible.",
                    "Khi trời mưa, kẹt xe càng khủng khiếp hơn.",
                    "When"
                ],
                [
                    "Liên từ",
                    "Therefore: do đó <br/> But: nhưng <br/> Though: mặc dù <br/> However: tuy nhiên",
                    "However, the most annoying thing about the traffic jam is the way people react to it.",
                    "Tuy nhiên, điều khó chịu nhất về kẹt xe là cách mọi người phản ứng với nó.",
                    "However"
                ],
                [
                    "Dạng động từ",
                    "Sau 'rather than' (hơn là) cần một động từ ở dạng V-ing.",
                    "Most road users ride their motorbikes on the pavement rather than <b>waiting</b> calmly.",
                    "Hầu hết người đi đường đều đi xe máy trên vỉa hè chứ không bình tĩnh chờ đợi.",
                    "waiting"
                ]
            ]
        },
        {
            "key": 6,
            "passage": "Jennifer Lawrence is a famous young actress __________ Hollywood. When she was a child, she liked sports, especially hockey and basketball. She also worked as a model. At the age of 14, she knew she wanted to be an actress, __________ she went to New York City to look for work. She appeared in advertisements for MTV and the fashion company H&M, and got work __________ an actress on TV and in films. In 2010, she acted in the film Winter’s Bone and she was nominated for many awards __________ an Oscar. In 2012, she starred in the film The Hunger Games as Katniss Everdeen. The film went on __________ one of the highest-grossing movies ever. One contributing element to Lawrence’s success is her fun and optimism. She is often cited as being approachable, with a personality that seems unaffected by Hollywood excesses.",
            "quest": [
                [
                    "in",
                    "on",
                    "at",
                    "from"
                ],
                [
                    "and",
                    "but",
                    "so",
                    "because"
                ],
                [
                    "like",
                    "as",
                    "so",
                    "such"
                ],
                [
                    "include",
                    "includes",
                    "included",
                    "including"
                ],
                [
                    "to become",
                    "became",
                    "become",
                    "becoming"
                ]
            ],
            "ans": [
                [
                    "Giới từ",
                    "in: trong <br/> on: trên <br/> at: ở <br/> from: từ",
                    "Jennifer Lawrence is a famous young actress <b>in</b> Hollywood.",
                    "Jennifer Lawrence là nữ diễn viên trẻ nổi tiếng ở Hollywood.",
                    "in"
                ],
                [
                    "Liên từ",
                    "and: và <br/> but: nhưng <br/> so: vì vậy <br/> because: bởi vì",
                    "At the age of 14, she knew she wanted to be an actress, <b>so</b> she went to New York City to look for work.",
                    "Năm 14 tuổi, cô biết mình muốn trở thành một diễn viên nên đã đến thành phố New York để tìm việc làm.",
                    "so"
                ],
                [
                    "Từ vựng",
                    "like: giống <br/> as: như là <br/> so: vì vậy <br/> such: quá",
                    "She appeared in advertisements for MTV and the fashion company H&M, and got work <b>as</b> an actress on TV and in films.",
                    "Cô xuất hiện trong các quảng cáo của MTV và công ty thời trang H&M, và làm diễn viên trên TV và trong các bộ phim.",
                    "as"
                ],
                [
                    "Dạng động từ",
                    "include: bao gồm <br/> includes: bao gồm <br/> included: đã bao gồm <br/> including: bao gồm",
                    "In 2010, she acted in the film Winter’s Bone and she was nominated for many awards <b>including</b> an Oscar.",
                    "Năm 2010, cô đóng vai chính trong phim Winter's Bone và được đề cử nhiều giải thưởng bao gồm cả giải Oscar.",
                    "including"
                ],
                [
                    "Dạng động từ",
                    "to become: trở thành <br/> became: trở thành <br/> become: trở thành <br/> becoming: đang trở thành",
                    "The film went on <b>to become</b> one of the highest-grossing movies ever.",
                    "Bộ phim tiếp tục trở thành một trong những bộ phim có doanh thu cao nhất từ trước đến nay.",
                    "to become"
                ]
            ]
        },
        {
            "key": 7,
            "passage": "Dear Mark,<br />How are you? I’m writing to tell you about the great film I __________ last Saturday at the cinema. I went to see Titanic with some friends. Titanic is a romantic film, which was directed __________ James Cameron. It stars Leonardo DiCaprio and Kate Winslet. The film is about the sinking of the ship Titanic on its first voyage. The main characters are Jack Dawson and Rose DeWitt Bukater. __________ they are from different social classes, and Rose is already engaged, they fall in love. I won’t tell you what happens in case you want to watch it! Titanic received a lot of positive reviews because the plot is moving and, the acting is excellent. The special effects, visuals, and music are also incredible. I think it is worth __________. What about you? What type of films do you like? Have you been to __________ cinema lately? What did you see? Write back and tell me.<br />Yours,<br />Nick",
            "quest": [
                [
                    "see",
                    "am seeing",
                    "saw",
                    "was seen"
                ],
                [
                    "by",
                    "with",
                    "from",
                    "as"
                ],
                [
                    "Because",
                    "However",
                    "Despite",
                    "Although"
                ],
                [
                    "to watch",
                    "watching",
                    "watch",
                    "watched"
                ],
                [
                    "a",
                    "an",
                    "the",
                    "x"
                ]
            ],
            "ans": [
                [
                    "Thì quá khứ đơn",
                    "Dấu hiệu nhận biết 'last Saturday' (thứ bảy vừa rồi) => công thức thì quá khứ đơn ở dạng khẳng định của động từ thường thể chủ động: S + V2/ed.",
                    "I’m writing to tell you about the great film I <b>saw</b> last Saturday at the cinema.",
                    "Tôi viết thư này để kể cho bạn nghe về bộ phim tuyệt vời mà tôi đã xem vào thứ bảy tuần trước tại rạp chiếu phim.",
                    "saw"
                ],
                [
                    "Giới từ",
                    "by: bởi <br /> with: với <br /> from: từ <br /> as: như",
                    "Titanic is a romantic film, which was directed <b>by</b> James Cameron.",
                    "Titanic là một bộ phim lãng mạn do James Cameron làm đạo diễn.",
                    "by"
                ],
                [
                    "Liên từ",
                    "Because: bởi vì <br /> However: tuy nhiên <br /> Despite: mặc dù + N/ V-ing <br /> Although: mặc dù + S + V",
                    "Although they are from different social classes, and Rose is already engaged, they fall in love.",
                    "Mặc dù họ thuộc các tầng lớp xã hội khác nhau và Rose đã đính hôn nhưng họ yêu nhau.",
                    "Although"
                ],
                [
                    "Dạng động từ",
                    "Sau 'It is worth' (nó rất đáng để…) cần một động từ ở dạng V-ing.",
                    "I think it is worth <b>watching</b>.",
                    "Tôi nghĩ rằng nó đang để xem.",
                    "watching"
                ],
                [
                    "Mạo từ",
                    "Cách sử dụng mạo từ The: <br /> _Đề cập đến đối tượng lần 2. <br /> _Khi đối tượng được nhắc đến đã rõ ràng, xác định. <br /> _Đối tượng nhắc đến là duy nhất. <br /> A/an: <br /> _Đề cập đến đối tượng lần đầu tiên. <br /> _Nói về công việc của ai đó. <br /> Không dùng mạo từ khi đối tượng nhắc đến mang tính tổng quát, không cụ thể.",
                    "Have you been to <b>the</b> cinema lately?",
                    "Gần đây bạn có đi xem phim không?",
                    "the"
                ]
            ]
        }
    ]
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
        <ul class="list-group py-2">
          <li class="list-group-item fw-bold"><span class="fw-bold">Kiến thức: </span>${ans[0]}</li>
          <li class="list-group-item">
            ${ans[1]}
          </li>
          <li class="list-group-item">
            ${ans[2]}
          </li>
          <li class="list-group-item"><span class="fw-bold">Dịch:</span> ${ans[3]}</li>
          <li class="list-group-item"><span class="fw-bold">Đáp án:</span> ${ans[4]}</li>
        </ul>
      `;
  };
  
  const renderQuests = () => {
    const test = generateUniqueRandomNumbers(0, idx.content.length - 1, 1);
    const quests = test[0];

    const quest = idx.content[quests].quest;
    const ans = generateUniqueRandomNumbers(0, 3, 4);
    const alphabets = ["A", "B", "C", "D"];

    return `
        <div class="pb-3 lh-sm fs-5 row" key=${idx.content[quests].key}>
            <div class="row pb-2">
                <p class="lh-base" style="text-align: justify">${idx.content[quests].passage}</p>
            </div>
            ${
                quest.map((item, index) => {
                    return `
                        <div class="row pb-2">
                            <div class="col-1 fw-bold">${index + 1}. </div>
                            ${renderOptions(alphabets, item, ans)}
                        </div>
                        
                        <div class="row d-none">
                            ${renderAnswer(idx.content[quests].ans[index])}
                        </div>
                    `
                }).join(" ")
            }
        </div>
    `

    // const quests = test.map((item, index) => {
    //   const quest = idx.content[item].quest;
    //   const ans = generateUniqueRandomNumbers(0, 3, 4);
    //   const alphabets = ["A", "B", "C", "D"];
    //   return `
    //         <div class="pb-3 lh-sm fs-5 row" key=${idx.content[item].key}>
    //           <div class="row pb-1">
    //               <div class="row pb-1">
    //                   <div><span class="fw-bold">${index + 1}.</span> &nbsp${quest[0]}</div>
    //               </div>
    //               <div class="row">
    //                   <div class="col-1"></div>
    //                   ${renderOptions(alphabets, quest[1], ans)}
    //               </div>
    //           </div>
    //           <div class="row d-none">
    //             ${renderAnswer(idx.content[item].ans)}
    //           </div>
    //         </div>
    //       `;
    // });
  
    // return quests.join(" ");
  };
  
  const render = `
        <p class="fw-bold fs-4 text-decoration-underline">
            V. ${idx.title}
        </p>
        ${renderQuests()}
  `;
  
  document.getElementById("idx-5").insertAdjacentHTML("beforeend", render);
  