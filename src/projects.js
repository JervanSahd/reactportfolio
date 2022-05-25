const projects = [
  {
    name: {
      title: 'Project 1',
      first: 'Loïs',
      last: 'Schmitt',
    },
    descripi: {
      street: {
        number: 5425,
        name: 'Rue Cyrus-Hugues',
      },
      city: 'Rouen',
      state: 'Bouches-du-Rhône',
      country: 'France',
      postcode: 32788,
      coordinates: {
        latitude: '-2.4086',
        longitude: '-84.8111',
      },
      timezone: {
        offset: '-12:00',
        description: 'Eniwetok, Kwajalein',
      },
    },
    email: 'lois.schmitt@example.com',
    login: {
      uuid: '8f087c24-ed83-4698-a1ff-05089fd1893b',
      username: 'yellowwolf121',
      password: 'barbie',
      salt: '61FmyLH3',
      md5: '88e4dc8460521aaf9bdbf05da9907756',
      sha1: 'f61584cc2b9360ff7b4cc93155880e9dd07f2ff4',
      sha256:
        '4ba59a31cb0caab8f7bcd4e31cfe57ed57eb85f87e0b53776dac7391e3c67441',
    },
    dob: {
      date: '1964-10-20T03:04:28.223Z',
      age: 56,
    },
    registered: {
      date: '2003-04-01T19:07:53.321Z',
      age: 17,
    },
    phone: '03-98-05-52-64',
    cell: '06-57-60-07-14',
    id: {
      name: 'INSEE',
      value: '1NNaN74137943 47',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/51.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/51.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
      alt: 'men 51'
    },
    nat: 'FR',
    links: {
      github: 'Github Repo',
      deployed: 'Deployed site'
    }
  },
  {
    name: {
      title: 'Project 2',
      first: 'Aapo',
      last: 'Perala',
    },
    location: {
      street: {
        number: 2318,
        name: 'Hämeentie',
      },
      city: 'Ulvila',
      state: 'Southern Ostrobothnia',
      country: 'Finland',
      postcode: 51000,
      coordinates: {
        latitude: '-4.4923',
        longitude: '0.8392',
      },
      timezone: {
        offset: '-4:00',
        description: 'Atlantic Time (Canada), Caracas, La Paz',
      },
    },
    email: 'aapo.perala@example.com',
    login: {
      uuid: 'ca01b26c-725c-4f75-ae62-0b434eb7ea01',
      username: 'blackostrich507',
      password: 'diego',
      salt: '6Ndht1nN',
      md5: 'd53edd53a23a181d9679526114784c2f',
      sha1: '68e3d1e8984b926bc612c22f58ebc1b347c89d51',
      sha256:
        '36d663c08f4583ba4f00b438beb7335ff5e21ee72fa03149285619447f39ff62',
    },
    dob: {
      date: '1986-04-18T16:40:51.497Z',
      age: 34,
    },
    registered: {
      date: '2005-02-16T21:49:26.913Z',
      age: 15,
    },
    phone: '03-571-585',
    cell: '044-788-91-57',
    id: {
      name: 'HETU',
      value: 'NaNNA175undefined',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/35.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/35.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/35.jpg',
      alt: 'men 35'
    },
    nat: 'FI',
    links: {
      github: 'Github Repo',
      deployed: 'Deployed site'
    }
  },
  {
    name: {
      title: 'Project 3',
      first: 'Miguel',
      last: 'Murray',
    },
    location: {
      street: {
        number: 5491,
        name: 'York Road',
      },
      city: 'Mullingar',
      state: 'Kilkenny',
      country: 'Ireland',
      postcode: 63576,
      coordinates: {
        latitude: '-32.4465',
        longitude: '122.9490',
      },
      timezone: {
        offset: '+10:00',
        description: 'Eastern Australia, Guam, Vladivostok',
      },
    },
    email: 'miguel.murray@example.com',
    login: {
      uuid: '3a42a7c2-529c-429c-97bc-de18b1c8a0ba',
      username: 'whitegoose105',
      password: 'pinkfloy',
      salt: 'HztiLZz8',
      md5: '27b2b276ac23365a78b488bf15d77a82',
      sha1: '4bcbd27ec65d190ae891c4a61b57a9a721e33889',
      sha256:
        '37b17ff71028fe73e34509fa739113f9fdd0fa83c0a11cd5235360aa069c7e14',
    },
    dob: {
      date: '1967-05-22T10:17:35.234Z',
      age: 53,
    },
    registered: {
      date: '2009-07-06T18:11:43.712Z',
      age: 11,
    },
    phone: '051-065-8420',
    cell: '081-357-7877',
    id: {
      name: 'PPS',
      value: '0694851T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/22.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/22.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/22.jpg',
      alt: 'men 22'
    },
    nat: 'IE',
    links: {
      github: 'Github Repo',
      deployed: 'Deployed site'
    }
  },
  
  {
    name: {
      title: 'Project 5',
      first: 'Mia',
      last: 'Mendoza',
    },
    location: {
      street: {
        number: 5521,
        name: 'Mcclellan Rd',
      },
      city: 'Maitland',
      state: 'Western Australia',
      country: 'Australia',
      postcode: 3068,
      coordinates: {
        latitude: '57.4143',
        longitude: '107.8067',
      },
      timezone: {
        offset: '+5:00',
        description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
      },
    },
    email: 'mia.mendoza@example.com',
    login: {
      uuid: 'c09f7e82-4102-445d-9db5-32514f0d0f65',
      username: 'heavygoose920',
      password: 'senior',
      salt: 'xBeOuCY8',
      md5: 'a8ec3e998e3d3a66a29a8244577092c5',
      sha1: '80279818715952d1601c80c3c2057ccda482b417',
      sha256:
        'd3f171b228e2c9fb352002a1dc081497de81fa694a3905ce9f50fe4b9440cb23',
    },
    dob: {
      date: '1951-03-18T00:04:08.706Z',
      age: 69,
    },
    registered: {
      date: '2016-04-18T05:25:32.573Z',
      age: 4,
    },
    phone: '07-2738-2553',
    cell: '0485-800-907',
    id: {
      name: 'TFN',
      value: '005883794',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/77.jpg',
      
      alt: 'woman 77'
    },
    nat: 'AU',
    links: {
      github: 'Github Repo',
      deployed: 'Deployed site'
    }
  },
  {
    name: {
      title: 'Project 6',
      first: 'Kelly',
      last: 'Meyer',
    },
    location: {
      street: {
        number: 2766,
        name: 'Springfield Road',
      },
      city: 'Carlow',
      state: 'Roscommon',
      country: 'Ireland',
      postcode: 28070,
      coordinates: {
        latitude: '-72.8372',
        longitude: '28.6407',
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'kelly.meyer@example.com',
    login: {
      uuid: '295373e1-e55e-448a-ac90-fb9ab878f166',
      username: 'bluepeacock361',
      password: 'beau',
      salt: 'tscbulC2',
      md5: '4b09ca339c29a804ad5e7db9839db6b2',
      sha1: 'e62ad01e42b5788dfbe6da3e1535f81dae6bcc0c',
      sha256:
        '87378ec63ed7287e752dc4dceba051f737924ade77b002a4b7fe999ff8cab53d',
    },
    dob: {
      date: '1969-07-10T09:39:45.614Z',
      age: 51,
    },
    registered: {
      date: '2005-06-19T17:43:14.882Z',
      age: 15,
    },
    phone: '051-531-9619',
    cell: '081-824-0434',
    id: {
      name: 'PPS',
      value: '6947363T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/40.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/40.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
      alt: 'woman 40'
    },
    nat: 'IE',

    links: {
      github: 'Github Repo',
      deployed: 'Deployed site'
    }
  },
  
];

export default projects;
