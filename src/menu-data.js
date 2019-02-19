import _ from 'lodash';

const menuData = [
  {
    text: 'Menu Item 0',
    url: '#',
    id: _.uniqueId(),
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
    text: 'Menu Item 1',
    url: '#',
    id: _.uniqueId(),
  },
  {
    text: 'Menu Item 2',
    url: '#',
    id: _.uniqueId(),
  },
  {
    text: 'Menu Item 3',
    url: '#',
    id: _.uniqueId(),
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
    text: 'Menu Item 4',
    url: '#',
    id: _.uniqueId(),
  },
];

export default menuData;
