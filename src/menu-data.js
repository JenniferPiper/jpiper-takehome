import _ from 'lodash';

const menuData = [
  {
    text: 'My Schedule & Bidding',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
    submenu: [
      {
        text: 'Menu Item 0.1',
        url: '#',
        id: _.uniqueId(),
        submenu: [
          {
            text: 'Menu Item 0.1.1',
            url: '#',
            id: _.uniqueId(),
          },
          {
            text: 'Menu Item 0.1.2',
            url: '#',
            id: _.uniqueId(),
          },
          {
            text: 'Menu Item 0.1.3',
            url: '#',
            id: _.uniqueId(),
          },
        ],
      },
      {
        text: 'Menu Item 0.2',
        url: '#',
        id: _.uniqueId(),
      },
    ],
  },
  {
    text: 'Safety',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
  },
  {
    text: 'Training',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
  },
  {
    text: 'Administration',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
    submenu: [
      {
        text: 'Menu Item 3.1',
        url: '#',
        id: _.uniqueId(),
      },
      {
        text: 'Menu Item 3.2',
        url: '#',
        id: _.uniqueId(),
        submenu: [
          {
            text: 'Menu Item 3.2.1',
            url: '#',
            id: _.uniqueId(),
          },
          {
            text: 'Menu Item 3.2.2',
            url: '#',
            id: _.uniqueId(),
          },
        ],
      },
      {
        text: 'Menu Item 3.3',
        url: '#',
        id: _.uniqueId(),
      },
    ],
  },
  {
    text: 'Catering & Brand',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
  },
  {
    text: 'Hotels',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
  },
  {
    text: 'My Base',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
  },
  {
    text: 'Recognition',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
  },
  {
    text: 'My Leadership Team',
    url: '#',
    id: _.uniqueId(),
    imgurl: '',
  },
];

export default menuData;
