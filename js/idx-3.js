import { generateUniqueRandomNumbers } from "./utils.js";

const idx = {
  id: 3,
  title:
    "Choose the best option (A, B, C or D) to complete each of the following questions.",
  content: [
    {
      key: 1,
      quest: [
        "I never take the bus because buses are __________ than any other transport in my town.",
        ["as slow", "slower", "more slow", "much"],
      ],
      ans: [
        "Câu so sánh",
        [
          "Ta có công thức: tính từ ngắn-er + than/ more + tính từ dài + than. Vì slow là tính từ ngắn nên chỗ trống cần điền slower.",
          "I never take the bus because buses are <b>slower</b> than any other transport in my town.",
        ],
        "Tôi không bao giờ đi xe buýt vì xe buýt chậm hơn tất cả những phương tiện khác trong thị trấn.",
        "slower",
      ],
    },
    {
      key: 2,
      quest: [
        "When I go hiking, I often take some food and water in my __________.",
        ["luggage", "wallet", "suitcase", "backpack"],
      ],
      ans: [
        "Từ vựng",
        [
          "luggage (n): hành lý",
          "wallet (n): ví",
          "suitcase (n): va-li",
          "backpack (n): ba lô",
          "When I go hiking, I often take some food and water in my <b>backpack</b>.",
        ],
        "Khi tôi đi bộ leo núi, tôi thường mang theo một ít đồ ăn và nước uống trong ba lô.",
        "backpack",
      ],
    },
    {
      key: 3,
      quest: [
        "The teacher was __________ because some students were talking in class and weren’t paying attention to the lesson.",
        ["pleased", "excited", "annoyed", "delighted"],
      ],
      ans: [
        "Từ vựng",
        [
          "pleased (adj): hài lòng",
          "excited (adj): thích thú",
          "annoyed (adj): khó chịu",
          "delighted (adj): vui mừng",
          "The teacher was <b>annoyed</b> because some students were talking in class and weren’t paying attention to the lesson.",
        ],
        "Giáo viên khó chịu vì một số học sinh nói chuyện trong lớp và không chú ý đến bài giảng.",
        "annoyed",
      ],
    },
    {
      key: 4,
      quest: [
        "I’m not going out tonight; I have a lot of math __________ to do.",
        ["homework", "tests", "report", "essays"],
      ],
      ans: [
        "Từ vựng",
        [
          "homework (n): bài tập về nhà",
          "tests (n): bài kiểm tra",
          "report (n): báo cáo",
          "essays (n): bài luận",
          "I’m not going out tonight; I have a lot of math <b>homework</b> to do.",
        ],
        "Tôi không ra ngoài tối nay; tôi có rất nhiều bài tập toán phải làm.",
        "homework",
      ],
    },
    {
      key: 5,
      quest: [
        "Student A: Where’s Andy? Can you see him?<br/>Student B: Over there! He’s the boy with a __________ bag.",
        [
          "big light brown new",
          "big new light brown",
          "new big light brown",
          "big light new brown",
        ],
      ],
      ans: [
        "Trật tự của tính từ",
        [
          "Theo quy tắc về trật tự của tính từ, đáp án đúng là: <b>big new light brown</b>.",
          "Student A: Where’s Andy? Can you see him?<br/>Student B: Over there! He’s the boy with a big new light brown bag.",
        ],
        "Học sinh A: Andy đâu rồi? Cậu có thấy cậu ấy không?<br/>Học sinh B: Bên kia kìa! Đó là cậu nhóc với một cái túi lớn mới màu nâu nhạt.",
        "big new light brown",
      ],
    },
    {
      key: 6,
      quest: [
        "Peter __________ likes his school because he has a lot of friends there and the teachers don’t give him too much homework.",
        ["so", "much", "really", "a lot"],
      ],
      ans: [
        "Trạng từ",
        [
          "Dựa vào nghĩa của câu để chọn đáp án: <b>really</b>.",
          "Peter really likes his school because he has a lot of friends there and the teachers don’t give him too much homework.",
        ],
        "Peter rất thích trường của cậu ấy vì cậu ấy có nhiều bạn ở đó và giáo viên không giao quá nhiều bài tập.",
        "really",
      ],
    },
    {
      key: 7,
      quest: [
        "Person A: Excuse me, is this suitcase __________?<br/>Person B: No, it’s not __________.",
        ["yours / mine", "your / mine", "your / my", "you / me"],
      ],
      ans: [
        "Đại từ sở hữu",
        [
          "Đại từ sở hữu của I là <b>mine</b>, đại từ sở hữu của you là <b>yours</b>.",
          "Person A: Excuse me, is this suitcase <b>yours</b>?<br/>Person B: No, it’s not <b>mine</b>.",
        ],
        "Người A: Xin lỗi, va li này là của bạn à?<br/>Người B: Không, nó không phải của tôi.",
        "yours / mine",
      ],
    },
    {
      key: 8,
      quest: [
        "I think people should cycle more. It’s more __________ because it doesn’t cause air pollution.",
        ["frequent", "convenient", "useful", "eco-friendly"],
      ],
      ans: [
        "Từ vựng",
        [
          "frequent (adj): thường xuyên",
          "convenient (adj): tiện lợi",
          "useful (adj): hữu ích",
          "eco-friendly (adj): thân thiện với môi trường",
          "I think people should cycle more. It’s more <b>eco-friendly</b> because it doesn’t cause air pollution.",
        ],
        "Tôi nghĩ mọi người nên đạp xe nhiều hơn. Nó sẽ thân thiện với môi trường hơn vì nó không gây ra ô nhiễm không khí.",
        "eco-friendly",
      ],
    },
    {
      key: 9,
      quest: [
        "He lost his __________, so he had to contact the embassy. He needs it to fly back to his home country.",
        ["ticket", "passport", "baggage", "boarding"],
      ],
      ans: [
        "Từ vựng",
        [
          "ticket (n): vé",
          "passport (n): hộ chiếu",
          "baggage (n): hành lý",
          "boarding (n): sự lên máy bay",
          "He lost his <b>passport</b>, so he had to contact the embassy. He needs it to fly back to his home country.",
        ],
        "Anh ấy đã làm mất hộ chiếu nên phải liên lạc với đại sứ quán. Anh ấy cần nó để bay về quê hương của mình.",
        "passport",
      ],
    },
    {
      key: 10,
      quest: [
        "Student A: Let’s go bowling tonight. There’s a new bowling alley near my house.<br/>Student B: __________. I have to finish my book report.",
        [
          "I’d love to",
          "It will be fun",
          "Sure, thank you",
          "I’m sorry I can’t",
        ],
      ],
      ans: [
        "Kĩ năng giao tiếp",
        [
          "I’d love to: Mình rất thích",
          "It will be fun: Nó sẽ vui lắm",
          "Sure, thank you: Chắc chắn rồi, cám ơn",
          "I’m sorry I can’t: Mình xin lỗi mình không thể",
          "Student A: Let’s go bowling tonight. There’s a new bowling alley near my house.<br/>Student B: <b>I’m sorry I can’t</b>. I have to finish my book report.",
        ],
        "Học sinh A: Mình đi chơi bowling tối nay đi. Có một khu chơi bowling mới ở gần nhà mình.<br/>Học sinh B: Mình xin lỗi mình không thể đi được. Mình cần phải hoàn thành bài tóm tắt sách.",
        "I’m sorry I can’t",
      ],
    },
    {
      key: 11,
      quest: [
        "On the day of the Fire Dancing Festival, the Pà Thẻn ethnic group in Hà Giang set a big __________ on the yard and start the rituals.",
        ["bonfire", "firework", "flame", "light"],
      ],
      ans: [
        "Từ vựng",
        [
          "bonfire (n): lửa trại",
          "firework (n): pháo hoa",
          "flame (n): ngọn lửa",
          "light (n): ánh sáng",
          "On the day of the Fire Dancing Festival, the Pà Thẻn ethnic group in Hà Giang set a big <b>bonfire</b> on the yard and start the rituals.",
        ],
        "Vào ngày Lễ nhảy lửa, đồng bào Pà Thẻn ở Hà Giang đốt đống lửa lớn trên sân đình và bắt đầu các nghi lễ.",
        "bonfire",
      ],
    },
    {
      key: 12,
      quest: [
        "Sammy studied really hard, so she __________ all of her tests.",
        ["passed", "failed", "got", "did"],
      ],
      ans: [
        "Từ vựng",
        [
          "passed (v): vượt qua",
          "failed (v): trượt",
          "got (v): lấy",
          "did (v): làm",
          "Sammy studied really hard, so she <b>passed</b> all of her tests.",
        ],
        "Sammy đã học rất chăm chỉ nên cô ấy đã vượt qua tất cả các bài kiểm tra.",
        "passed",
      ],
    },
    {
      key: 13,
      quest: [
        "Make sure you don’t take the wrong bag at the __________.",
        ["custom", "security", "boarding", "baggage claim"],
      ],
      ans: [
        "Từ vựng",
        [
          "custom (n): phong tục",
          "security (n): an ninh",
          "boarding (n): lên tàu",
          "baggage claim (n): khu nhận hành lý",
          "Make sure you don’t take the wrong bag at the <b>baggage claim</b>.",
        ],
        "Đảm bảo rằng bạn không lấy nhầm hành lý tại khu vực nhận hành lý.",
        "baggage claim",
      ],
    },
    {
      key: 14,
      quest: [
        "The U.S. always celebrates the Fourth of July with an amazing __________ display in the sky.",
        ["bonfires", "fireworks", "fire", "lightning"],
      ],
      ans: [
        "Từ vựng",
        [
          "bonfires (n): lửa trại",
          "fireworks (n): pháo hoa",
          "fire (n): lửa",
          "lightning (n): ánh sáng",
          "The U.S. always celebrates the Fourth of July with an amazing <b>fireworks</b> display in the sky.",
        ],
        "Hoa Kỳ luôn kỷ niệm ngày 4 tháng 7 bằng màn bắn pháo hoa tuyệt vời trên bầu trời.",
        "fireworks",
      ],
    },
    {
      key: 15,
      quest: [
        "Student A: How’s the course going? - Student B: I’m __________ enjoying it.",
        ["very", "much", "really", "a lot"],
      ],
      ans: [
        "Trạng từ",
        [
          "Dựa vào nghĩa của câu để chọn đáp án: <b>really</b>.",
          "Student A: How’s the course going? - Student B: I’m really enjoying it.",
        ],
        "Học sinh A: Khóa học diễn ra như thế nào? - Học sinh B: Tôi thực sự thích nó.",
        "really",
      ],
    },
    {
      key: 16,
      quest: [
        "Bicycles are __________ for the environment than cars.",
        ["better", "more", "as good", "the best"],
      ],
      ans: [
        "So sánh hơn",
        [
          "Dấu hiệu nhận biết so sánh hơn “than” (hơn) => cấu trúc so sánh hơn tính từ ngắn với động từ tobe: S1 + tobe + tính từ ngắn + ER + than + S2. Tính từ: good => better",
          "Bicycles are <b>better</b> for the environment than cars.",
        ],
        "Xe đạp tốt cho môi trường hơn ô tô.",
        "better",
      ],
    },
    {
      key: 17,
      quest: [
        "During Tết holiday, Vietnamese people give each other best __________ for a lucky and successful Lunar New Year.",
        ["greetings", "sayings", "traditions", "wishes"],
      ],
      ans: [
        "Từ vựng",
        [
          "greetings (n): lời chào hỏi",
          "sayings (n): câu nói",
          "traditions (n): truyền thống",
          "wishes (n): lời chúc",
          "During Tết holiday, Vietnamese people give each other best <b>wishes</b> for a lucky and successful Lunar New Year.",
        ],
        "Trong suốt kì nghỉ Tết, người Việt Nam dành cho nhau những lời chúc tốt đẹp nhất cho một Tết Nguyên đán may mắn và thành công.",
        "wishes",
      ],
    },
    {
      key: 18,
      quest: [
        "Ivy was so __________ because she failed two tests last semester.",
        ["pleased", "delighted", "relaxed", "upset"],
      ],
      ans: [
        "Từ vựng",
        [
          "pleased (adj): hài lòng",
          "delighted (adj): vui mừng",
          "relaxed (adj): thư giãn",
          "upset (adj): buồn",
          "Ivy was so <b>upset</b> because she failed two tests last semester.",
        ],
        "Ivy rất buồn vì cô ấy trượt hai bài kiểm tra học kỳ trước.",
        "upset",
      ],
    },
    {
      key: 19,
      quest: [
        "For commuting in our city, __________ form of transportation is the bus because it’s __________ than going by car or taxi.",
        [
          "the most popular / the cheapest",
          "the most popular / cheaper",
          "more popular / cheaper",
          "more popular / the cheapest",
        ],
      ],
      ans: [
        "So sánh nhất và so sánh hơn",
        [
          "Dấu hiệu nhận biết so sánh nhất “the” => cấu trúc so sánh nhất tính từ dài với động từ tobe: S1 + tobe + the most + tính từ dài. Dấu hiệu nhận biết so sánh hơn “than” => cấu trúc so sánh hơn tính từ ngắn với động từ tobe: S1 + tobe + tính từ ngắn + ER + than + S2.",
          "For commuting in our city, the <b>most popular</b> form of transportation is the bus because it’s <b>cheaper</b> than going by car or taxi.",
        ],
        "Đối với việc đi lại trong thành phố của chúng tôi, hình thức di chuyển phổ biến nhất là xe buýt vì nó rẻ hơn so với đi ô tô hoặc taxi.",
        "the most popular / cheaper",
      ],
    },
    {
      key: 20,
      quest: [
        "Christmas time is coming around, so next Friday, each student in my class will bring a gift and then __________ it with another student.",
        ["give", "hand", "exchange", "send"],
      ],
      ans: [
        "Từ vựng",
        [
          "give (v): đưa",
          "hand (v): trao",
          "exchange (v): trao đổi",
          "send (v): gửi",
          "Christmas time is coming around, so next Friday, each student in my class will bring a gift and then <b>exchange</b> it with another student.",
        ],
        "Sắp đến lễ Giáng sinh nên thứ sáu tuần sau, mỗi học sinh trong lớp tôi sẽ mang một món quà và sau đó trao đổi với học sinh khác.",
        "exchange",
      ],
    },
    {
      key: 21,
      quest: [
        "During the Harbin Ice and Snow Festival in China, artists use different tools to carve the hard ice and snow, and visitors can see huge snow __________ of people, buildings and animals.",
        ["statues", "sculptures", "exhibitions", "paintings"],
      ],
      ans: [
        "Từ vựng",
        [
          "statues (n): bức tượng",
          "sculptures (n): tác phẩm điêu khắc",
          "exhibitions (n): buổi triễn lãm",
          "paintings (n): bức tranh",
          "During the Harbin Ice and Snow Festival in China, artists use different tools to carve the hard ice and snow, and visitors can see huge snow <b>sculptures</b> of people, buildings and animals.",
        ],
        "Trong Lễ hội Băng và Tuyết Harbin ở Trung Quốc, các nghệ sĩ sử dụng các công cụ khác nhau để chạm khắc băng và tuyết cứng, và du khách có thể nhìn thấy những tác phẩm điêu khắc bằng tuyết khổng lồ về con người, tòa nhà và động vật.",
        "sculptures",
      ],
    },
    {
      key: 22,
      quest: [
        "We __________ buy lunch in the canteen. There’s a shop next to the school and it sells sandwiches and other snacks.",
        ["have to", "don’t have to", "mustn’t", "should"],
      ],
      ans: [
        "Động từ khiếm khuyết",
        [
          "have to: phải",
          "don’t have to: không cần",
          "mustn’t: không được",
          "should: nên",
          "We <b>don’t have to</b> buy lunch in the canteen. There’s a shop next to the school and it sells sandwiches and other snacks.",
        ],
        "Chúng tôi không phải mua bữa trưa ở căng tin. Có một cửa hàng cạnh trường bán bánh mì và các món ăn nhẹ khác.",
        "don’t have to",
      ],
    },
    {
      key: 23,
      quest: [
        "There are __________ buses from Tân Sơn Nhất airport to the city center. Buses depart every 15 minutes.",
        ["friendly", "public", "easy", "frequent"],
      ],
      ans: [
        "Từ vựng",
        [
          "friendly (adj): thân thiện",
          "public (adj): công khai",
          "easy (adj): dễ",
          "frequent (adj): thường xuyên",
          "There are <b>frequent</b> buses from Tân Sơn Nhất airport to the city center. Buses depart every 15 minutes.",
        ],
        "Có xe buýt thường xuyên từ sân bay Tân Sơn Nhất đến trung tâm thành phố. Xe buýt khởi hành cứ sau 15 phút.",
        "frequent",
      ],
    },
    {
      key: 24,
      quest: [
        "Japan is __________ Spain. In Spain, people eat twelve grapes on New Year’s Eve, while Japanese people eat toshikoshi soba noodles.",
        ["different from", "like", "similar", "same as"],
      ],
      ans: [
        "Từ vựng",
        [
          "different from: khác với",
          "like: như",
          "similar: tương tự",
          "same as: giống với",
          "Japan is <b>different from</b> Spain. In Spain, people eat twelve grapes on New Year’s Eve, while Japanese people eat toshikoshi soba noodles.",
        ],
        "Nhật Bản khác với Tây Ban Nha. Ở Tây Ban Nha, người ta ăn mười hai quả nho vào đêm giao thừa, trong khi người Nhật ăn mì toshikoshi soba.",
        "different from",
      ],
    },
    {
      key: 25,
      quest: [
        "The teacher asked us to choose a book from the list, read it at home and then write a __________ about it.",
        ["project", "presentation", "report", "revision"],
      ],
      ans: [
        "Từ vựng",
        [
          "project (n): dự án",
          "presentation (n): bài thuyết trình",
          "report (n): báo cáo",
          "revision (n): xem lại",
          "The teacher asked us to choose a book from the list, read it at home and then write a <b>report</b> about it.",
        ],
        "Giáo viên yêu cầu chúng tôi chọn một cuốn sách trong danh sách, đọc nó ở nhà và sau đó viết báo cáo về nó.",
        "report",
      ],
    },
    {
      key: 26,
      quest: [
        "Korea has excellent __________. The buses are regular and the trains are on time.",
        [
          "vehicle",
          "transport system",
          "public transportation",
          "moving system",
        ],
      ],
      ans: [
        "Từ vựng",
        [
          "vehicle (n): phương tiện",
          "transport system (n): hệ thống giao thông",
          "public transportation (n): giao thông công cộng",
          "moving system (n): hệ thống di chuyển",
          "Korea has excellent <b>public transportation</b>. The buses are regular and the trains are on time.",
        ],
        "Hàn Quốc có phương tiện giao thông công cộng tuyệt vời. Các xe buýt đều đặn và các chuyến tàu đúng giờ.",
        "public transportation",
      ],
    },
    {
      key: 27,
      quest: [
        "__________ in Chinese culture, red is a symbol of luck in most Vietnamese celebrations.",
        ["Similar", "Different", "Like", "Same"],
      ],
      ans: [
        "Từ vựng",
        [
          "Similar to: tương tự",
          "Different: khác",
          "Like: giống như",
          "Same: cùng",
          "<b>Like</b> in Chinese culture, red is a symbol of luck in most Vietnamese celebrations.",
        ],
        "Giống như trong văn hóa Trung Quốc, màu đỏ là biểu tượng của sự may mắn trong hầu hết các lễ kỷ niệm của người Việt Nam.",
        "Like",
      ],
    },
    {
      key: 28,
      quest: [
        "Our math teacher, Mr. Thomas, is funny and friendly, but he gives us too much __________ to do after school.",
        ["homework", "exams", "essays", "exercise"],
      ],
      ans: [
        "Từ vựng",
        [
          "homework (n): bài tập về nhà",
          "exams (n): bài kiểm tra",
          "essays (n): bài tiểu luận",
          "exercise (n): bài tập",
          "Our math teacher, Mr. Thomas, is funny and friendly, but he gives us too much <b>homework</b> to do after school.",
        ],
        "Giáo viên dạy toán của chúng tôi, thầy Thomas, vui tính và thân thiện, nhưng thầy cho chúng tôi quá nhiều bài tập về nhà sau giờ học.",
        "homework",
      ],
    },
    {
      key: 29,
      quest: [
        "Person A: Is this Andy’s backpack? - Person B: No, it isn’t. He has a __________ backpack.",
        [
          "new big dark blue",
          "big new dark blue",
          "dark blue big new",
          "new dark blue big",
        ],
      ],
      ans: [
        "Trật tự tính từ",
        [
          "Trật tự tính từ: Kích cỡ => Độ tuổi => Màu sắc",
          "Person A: Is this Andy’s backpack? - Person B: No, it isn’t. He has a <b>big new dark blue</b> backpack.",
        ],
        "Người A: Đây có phải là ba lô của Andy không? - Người B: Không, không phải đâu. Anh ấy có một chiếc ba lô lớn màu xanh đậm mới.",
        "big new dark blue",
      ],
    },
    {
      key: 30,
      quest: [
        "Easter’s exact date varies because it depends on the moon. In 2022, Easter was on April 17th, and next time, in 2023, it __________ on April 9th.",
        ["was going to be", "is being", "was", "will be"],
      ],
      ans: [
        "Thì tương lai đơn",
        [
          "Dấu hiệu nhận biết “next time, in 2023” (lần sau vào năm 2023) là một thời gian trong tương lai => Công thức thì tương lai đơn ở dạng khẳng định: S + will + Vo (nguyên thể).",
          "Easter’s exact date varies because it depends on the moon. In 2022, Easter was on April 17th, and next time, in 2023, it <b>will be</b> on April 9th.",
        ],
        "Ngày chính xác của Lễ Phục sinh khác nhau vì nó phụ thuộc vào mặt trăng. Năm 2022, lễ Phục sinh rơi vào ngày 17 tháng 4 và lần tiếp theo, vào năm 2023, lễ Phục sinh sẽ vào ngày 9 tháng 4.",
        "will be",
      ],
    },
    {
      key: 31,
      quest: [
        "Nick got 100% on his physics test. His twin brother, Adam, __________, had to retake the test.",
        ["although", "but", "so", "however"],
      ],
      ans: [
        "Từ vựng",
        [
          "although: mặc dù",
          "but: nhưng",
          "so: vì vậy",
          "however: tuy nhiên",
          "Nick got 100% on his physics test. His twin brother, Adam, <b>however</b>, had to retake the test.",
        ],
        "Nick đã đạt 100% trong bài kiểm tra vật lý của mình. Tuy nhiên, người anh song sinh của anh, Adam, đã phải thi lại.",
        "however",
      ],
    },
    {
      key: 32,
      quest: [
        "I’m really __________ with Nick. We have an important biology project, but he doesn’t do his part.",
        ["hopeful", "annoyed", "pleased", "excited"],
      ],
      ans: [
        "Từ vựng",
        [
          "hopeful (adj): hy vọng",
          "annoyed (adj): khó chịu",
          "pleased (adj): hài lòng",
          "excited (adj): hào hứng",
          "I’m really <b>annoyed</b> with Nick. We have an important biology project, but he doesn’t do his part.",
        ],
        "Tôi thực sự khó chịu với Nick. Chúng tôi có một dự án sinh học quan trọng, nhưng anh ấy không làm phần việc của mình.",
        "annoyed",
      ],
    },
    {
      key: 33,
      quest: [
        "Yesterday, I wrote a(n) __________ about the benefits of studying overseas, and the teacher said it was good.",
        ["homework", "test", "essay", "paper"],
      ],
      ans: [
        "Từ vựng",
        [
          "homework (n): bài tập về nhà",
          "test (n): bài kiểm tra",
          "essay (n): bài luận",
          "paper (n): giấy",
          "Yesterday, I wrote an <b>essay</b> about the benefits of studying overseas, and the teacher said it was good.",
        ],
        "Hôm qua, tôi đã viết một bài luận về lợi ích của việc học tập ở nước ngoài, và giáo viên nói rằng nó rất hay.",
        "essay",
      ],
    },
    {
      key: 34,
      quest: [
        "Student A: I’m going to the movies this evening. Do you want to join me? - Student B: __________. I have too much homework to do.",
        [
          "Sure, I can.",
          "Thanks, but I don’t think I can.",
          "Of course, I will.",
          "Thanks, but sorry, I’m not.",
        ],
      ],
      ans: [
        "Chức năng giao tiếp",
        [
          "Sure, I can: Chắc chắn, tôi có thể.",
          "Thanks, but I don’t think I can: Cảm ơn, nhưng tôi không nghĩ là tôi có thể.",
          "Of course, I will: Tất nhiên, tôi sẽ làm.",
          "Thanks, but sorry, I’m not: Cảm ơn, nhưng xin lỗi, tôi không.",
          "Student A: I’m going to the movies this evening. Do you want to join me? - Student B: <b>Thanks, but I don’t think I can</b>. I have too much homework to do.",
        ],
        "Học sinh A: Tôi sẽ đi xem phim tối nay. Bạn có muốn tham gia cùng tôi không? - Học sinh B: Cảm ơn, nhưng tôi không nghĩ là mình có thể. Tôi có quá nhiều bài tập về nhà phải làm.",
        "Thanks, but I don’t think I can",
      ],
    },
    {
      key: 35,
      quest: [
        "Person A: Whose suitcase is this? - Person B: It has Jodie and Jack’s names on it, so it must be __________.",
        ["their", "they", "them", "theirs"],
      ],
      ans: [
        "Đại từ sở hữu",
        [
          "their: của họ",
          "they: họ",
          "them: họ",
          "theirs: của họ",
          "Person A: Whose suitcase is this? - Person B: It has Jodie and Jack’s names on it, so it must be <b>theirs</b>.",
        ],
        "Người A: Đây là vali của ai? - Người B: Nó có tên của Jodie và Jack trên đó, vậy nó phải là của họ.",
        "theirs",
      ],
    },
    {
      key: 36,
      quest: [
        "Officers will check your luggage when you go through __________.",
        ["airport", "baggage claim", "customs", "check-in"],
      ],
      ans: [
        "Từ vựng",
        [
          "airport (n): sân bay",
          "baggage claim (n): khu nhận hành lý",
          "customs (n): hải quan",
          "check-in (n): thủ tục vào",
          "Officers will check your luggage when you go through <b>customs</b>.",
        ],
        "Nhân viên sẽ kiểm tra hành lý của bạn khi bạn đi qua hải quan.",
        "customs",
      ],
    },
    {
      key: 37,
      quest: [
        "It’s very important to keep your __________ in a safe place. You need this document to enter or leave a foreign country.",
        ["passport", "boarding pass", "ticket", "luggage"],
      ],
      ans: [
        "Từ vựng",
        [
          "passport (n): hộ chiếu",
          "boarding pass (n): thẻ lên máy bay",
          "ticket (n): vé",
          "luggage (n): hành lý",
          "It’s very important to keep your <b>passport</b> in a safe place. You need this document to enter or leave a foreign country.",
        ],
        "Điều rất quan trọng là giữ hộ chiếu của bạn ở một nơi an toàn. Bạn cần giấy tờ này để vào hoặc rời khỏi một quốc gia nước ngoài.",
        "passport",
      ],
    },
    {
      key: 38,
      quest: [
        "Person A: Excuse me, does this bag belong to you? - Person B: __________. Thank you a lot.",
        [
          "Yes, it’s my.",
          "Yes, it’s mine bag.",
          "Yes, my bag is this.",
          "Yes, it’s mine.",
        ],
      ],
      ans: [
        "Chức năng giao tiếp",
        [
          "Yes, it’s my: Sau tính từ sở hữu “my” (của tôi) thiếu danh từ",
          "Yes, it’s mine bag: Sau đại từ sở hữu “mine” (của tôi) dư danh từ",
          "Yes, my bag is this: Vâng, túi của tôi là cái này.",
          "Yes, it’s mine: Vâng nó là của tôi.",
          "Person A: Excuse me, does this bag belong to you? - Person B: <b>Yes, it’s mine</b>. Thank you a lot.",
        ],
        "Người A: Xin lỗi, chiếc túi này có phải của bạn không? - Người B: Vâng, nó là của tôi. Cảm ơn bạn rất nhiều.",
        "Yes, it’s mine.",
      ],
    },
    {
      key: 39,
      quest: [
        "During Hội An Lantern Festival, visitors can __________ in many interesting activities and watch various art performances, all of which are completely free of charge.",
        ["take part", "take place", "takes on", "takes off"],
      ],
      ans: [
        "Cụm động từ",
        [
          "take part + in: tham gia",
          "take place: diễn ra",
          "takes on: đảm nhận",
          "takes off: cất cánh",
          "During Hội An Lantern Festival, visitors can <b>take part</b> in many interesting activities and watch various art performances, all of which are completely free of charge.",
        ],
        "Trong Lễ hội đèn lồng Hội An, du khách có thể tham gia nhiều hoạt động thú vị và xem các chương trình biểu diễn nghệ thuật hoàn toàn miễn phí.",
        "take part",
      ],
    },
    {
      key: 40,
      quest: [
        "Person A: Do you know that in Greece, people hang an onion on the front door of their house on New Year’s Eve? - Person B: __________",
        [
          "I like onions.",
          "That’s interesting.",
          "When is New Year’s Eve?",
          "I think so.",
        ],
      ],
      ans: [
        "Chức năng giao tiếp",
        [
          "I like onions: Tôi thích hành tây.",
          "That’s interesting: Điều đó thật thú vị.",
          "When is New Year’s Eve?: Khi nào là đêm giao thừa?",
          "I think so: Tôi nghĩ vậy.",
          "Person A: Do you know that in Greece, people hang an onion on the front door of their house on New Year’s Eve? - Person B: <b>That’s interesting</b>.",
        ],
        "Người A: Bạn có biết rằng ở Hy Lạp, người ta treo một củ hành trước cửa nhà vào đêm giao thừa không? - Người B: Điều đó thật thú vị.",
        "That’s interesting.",
      ],
    },
    {
      key: 41,
      quest: [
        "A piece of writing to answer a question or to explain your idea is called __________.",
        ["an essay", "homework", "a book report", "presentation"],
      ],
      ans: [
        "Từ vựng",
        [
          "an essay (n): một bài tiểu luận",
          "homework (n): bài tập về nhà",
          "a book report (n): một báo cáo sách",
          "presentation (n): bài thuyết trình",
          "A piece of writing to answer a question or to explain your idea is called <b>an essay</b>.",
        ],
        "Một bài viết để trả lời một câu hỏi hoặc để giải thích ý tưởng của bạn được gọi là một bài tiểu luận.",
        "an essay",
      ],
    },
    {
      key: 42,
      quest: [
        "I was __________ because my mom bought me a bike for my birthday.",
        ["annoyed", "delighted", "disappointed", "upset"],
      ],
      ans: [
        "Từ vựng",
        [
          "annoyed (adj): khó chịu",
          "delighted (adj): vui mừng",
          "disappointed (adj): thất vọng",
          "upset (adj): buồn bã",
          "I was <b>delighted</b> because my mom bought me a bike for my birthday.",
        ],
        "Tôi rất vui mừng vì mẹ đã mua cho tôi một chiếc xe đạp vào ngày sinh nhật của tôi.",
        "delighted",
      ],
    },
    {
      key: 43,
      quest: [
        "He didn't study hard, so he __________ some tests.",
        ["passed", "surprised", "failed", "reported"],
      ],
      ans: [
        "Từ vựng",
        [
          "passed (v): vượt qua",
          "surprised (v): ngạc nhiên",
          "failed (v): trượt",
          "reported (v): báo cáo",
          "He didn't study hard, so he <b>failed</b> some tests.",
        ],
        "Anh ấy không học chăm chỉ, vì vậy anh ấy đã trượt một số bài kiểm tra.",
        "failed",
      ],
    },
    {
      key: 44,
      quest: [
        "She is so pleased __________ she got an A for her English examination.",
        ["so", "because", "and", "although"],
      ],
      ans: [
        "Từ vựng",
        [
          "so: vì vậy",
          "because: bởi vì",
          "and: và",
          "although: mặc dù",
          "She is so pleased <b>because</b> she got an A for her English examination.",
        ],
        "Cô ấy rất hài lòng vì cô ấy đã được điểm A trong kỳ thi tiếng Anh của mình.",
        "because",
      ],
    },
    {
      key: 45,
      quest: [
        "To protect the environment, we should use __________ products.",
        ["convenient", "eco-friendly", "comfortable", "reliable"],
      ],
      ans: [
        "Từ vựng",
        [
          "convenient (adj): tiện lợi",
          "eco-friendly (adj): thân thiện với môi trường",
          "comfortable (adj): thoải mái",
          "reliable (adj): đáng tin cậy",
          "To protect the environment, we should use <b>eco-friendly</b> products.",
        ],
        "Để bảo vệ môi trường, chúng ta nên sử dụng các sản phẩm thân thiện với môi trường.",
        "eco-friendly",
      ],
    },
    {
      key: 46,
      quest: [
        "The local weather forecasts are not always __________.",
        ["public", "countable", "reliable", "frequent"],
      ],
      ans: [
        "Từ vựng",
        [
          "public (adj): công khai",
          "countable (adj): đếm được",
          "reliable (adj): đáng tin cậy",
          "frequent (adj): thường xuyên",
          "The local weather forecasts are not always <b>reliable</b>.",
        ],
        "Dự báo thời tiết địa phương không phải lúc nào cũng đáng tin cậy.",
        "reliable",
      ],
    },
    {
      key: 47,
      quest: [
        "Over many years ago, people used to __________ horses to work.",
        ["rode", "ride", "drive", "drove"],
      ],
      ans: [
        "Từ vựng",
        [
          "rode (v): cưỡi (quá khứ của ride)",
          "ride (v): cưỡi (hiện tại)",
          "drive (v): lái",
          "drove (v): đã lái (quá khứ của drive)",
          "Over many years ago, people used to <b>ride</b> horses to work.",
        ],
        "Nhiều năm trước đây, người ta thường cưỡi ngựa đi làm.",
        "ride",
      ],
    },
    {
      key: 48,
      quest: [
        "During __________, people often eat, drink and listen to music.",
        ["lanterns", "sculpture", "festivals", "competitions"],
      ],
      ans: [
        "Từ vựng",
        [
          "lanterns (n): đèn lồng",
          "sculpture (n): điêu khắc",
          "festivals (n): lễ hội",
          "competitions (n): cuộc thi",
          "During <b>festivals</b>, people often eat, drink and listen to music.",
        ],
        "Trong các lễ hội, mọi người thường ăn uống, nghe nhạc.",
        "festivals",
      ],
    },
    {
      key: 49,
      quest: [
        "My birthday is a(n) __________ event because it only happens once a year.",
        ["annual", "traditional", "monthly", "usual"],
      ],
      ans: [
        "Từ vựng",
        [
          "annual (adj): hàng năm",
          "traditional (adj): truyền thống",
          "monthly (adj): hàng tháng",
          "usual (adj): thông thường",
          "My birthday is an <b>annual</b> event because it only happens once a year.",
        ],
        "Sinh nhật của tôi là một sự kiện hàng năm vì nó chỉ diễn ra mỗi năm một lần.",
        "annual",
      ],
    },
    {
      key: 50,
      quest: [
        "Da Lat is one of the most famous tourist __________.",
        ["attraction", "attractions", "attract", "attractive"],
      ],
      ans: [
        "Từ vựng",
        [
          "attraction (n): địa điểm thu hút",
          "attractions (n): các địa điểm thu hút",
          "attract (v): thu hút",
          "attractive (adj): hấp dẫn",
          "Da Lat is one of the most famous tourist <b>attractions</b>.",
        ],
        "Đà Lạt là một trong những điểm thu hút khách du lịch nổi tiếng nhất.",
        "attractions",
      ],
    },
    {
      key: 51,
      quest: [
        "They often choose ________ cars with bigger engines to get higher speed.",
        ["slower", "faster", "smaller", "worse"],
      ],
      ans: [
        "Từ vựng",
        [
          "slower (adj): chậm hơn",
          "faster (adj): nhanh hơn",
          "smaller (adj): nhỏ hơn",
          "worse (adj): tệ hơn",
          "They often choose <b>faster</b> cars with bigger engines to get higher speed.",
        ],
        "Họ thường chọn những chiếc xe nhanh hơn với động cơ lớn hơn để có được tốc độ cao hơn.",
        "faster",
      ],
    },
    {
      key: 52,
      quest: [
        "The underground in Japan is much ________ than taxis or buses.",
        ["slow", "quick", "quicker", "more quick"],
      ],
      ans: [
        "So sánh hơn",
        [
          "Dấu hiệu nhận biết cấu trúc so sánh hơn “than” (hơn) => công thức so sánh hơn với tính từ ngắn: S1 + tobe + Adj + “ER” + than + S2.",
          "quick (adj): nhanh",
          "slow (adj): chậm",
          "The underground in Japan is much <b>quicker</b> than taxis or buses.",
        ],
        "Tàu điện ngầm ở Nhật Bản nhanh hơn nhiều so với taxi hoặc xe buýt.",
        "quicker",
      ],
    },
    {
      key: 53,
      quest: [
        "What ________ did you use to play when you were six years old?",
        ["toy", "card", "ball", "game"],
      ],
      ans: [
        "Từ vựng",
        [
          "toy (n): món đồ chơi",
          "card (n): thẻ",
          "ball (n): quả bóng",
          "game (n): trò chơi",
          "What <b>toy</b> did you use to play when you were six years old?",
        ],
        "Bạn đã chơi đồ chơi gì khi bạn sáu tuổi?",
        "toy",
      ],
    },
    {
      key: 54,
      quest: [
        "There should be a ________ limit in the playground to prevent accidents.",
        ["speed", "time", "engine", "cost"],
      ],
      ans: [
        "Từ vựng",
        [
          "speed (n): tốc độ",
          "time (n): thời gian",
          "engine (n): động cơ",
          "cost (n): chi phí",
          "There should be a <b>time</b> limit in the playground to prevent accidents.",
        ],
        "Nên có giới hạn thời gian trong sân chơi để ngăn ngừa tai nạn.",
        "time",
      ],
    },
    {
      key: 55,
      quest: [
        "Let’s ________ a look at the film section of the paper.",
        ["do", "use", "spend", "take"],
      ],
      ans: [
        "Từ vựng",
        [
          "do (v): làm",
          "use (v): sử dụng",
          "spend (v): dành ra",
          "take (v): lấy",
          "Cụm động từ: take a look: nhìn vào",
          "Let’s <b>take</b> a look at the film section of the paper.",
        ],
        "Chúng ta hãy xem phần phim của bài báo.",
        "take",
      ],
    },
    {
      key: 56,
      quest: [
        "The main character ________ in love with a poor man in the countryside.",
        ["has", "makes", "falls", "interests"],
      ],
      ans: [
        "Từ vựng",
        [
          "has (v): có",
          "makes (v): khiến cho",
          "falls (v): rơi",
          "interests (v): hứng thú",
          "Cụm động từ: fall in love with sb: phải lòng ai đó",
          "The main character <b>falls</b> in love with a poor man in the countryside.",
        ],
        "Nhân vật chính phải lòng một chàng trai nghèo ở nông thôn.",
        "falls",
      ],
    },
    {
      key: 57,
      quest: [
        "The film ________ an exciting story about murder or crime.",
        ["holds", "reports", "tells", "watches"],
      ],
      ans: [
        "Từ vựng",
        [
          "holds (v): tổ chức",
          "reports (v): báo cáo",
          "tells (v): kể",
          "watches (v): xem",
          "The film <b>tells</b> an exciting story about murder or crime.",
        ],
        "Bộ phim kể một câu chuyện thú vị về giết người hoặc tội phạm.",
        "tells",
      ],
    },
    {
      key: 58,
      quest: [
        "The festival is ________ every year at the end of October.",
        ["taken", "held", "made", "done"],
      ],
      ans: [
        "Từ vựng",
        [
          "taken (v): lấy",
          "held (v): tổ chức",
          "made (v): làm",
          "done (v): thực hiện",
          "The festival is <b>held</b> every year at the end of October.",
        ],
        "Lễ hội được tổ chức hàng năm vào cuối tháng 10.",
        "held",
      ],
    },
    {
      key: 59,
      quest: [
        "Festival of lights is a ________ festival in India.",
        ["religion", "culture", "nation", "religious"],
      ],
      ans: [
        "Từ vựng",
        [
          "religion (n): tôn giáo",
          "culture (n): văn hóa",
          "nation (n): quốc gia",
          "religious (adj): thuộc về tôn giáo",
          "Trước danh từ “festival” (lễ hội) cần một tính từ.",
          "Festival of lights is a <b>religious</b> festival in India.",
        ],
        "Lễ hội ánh sáng là một lễ hội tôn giáo ở Ấn Độ.",
        "religious",
      ],
    },
    {
      key: 60,
      quest: [
        "People ________ the festival by throwing water to wish everyone happiness.",
        ["celebrate", "have", "organize", "complete"],
      ],
      ans: [
        "Từ vựng",
        [
          "celebrate (v): ăn mừng",
          "have (v): có",
          "organize (v): tổ chức",
          "complete (v): hoàn thành",
          "People <b>celebrate</b> the festival by throwing water to wish everyone happiness.",
        ],
        "Mọi người tổ chức lễ hội bằng cách ném nước để chúc mọi người hạnh phúc.",
        "celebrate",
      ],
    },
    {
      key: 61,
      quest: [
        "The traffic _______ tell people to do, warns people about possible dangers in the street.",
        ["jams", "signs", "lights", "rules"],
      ],
      ans: [
        "Từ vựng",
        [
          "jams (n): ùn tắc",
          "signs (n): biển báo",
          "lights (n): đèn",
          "rules (n): quy tắc",
          "The traffic <b>signs</b> tell people to do, warns people about possible dangers in the street.",
        ],
        "Các biển báo giao thông bảo mọi người làm gì, cảnh báo mọi người về những nguy hiểm có thể xảy ra trên đường phố.",
        "signs",
      ],
    },
    {
      key: 62,
      quest: [
        "Always look _______when you cross the street.",
        ["quickly", "well", "carefully", "safely"],
      ],
      ans: [
        "Từ vựng",
        [
          "quickly (adv): nhanh",
          "well (adv): tốt",
          "carefully (adv): cẩn thận",
          "safely (adv): an toàn",
          "Always look <b>carefully</b> when you cross the street.",
        ],
        "Luôn quan sát cẩn thận khi bạn băng qua đường.",
        "carefully",
      ],
    },
    {
      key: 63,
      quest: [
        "What must you do before you turn left or right when _______ a motorbike?",
        ["holding", "taking", "making", "riding"],
      ],
      ans: [
        "Từ vựng",
        [
          "holding (v): tổ chức",
          "taking (v): lấy",
          "making (v): làm",
          "riding (v): cưỡi",
          "Cụm động từ: “ride a motorbike”: chạy xe máy.",
          "What must you do before you turn left or right when <b>riding</b> a motorbike?",
        ],
        "Bạn phải làm gì trước khi rẽ trái hoặc rẽ phải khi đi xe máy?",
        "riding",
      ],
    },
    {
      key: 64,
      quest: [
        "That horror film is too _______ for me.",
        ["hilarious", "frightening", "romantic", "moving"],
      ],
      ans: [
        "Từ vựng",
        [
          "hilarious (adj): vui nhộn",
          "frightening (adj): đáng sợ",
          "romantic (adj): lãng mạn",
          "moving (adj): cảm động",
          "That horror film is too <b>frightening</b> for me.",
        ],
        "Bộ phim kinh dị đó quá đáng sợ đối với tôi.",
        "frightening",
      ],
    },
    {
      key: 65,
      quest: [
        "The films was so _______ that we almost fell asleep.",
        ["interesting", "gripping", "boring", "violent"],
      ],
      ans: [
        "Từ vựng",
        [
          "interesting (adj): thú vị",
          "gripping (adj): lôi cuốn",
          "boring (adj): nhàm chán",
          "violent (adj): bạo lực",
          "The film was so <b>boring</b> that we almost fell asleep.",
        ],
        "Bộ phim nhàm chán đến nỗi chúng tôi gần như ngủ thiếp đi.",
        "boring",
      ],
    },
    {
      key: 66,
      quest: [
        "Critics were all _______ at their performance on the stage yesterday.",
        ["disappointed", "annoyed", "worried", "bored"],
      ],
      ans: [
        "Từ vựng",
        [
          "disappointed (adj): thất vọng",
          "annoyed (adj): khó chịu",
          "worried (adj): lo lắng",
          "bored (adj): chán",
          "Critics were all <b>disappointed</b> at their performance on the stage yesterday.",
        ],
        "Các nhà phê bình đều thất vọng về màn trình diễn của họ trên sân khấu ngày hôm qua.",
        "disappointed",
      ],
    },
    {
      key: 67,
      quest: [
        "The biggest _______ for the winner is a trip to France.",
        ["part", "benefit", "prize", "mark"],
      ],
      ans: [
        "Từ vựng",
        [
          "part (n): phần",
          "benefit (n): lợi ích",
          "prize (n): giải thưởng",
          "mark (n): điểm",
          "The biggest <b>prize</b> for the winner is a trip to France.",
        ],
        "Giải thưởng lớn nhất dành cho người chiến thắng là một chuyến du lịch đến Pháp.",
        "prize",
      ],
    },
    {
      key: 68,
      quest: [
        "A lot of people go to the city center to _______ the festival.",
        ["have", "attend", "relax", "discuss"],
      ],
      ans: [
        "Từ vựng",
        [
          "have (v): có",
          "attend (v): tham dự",
          "relax (v): thư giãn",
          "discuss (v): thảo luận",
          "A lot of people go to the city center to <b>attend</b> the festival.",
        ],
        "Rất đông người dân đổ về trung tâm thành phố để tham dự lễ hội.",
        "attend",
      ],
    },
    {
      key: 69,
      quest: [
        "It must be _______ to see elephants racing in the street.",
        ["amazed", "nervous", "amazing", "romantic"],
      ],
      ans: [
        "Từ vựng",
        [
          "amazed (adj): tuyệt vời",
          "nervous (adj): lo lắng",
          "amazing (adj): tuyệt vời",
          "romantic (adj): lãng mạn",
          "It must be <b>amazing</b> to see elephants racing in the street.",
        ],
        "Thật tuyệt vời khi thấy những chú voi chạy đua trên đường phố.",
        "amazing",
      ],
    },
    {
      key: 70,
      quest: [
        "What should the students do after this _______ with the teacher?",
        ["task", "discussion", "homework", "break"],
      ],
      ans: [
        "Từ vựng",
        [
          "task (n): nhiệm vụ",
          "discussion (n): cuộc thảo luận",
          "homework (n): bài tập về nhà",
          "break (n): giờ giải lao",
          "What should the students do after this <b>discussion</b> with the teacher?",
        ],
        "Học sinh nên làm gì sau cuộc thảo luận này với giáo viên?",
        "discussion",
      ],
    },
    {
      key: 71,
      quest: [
        "He is driving his car too fast but he is not wearing his __________.",
        ["seatbelt", "helmet", "hat", "coat"],
      ],
      ans: [
        "Từ vựng",
        [
          "seatbelt (n): dây an toàn",
          "helmet (n): mũ bảo hiểm",
          "hat (n): mũ",
          "coat (n): áo khoác",
          "He is driving his car too fast but he is not wearing his <b>seatbelt</b>.",
        ],
        "Anh ta lái xe quá nhanh nhưng lại không đeo dây an toàn.",
        "seatbelt",
      ],
    },
    {
      key: 72,
      quest: [
        "The little boy is walking at the side of the road towards a zebra __________.",
        ["passing", "crossing", "taking", "doing"],
      ],
      ans: [
        "Từ vựng",
        [
          "passing (v): vượt qua",
          "crossing (v): băng qua",
          "taking (v): lấy",
          "doing (v): làm",
          "The little boy is walking at the side of the road towards a zebra <b>crossing</b>.",
        ],
        "Cậu bé đang đi bên đường về phía vạch kẻ đường cho người đi bộ.",
        "crossing",
      ],
    },
    {
      key: 73,
      quest: [
        "Why should pedestrians wear light colored __________ in the dark?",
        ["gloves", "hats", "clothes", "jeans"],
      ],
      ans: [
        "Từ vựng",
        [
          "gloves (n): găng tay",
          "hats (n): mũ",
          "clothes (n): quần áo",
          "jeans (n): đồ jean",
          "Why should pedestrians wear light colored <b>clothes</b> in the dark?",
        ],
        "Tại sao người đi bộ nên mặc quần áo sáng màu khi trời tối?",
        "clothes",
      ],
    },
    {
      key: 74,
      quest: [
        "The film is a big __________ because the audience enjoy it a lot.",
        ["failure", "start", "finish", "success"],
      ],
      ans: [
        "Từ vựng",
        [
          "failure (n): sự thất bại",
          "start (n): sự bắt đầu",
          "finish (n): sự kết thúc",
          "success (n): sự thành công",
          "The film is a big <b>success</b> because the audience enjoy it a lot.",
        ],
        "Bộ phim là một thành công lớn vì khán giả thích nó rất nhiều.",
        "success",
      ],
    },
    {
      key: 75,
      quest: [
        "The film is based on a book that was __________ fifteen years ago.",
        ["read", "opened", "written", "closed"],
      ],
      ans: [
        "Từ vựng",
        [
          "read (v): đọc",
          "opened (v): mở",
          "written (v): viết",
          "closed (v): đóng",
          "The film is based on a book that was <b>written</b> fifteen years ago.",
        ],
        "Bộ phim dựa trên một cuốn sách đã được viết mười lăm năm trước.",
        "written",
      ],
    },
    {
      key: 76,
      quest: [
        "They haven’t __________ which film to see tonight.",
        ["decided", "wanted", "liked", "watched"],
      ],
      ans: [
        "Từ vựng",
        [
          "decided (v): quyết định",
          "wanted (v): muốn",
          "liked (v): thích",
          "watched (v): xem",
          "They haven’t <b>decided</b> which film to see tonight.",
        ],
        "Họ chưa quyết định sẽ xem bộ phim nào tối nay.",
        "decided",
      ],
    },
    {
      key: 77,
      quest: [
        "People wear beautiful __________ and parade through the streets during the festival in this country.",
        ["jeans", "gloves", "boots", "costumes"],
      ],
      ans: [
        "Từ vựng",
        [
          "jeans (n): đồ jean",
          "gloves (n): găng tay",
          "boots (n): ủng",
          "costumes (n): trang phục",
          "People wear beautiful <b>costumes</b> and parade through the streets during the festival in this country.",
        ],
        "Mọi người mặc những bộ trang phục đẹp mắt và diễu hành qua các đường phố trong lễ hội ở đất nước này.",
        "costumes",
      ],
    },
    {
      key: 78,
      quest: [
        "The festival __________ place every two years.",
        ["takes", "happens", "has", "holds"],
      ],
      ans: [
        "Từ vựng",
        [
          "takes (v): lấy",
          "happens (v): xảy ra",
          "has (v): có",
          "holds (v): tổ chức",
          "The festival <b>takes</b> place every two years.",
        ],
        "Lễ hội diễn ra hai năm một lần.",
        "takes",
      ],
    },
    {
      key: 79,
      quest: [
        "During Tet holiday, we __________ our houses with apricot or peach blossoms.",
        ["decorate", "make", "build", "close"],
      ],
      ans: [
        "Từ vựng",
        [
          "decorate (v): trang trí",
          "make (v): làm",
          "build (v): xây dựng",
          "close (v): đóng",
          "During Tet holiday, we <b>decorate</b> our houses with apricot or peach blossoms.",
        ],
        "Trong ngày Tết, chúng tôi trang trí nhà của chúng tôi với hoa mai hoa đào.",
        "decorate",
      ],
    },
    {
      key: 80,
      quest: [
        "Tom __________ eat so many lollipops. It's bad for his teeth.",
        ["should", "must", "shouldn’t", "can’t"],
      ],
      ans: [
        "Động từ khuyết thiếu",
        [
          "should: nên",
          "must: phải",
          "shouldn’t: không nên",
          "can’t: không thể",
          "Tom <b>shouldn’t</b> eat so many lollipops. It's bad for his teeth.",
        ],
        "Tom không nên ăn quá nhiều kẹo mút. Nó có hại cho răng của anh ấy.",
        "shouldn’t",
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
      <ul class="list-group py-2">
        <li class="list-group-item fw-bold"><span class="fw-bold">Kiến thức: </span>${ans[0]}</li>
        <li class="list-group-item">
          <ul class="list-group">
            <li class="list-group-item">${ans[1][0]}</li>
            <li class="list-group-item">${ans[1][1]}</li>
            <li class="list-group-item">${ans[1][2]}</li>
            <li class="list-group-item">${ans[1][3]}</li>
          </ul>
        </li>
        <li class="list-group-item">${ans[1][4]}</li>
        <li class="list-group-item"><span class="fw-bold">Dịch:</span> ${ans[2]}</li>
        <li class="list-group-item"><span class="fw-bold">Đáp án:</span> ${ans[3]}</li>
      </ul>
    `;
};

const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx.content.length - 1, 20);
  const quests = test.map((item, index) => {
    const quest = idx.content[item].quest;
    const ans = generateUniqueRandomNumbers(0, 3, 4);
    const alphabets = ["A", "B", "C", "D"];
    return `
          <div class="pb-3 lh-sm fs-5 row" key=${idx.content[item].key}>
            <div class="row pb-1">
                <div class="row pb-1">
                    <div><span class="fw-bold">${index + 1}.</span> &nbsp${quest[0]}</div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    ${renderOptions(alphabets, quest[1], ans)}
                </div>
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
          III. ${idx.title}
      </p>
      ${renderQuests()}
`;

document.getElementById("idx-3").insertAdjacentHTML("beforeend", render);
