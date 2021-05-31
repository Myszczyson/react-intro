export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  defaultHeaderIcon: 'home',
  info: {
    defaultInfoTitle: 'Info',
    defaultInfoImage: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    defaultInfoDescription: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
  },
  FAQ: {
    defaultFAQTitle: 'FAQ',
    defaultFAQImage: 'https://images.pexels.com/photos/397998/pexels-photo-397998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    defaultFAQDescription: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',

  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to do not want <sup>ever!</sup>',
    description: 'Interesting things I do not want to check out!',
    image: 'https://images.pexels.com/photos/6709/vintage-grey-airplane-plane.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: 'list-3',
    title: 'Things to get better <sup>quick!</sup>',
    description: 'Things I want to get better at as fast as I can!',
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-9',
    listId: 'list-3',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-8',
    columnId: 'column-4',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-9',
    columnId: 'column-5',
    title: 'Harry Potter',
  },
  {
    id: 'card-10',
    columnId: 'column-5',
    title: 'Star Wars',
  },
  {
    id: 'card-11',
    columnId: 'column-6',
    title: 'The Witcher',
  },
  {
    id: 'card-12',
    columnId: 'column-6',
    title: 'Skyrim',
  },
  {
    id: 'card-13',
    columnId: 'column-7',
    title: 'Skyrim',
  },
  {
    id: 'card-14',
    columnId: 'column-7',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-15',
    columnId: 'column-8',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-16',
    columnId: 'column-8',
    title: 'Harry Potter',
  },
  {
    id: 'card-17',
    columnId: 'column-9',
    title: 'Star Wars',
  },
  {
    id: 'card-18',
    columnId: 'column-9',
    title: 'The Witcher',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
