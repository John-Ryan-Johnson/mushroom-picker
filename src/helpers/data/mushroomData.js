import Swal from 'sweetalert2';

const mushrooms = [
  {
    id: 'mushroom1',
    name: 'White Button',
    description: 'White button mushrooms are the most popular of all varieties of mushrooms. White buttons are packed with nutrients.',
    imgUrl: 'https://www.blogrollcenter.com/gallery/how-to-grow-mushrooms/how_to_grow_mushrooms_1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Death Angel',
    description: 'These mushrooms feature amatoxins, which initially causes gastrointestinal disorders with symptoms such as diarrhea, nausea and stomach pains occurring within five to twelve hours.',
    imgUrl: 'https://www.first-nature.com/fungi/images/amanitaceae/amanita-virosa5.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom3',
    name: 'Reishi',
    description: 'Reishi mushrooms support the human immune system and have been shown to be helpful in fighting cancer. Reishi mushroom studies have shown that they can slow down the growth of tumors.',
    imgUrl: 'https://mommypotamus.com/wp-content/uploads/2015/05/reishi-mushroom-benefits.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Death Cap',
    description: 'Perhaps the deadliest of all mushrooms, within 6 to 12 hours after consumption, violent abdominal pain, vomiting, and bloody diarrhea appear, causing rapid loss of fluid.',
    imgUrl: 'https://www.abc.net.au/cm/rimage/5420838-4x3-xlarge.jpg?v=2',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Oyster',
    description: 'Oyster mushrooms boost the immune system. Eaten raw or cooked, oyster mushrooms have antioxidant properties that protect cells.',
    imgUrl: 'https://nature.mdc.mo.gov/sites/default/files/styles/centered_full/public/media/images/2010/09/38.jpg?itok=sbhF3xCR',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Chanterelle',
    description: 'Chanterelle mushrooms, which grow all over the world, are a great source of protein. Chanterelles provide many essential B vitamins.',
    imgUrl: 'https://i.redd.it/tjfowg6noj7y.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Porcini',
    description: 'Porcini mushrooms are low in calories and are a great source of fiber. They are also very high in potassium so caution should be used by those who need to restrict their potassium intake.',
    imgUrl: 'https://images.assetsdelivery.com/compings_v2/boarding1now/boarding1now1301/boarding1now130100057.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Shimeji',
    description: 'Shimeji mushrooms are a good source of protein. They also contain many of the B vitamins, potassium, zinc, and copper. Shimejis are another excellent source of dietary fiber.',
    imgUrl: 'https://files.shroomery.org/files/11-003/566313874-Beech05.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Conocybe filaris ',
    description: 'Conocybe filaris is an innocent-looking lawn mushroom that if eaten the onset of gastrointestinal symptoms often occurs 6-24 hours after the mushrooms were consumed.',
    imgUrl: 'https://i.pinimg.com/originals/85/6a/6f/856a6f48434c454851b4fc9e57a69d99.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Crimini',
    description: 'Crimini mushrooms have been shown to provide anti-inflammatory benefits. These mushrooms also protect against cardiovascular disease and blood flow problems.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2020/01/How-To-Identify-Cremini-Mushrooms-1024x512.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'King Trumpet',
    description: 'The King Trumpet mushroom is firm and meaty with a mild flavor. King trumpets are a healthy meat substitute as they are rich in protein without the fat that is present in red meat.',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2418/8179/products/grow-your-own-mushrooms-kit-grow-your-own-king-trumpets-28589683597_grande.jpg?v=1567178948',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'White and Brown Beech',
    description: 'White and Brown Beech mushrooms have a buttery, nutty flavor and are crunchy and firm in texture. These mushrooms are a good source of antioxidants and B vitamins.',
    imgUrl: 'https://www.epicurus.com/Glossary/wp-content/uploads/2018/11/White-and-Brown-Beech-mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Portabello',
    description: 'Portabello mushrooms are large mushrooms which are tan with a dark underside. They are low in calories, fat free and a rich source of copper, selenium, and niacin.',
    imgUrl: 'https://luv2garden.com/almond_portobello.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Webcap',
    description: 'These mushrooms feature a poison known as orellanin, which initially causes symptoms similar to the common flu and has a long latency period and may take 2 days to 3 weeks to cause symptoms.',
    imgUrl: 'https://www.first-nature.com/fungi/images/cortinariales/cortinarius-uliginosus1.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Turkey Tail',
    description: 'Turkey tail mushrooms studies have shown that the mushroom is beneficial in helping to rebuild the immune system in people who are being treated for a variety of different types of cancer.',
    imgUrl: 'https://debsgarden.squarespace.com/storage/moss-and-mushrooms/Turkey%20tail%20fungus%201.jpg?__SQUARESPACE_CACHEVERSION=1503796447294',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Maitake',
    description: 'The Japanese maitake mushroom, also called, "hen of the woods", has several health benefits. Maitakes have anticancer and antiviral properties.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Eikhaas.JPG/1200px-Eikhaas.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Enoki',
    description: 'Enoki mushrooms have long, white stems and are known as "snow puffs" in Japan. Enokis are low in calories and a great source of protein. Enokis are also very rich in niacin and B vitamins.',
    imgUrl: 'https://www.gourmetmushrooms.co.uk/wp-content/uploads/2014/10/Enoki-Log-2-Enlarged.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Lactarius Salmonicolor',
    description: 'The Lactarius salmonicolor mushroom is a wild, edible mushroom which has strong medicinal properties. This mushroom contains antioxidants and radical scavenging components.',
    imgUrl: 'https://antropocene.it/wp-content/uploads/2019/02/Lactarius_salmonicolor-800x445.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Shiitake',
    description: 'Shiitake mushrooms have many health benefits along with an enjoyable smoky flavor. Shiitakes support the immune system and protect heart health.',
    imgUrl: 'https://i0.wp.com/fungially.com/wp-content/uploads/2015/10/Fungi-Ally-Spawn-ShiitakeLE46-Mushroom.gif?fit=512%2C512&ssl=1',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Magic Mushroom',
    description: 'Magic mushrooms are hallucinogenic drugs, meaning they can cause you to see, hear, and feel sensations that seem real but are not.',
    imgUrl: 'https://i1.wp.com/thefunguys.ca/wp-content/uploads/2020/02/Siberian-Mushroom-Shamans-Santa-Claus_Plaid-Zebra.jpg?fit=1020%2C681&ssl=1',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
];

let basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const poisonAlert = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isPoisonous === true) {
      Swal.fire({
        title: 'OH NO!!',
        text: 'You picked a poisonous mushroom!',
        background: 'black',
        imageUrl: 'https://bestwaytogetridofmouseinhouse.com/wp-content/uploads/2017/11/poison1.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
    }
  });
};

