const test = [
  {
    idx: 'I',
    questions: [
      {
        q: "At the concert, you can get food and drink for __________. You don't have to pay money for it.",
        o: ['reuse', 'free', 'recycle', 'charity'],
      },
      {
        q: "__________ in this lake. It's very deep and dangerous.",
        o: ['Swim', 'Swimming', "Don't swim", 'You can swim'],
      },
      {
        q: 'Pick up trash is a great way to __________ the environment.',
        o: ['protect', 'reuse', 'charity', 'wildlife'],
      },
      {
        q: 'Tom __________ his bottle water and refills it with water every morning.',
        o: ['reuses', 'reduces', 'recycles', 'remembers'],
      },
      {
        q: "Tom is trying to park his car but __________ space isn't big enough",
        o: ['any', 'a', 'the', 'an'],
      },
      {
        q: "Empty cans, cardboard boxes, and bottles should be recycled. Don't __________ those.",
        o: ['offer', 'pickup', 'remove', 'throw away'],
      },
      {
        q: "There's __________ new girl in our class. __________ girl's brother is in Dan's class",
        o: ['a/ The', 'the/ The', 'a/ a', 'the/ A'],
      },
      {
        q: "Ken's tennis club is __________ to a big supermarket.",
        o: ['near', 'close', 'between', 'across'],
      },
      {
        q: "William can't watch __________ movies. He thinks they're too scary and he always has bad dreams after watching them.",
        o: ['comedy', 'action', 'horror', 'drama'],
      },
      {
        q: 'My friends, Susie and Mike, __________in London last weekend.',
        o: ['was', 'were', 'are', 'is'],
      },
      {
        q: "We're having a big party __________ Christmas Eve.",
        o: ['on', 'at', 'in', 'of'],
      },
      {
        q: 'Justice League is a __________ movie where heroes use superpower to protect the planet from monsters.',
        o: ['comedy', 'drama', 'funny', 'science fiction'],
      },
      {
        q: 'We often go out __________ Friday evenings and come back home at 11 __________ night.',
        o: ['on/ at', 'on/ in', 'in/ at', 'at/ in'],
      },
      {
        q: "Jane's brother became a __________ when he joined the army last year.",
        o: ['waiter', 'actor', 'student', 'soldier'],
      },
      {
        q: 'Trưng Trắc and Trưng Nhị were Vietnamese great female __________.',
        o: ['armies', 'invaders', 'generals', 'soldier'],
      },
      {
        q: 'I __________ to make an omelet this morning but is __________ horrible.',
        o: ['try/ was', 'try/ is', 'tried/ is', 'tried/ was'],
      },
      {
        q: 'We can read and borrow books in a __________.',
        o: ['hospital', 'library', 'post office', 'bus station'],
      },
      {
        q: 'I __________ bottles in my garden and grow planets in them.',
        o: ['reuse', 'recycle', 'throw away', 'buy'],
      },
      {
        q: 'The movie was so __________ that I cried at the end.',
        o: ['awful', 'sad', 'fantastic', 'terrible'],
      },
      {
        q: 'Hospital, library and police station are community __________.',
        o: ['charity', 'activities', 'funds', 'services'],
      },
      {
        q: 'We have to __________ our rain forests.',
        o: ['cut down', 'donate', 'protect', 'reuse'],
      },
      {
        q: '__________ trash in the park.',
        o: ["Don't pick away", 'Pick up', 'Pick into', 'Picks up'],
      },
      {
        q: 'Speaker 1: "How can we protect the Earth?" \n Speaker 2: "____________________"',
        o: [
          'Use plastic bags',
          'Throw away trash',
          'Recycle papers',
          'Waste water',
        ],
      },
      {
        q: 'Student A: "Do you want to see a movie on Sunday?" \n Student B: "____________________"',
        o: ['Yes, I will', 'Sounds great', 'Yes, you can', "I didn't see it"],
      },
      {
        q: 'You can catch a bus at the  __________.',
        o: ['train station', 'police station', 'hospital', 'bus station'],
      },
      {
        q: 'My birthday is __________ the summer, __________ 8th July.',
        o: ['on/ on', 'in/ on', 'at/ in', 'in /at'],
      },
      {
        q: 'The hospital is __________ the mall.',
        o: ['next', 'between', 'across from', 'in front to'],
      },
      {
        q: "You should recycle empty cans and bottles. Don't just __________.",
        o: ['throw it', 'reuse them', 'throw them away', 'donate it'],
      },
      {
        q: 'I want __________ to buy some winter clothes.',
        o: [
          'go shopping',
          'to go shopping',
          'to go shopping',
          'going shopping',
        ],
      },
      {
        q: 'Student 1: "Excuses me, is there __________ supermarket near here?" \n Student 2: "Yes, __________ supermarket is on King Street, next to the police station"',
        o: ['the/ the', 'the/ a', 'a/ a', 'a/ the'],
      },
      {
        q: 'My uncle and aunt live in __________ small town in __________ United States.',
        o: ['a/ a', 'a/ the', 'the/ the', 'a/ ø'],
      },
      {
        q: "You can send your old books to __________. It's one of the good ways to reuse them.",
        o: ['creation', 'classrooms', 'container', 'charity'],
      },
      {
        q: 'Which of following cannot be recycled?  ____________________.',
        o: ['Milk cartons', 'Glass bottles', 'Cans', 'Plastic bags'],
      },
      {
        q: 'Mr. Simon is going to __________ $1000 for the charity.',
        o: ['carry', 'pick up', 'donate', 'buy'],
      },
      {
        q: 'I eat __________ home with my family.',
        o: ['at', 'in', 'on', 'beside'],
      },
      {
        q: 'Student A: "I think recycling paper is important?" \n Student B: "____________________"',
        o: ['Yes, it was', 'I agree', "No, I don't think", 'Yes, you can'],
      },
      {
        q: "We've got __________ nice red apples.",
        o: ['some', 'any', 'much', 'a'],
      },
      {
        q: 'I watched Picture Day __________.',
        o: ['today', 'yesterday', 'tomorrow', 'now'],
      },
    ],
  },
  {
    idx: 'II',
    questions: [
      {
        q: 'Where __________ you yesterday?',
        o: 'be',
      },
      {
        q: '__________ down trees in the forest.',
        o: 'Not cut',
      },
      {
        q: 'You can __________ the glass bottles and jars.',
        o: 'reuse',
      },
      {
        q: '__________ there a hospital near here?',
        o: 'Be',
      },
      {
        q: 'Every year, my mother __________ old clothes to the charity.',
        o: 'donate',
      },
      {
        q: '__________ old clothes away.',
        o: 'Not throw',
      },
      {
        q: 'My computer __________ broken yesterday.',
        o: 'be',
      },
      {
        q: '__________ there a pool at the hotel?',
        o: 'Be',
      },
      {
        q: "We shouldn't __________ glass jars away.",
        o: 'throw',
      },
      {
        q: 'People should __________ noise.',
        o: 'reduce',
      },
      {
        q: 'The bookstore __________ opposite the bus station.',
        o: 'be',
      },
      {
        q: 'He __________ an animated movie tonight.',
        o: 'watch',
      },
      {
        q: 'My father __________ action movies.',
        o: 'not always like',
      },
      {
        q: 'My brother __________ at school yesterday because he was sick.',
        o: 'not be',
      },
      {
        q: '__________ your friend at your house last weekend?',
        o: 'Be',
      },
      {
        q: 'They __________ excited about the film last night.',
        o: 'not be',
      },
      {
        q: '__________ the plastic bags because you can reuse them.',
        o: 'Not throw',
      },
      {
        q: '__________ there any good movies on last week?',
        o: 'Be',
      },
      {
        q: 'Sally May always __________ trash on the beach when she sees it.',
        o: 'pick up',
      },
      {
        q: 'My brother __________ glass jars to store food, like jam and nuts.',
        o: 'reuse',
      },
    ],
  },
  {
    idx: 'III',
    questions: [
      {
        q: 'It is a very __________ movie with lots of laughter and the endings is hilarious.',
        o: 'fun',
      },
      {
        q: 'My dad usually __________ newspapers by using them to wrap things.',
        o: 'recycling',
      },
      {
        q: 'Trees are very __________. They give food to people and animals.',
        o: 'use',
      },
      {
        q: 'The charity raised $30,000 from various __________ all over the world.',
        o: 'donate',
      },
      {
        q: 'I pick up trash in the park. I do it for __________.',
        o: 'freedom',
      },
      {
        q: 'I often spend my leisure time on watching __________ movies because I am fascinated by characters that are so lively and like real people.',
        o: 'animation',
      },
      {
        q: 'My father is a __________.',
        o: 'police',
      },
      {
        q: 'What type of community __________ do you have in your area?',
        o: 'serve',
      },
      {
        q: "People are cutting down the Amazon rainforest. It is getting smaller every year. This's terrible! We have to __________ our rainforests.",
        o: 'protection',
      },
      {
        q: "I didn't love the drama I watched on television last night because it was so __________.",
        o: 'bore',
      },
      {
        q: 'The action movies often attract viewers because they are so __________.',
        o: 'excitement',
      },
      {
        q: 'Act Green Vietnam is an __________ charity in HCM city.',
        o: 'environment',
      },
      {
        q: 'Our school has many __________ programs for students to join.',
        o: 'charities',
      },
      {
        q: 'My sister is not into horror movies because she feels that they are __________.',
        o: 'scare',
      },
      {
        q: 'Environmental pollution causes __________ warming.',
        o: 'globe',
      },
      {
        q: 'The students at our school are __________ clothes ad stationary to poor children in the flooded provinces.',
        o: 'donate',
      },
      {
        q: 'Discovery channel attracts millions of __________ around the world.',
        o: 'view',
      },
      {
        q: 'I cried a lot because of the __________ ending of the film that I watched from my personal computer yesterday.',
        o: 'sadness',
      },
      {
        q: 'Both his parents died when he was six; it was __________.',
        o: 'terribly',
      },
      {
        q: 'My brother likes action movies because they are fast and __________.',
        o: 'excite',
      },
    ],
  },
  {
    idx: 'IV',
    questions: [
      {
        q: 'They are good students.',
        o: 'The',
      },
      {
        q: "It's a nice policeman.",
        o: 'The',
      },
      {
        q: 'The lady is old.',
        o: "It's",
      },
      {
        q: 'The movie is amazing.',
        o: "It's",
      },
      {
        q: 'My house is next to a library.',
        o: 'There',
      },
      {
        q: 'The library is to the left of the supermarket and the bus station is to the right of the supermarket.',
        o: 'The supermarket is',
      },
      {
        q: 'Is the library behind the supermarket?',
        o: 'Is the supermarket',
      },
      {
        q: 'Is there a park behind your house?',
        o: 'Is your house',
      },
      {
        q: 'My house is opposite the library.',
        o: 'There',
      },
      {
        q: 'The bus station is to the left of the police station and the market is to the right of the police station.',
        o: 'The police station',
      },
      {
        q: 'The shoe store is to the right of the post office.',
        o: 'The post office',
      },
      {
        q: 'The post office is to the left of the library and the train station is to the right of the library.',
        o: 'The library',
      },
      {
        q: "It's necessary for you to drink plenty of water every day.",
        o: 'You',
      },
      {
        q: "It's a good idea to have a guidebook before you visit a city.",
        o: 'You',
      },
      {
        q: 'Protect the environment by recycling paper and plastic.',
        o: 'Recycle',
      },
      {
        q: "It's not good for you to go hiking today.",
        o: 'Do',
      },
      {
        q: "It's not good for you to go hiking today.",
        o: 'You',
      },
      {
        q: "It's necessary for you to put plastic bottles into the recycling bin.",
        o: 'You',
      },
      {
        q: "It's necessary for you to put plastic bottles into the recycling bin.",
        o: 'Please',
      },
      {
        q: 'Make our Earth greener by planting many trees.',
        o: '______________________________to make',
      },
      {
        q: "It's not good idea to go diving alone because it's quite dangerous.",
        o: 'Do',
      },
      {
        q: 'Help poor people by donating old clothes to the charity.',
        o: 'Donate',
      },
      {
        q: "It's not a good idea to eat too much fast food.",
        o: 'Do',
      },
      {
        q: 'Reuse glass jars and plastic bottles.',
        o: "Don't",
      },
      {
        q: 'Remember to do your homework.',
        o: "Don't",
      },
      {
        q: 'Go to bed early.',
        o: "Don't",
      },
      {
        q: 'Go to bed early.',
        o: 'You',
      },
      {
        q: "You shouldn't go to school late.",
        o: "Don't",
      },
    ],
  },
  {
    idx: 'V',
    questions: [
      {
        q: '/ me / is / train / a / Excuse / near / there / here / station / ? /',
      },
      {
        q: '/ bottles before / Remember to / you / wash glass / to the / send them / recycling center / . /',
      },
      {
        q: '/ the money / The local / to help / the world / charity uses / children around / poor / . /',
      },
      {
        q: "/ you like / Would / to / take part in / school's / cleanup / our / ? /",
      },
      {
        q: '/ You / can / local charity / old clothes / give / the / to / . /',
      },
      {
        q: '/ environment / help / Trees / the / and clean / green / to keep / . /',
      },
      {
        q: '/ bottles / You / should wash / before / you / them / recycle / . /',
      },
      {
        q: '/ empty / to / reuse / We / glass jar / store food / . /',
      },
      {
        q: '/ Turn off / leaving room / before / all the lights / . /',
      },
      {
        q: '/ there / last week / movies on / any good / Were / ? /',
      },
    ],
  },
  {
    idx: 'VI',
    questions: [
      {
        q: ['capital', 'invader', 'action', 'animation'],
        o: [1, 3, 0, 0],
      },
      {
        q: ['performance', 'general', 'terrible', 'September'],
        o: [1, 1, 1, 1],
      },
      {
        q: ['they', 'there', 'these', 'three'],
        o: [0, 0, 0, 0],
      },
      {
        q: ['tigers', 'elephants', 'magazines', 'cans'],
        o: [5, 8, 8, 3],
      },
      {
        q: ['books', 'dogs', 'cats', 'maps'],
        o: [4, 3, 3, 3],
      },
      {
        q: ['houses', 'faces', 'names', 'places'],
        o: [4, 3, 3, 4],
      },
      {
        q: ['nights', 'days', 'years', 'weekends'],
        o: [5, 3, 4, 7],
      },
      {
        q: ['pens', 'books', 'phones', 'tables'],
        o: [3, 4, 5, 5],
      },
      {
        q: ['communities', 'reuses', 'foxes', 'beaches'],
        o: [9, 4, 3, 5],
      },
      {
        q: ['events', 'reduces', 'donates', 'protects'],
        o: [5, 6, 6, 7],
      },
      {
        q: ['bottles', 'stations', 'gardens', 'events'],
        o: [6, 7, 6, 5],
      },
      {
        q: ['services', 'trashes', 'resources', 'stories'],
        o: [6, 5, 7, 5],
      },
    ],
  },
  {
    idx: 'VII',
    questions: [
      {
        q: ['pretty', 'easy', 'friendly', 'exciting'],
      },
      {
        q: ['direction', 'useful', 'hospital', 'garden'],
      },
      {
        q: ['police', 'office', 'between', 'hotel'],
      },
      {
        q: ['charity', 'comedy', 'fantastic', 'general'],
      },
      {
        q: ['community', 'wildlife', 'comedy', 'charity'],
      },
      {
        q: ['horror', 'fantastic', 'funny', 'awful'],
      },
      {
        q: ['hospital', 'library', 'charity', 'apartment'],
      },
      {
        q: ['remove', 'donate', 'protect', 'visit'],
      },
      {
        q: ['police', 'station', 'library', 'hospital'],
      },
      {
        q: ['charity', 'hospital', 'library', 'recycle'],
      },
      {
        q: ['fantastic', 'comedy', 'general', 'powerful'],
      },
      {
        q: ['charity', 'hospital', 'restaurant', 'museum'],
      },
      {
        q: ['action', 'drama', 'cleanup', 'begin'],
      },
      {
        q: ['awful', 'scary', 'boring', 'arrive'],
      },
    ],
  },
];

const idx_1 = test.find((data) => data.idx === 'I');
const idx_2 = test.find((data) => data.idx === 'II');
const idx_3 = test.find((data) => data.idx === 'III');
const idx_4 = test.find((data) => data.idx === 'IV');
const idx_5 = test.find((data) => data.idx === 'V');
const idx_6 = test.find((data) => data.idx === 'VI');
const idx_7 = test.find((data) => data.idx === 'VII');

export { idx_1, idx_2, idx_3, idx_4, idx_5, idx_6, idx_7 };