const deadlyAlert = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isPoisonous === true) {
      Swal.fire({
        title: 'You picked a deadly mushroom!',
        text: 'YOU LOST!!',
        background: 'black',
        imageUrl: 'https://www.freepngimg.com/thumb/grim_reaper/29957-5-grim-reaper-transparent-background.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      }).then((result) => {
        window.location.reload();
      });
    }
  });
};

const magicAlert = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isPoisonous === true) {
      Swal.fire({
        title: 'You picked a magic mushroom!',
        text: 'YOU WON!!',
        background: 'black',
        imageUrl: 'https://p7.hiclipart.com/preview/421/763/732/lethal-league-sportsfriends-game-kartoshka-flat-file-you-win.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      }).then((result) => {
        window.location.reload();
      });
    }
  });
};

const pickedPoisonousMushroom = (pickedMushroom) => {
  poisonAlert();
  if (basket.length < 1) {
    basket.splice(0, 0);
  } else if (basket.length < 2) {
    basket.splice(0, 1);
  } else {
    basket.splice(0, 2);
  }
  mushrooms.push(pickedMushroom);
};

const pickedDeadlyMushroom = () => {
  basket = [];
  deadlyAlert();
};

const pickedMagicMushroom = () => {
  magicAlert();
  basket = [];
};


const pickAMushroom = () => {
  const randomMushroom = Math.floor(Math.random() * mushrooms.length);
  const pickedMushroom = mushrooms[randomMushroom];
  const pickedMushroomIndex = mushrooms.indexOf(pickedMushroom);
  mushrooms.splice(pickedMushroomIndex, 1);
  if (pickedMushroom.isPoisonous) {
    pickedPoisonousMushroom(pickedMushroom);
  } else if (pickedMushroom.isDeadly) {
    pickedDeadlyMushroom(pickedMushroom);
  } else if (pickedMushroom.isMagic) {
    pickedMagicMushroom(pickedMushroom);
  } else {
    basket.push(pickedMushroom);
  }
};

export default { getMushrooms, getBasket, pickAMushroom };
