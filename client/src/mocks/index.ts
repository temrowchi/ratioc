import {IMessage, MessageType} from 'react-chat-elements';
import {User} from '../model';

const shuffle = (userList: MessageType[]) => {
  for (var i = 0; i < userList.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (userList.length - i));

    var temp = userList[j];
    userList[j] = userList[i];
    userList[i] = temp;
  }
  return userList;
};

const shuffleImage = () => {
  const imageList = [
    'https://avatars.githubusercontent.com/u/3200',
    'https://avatars.githubusercontent.com/u/3500',
    'https://avatars.githubusercontent.com/u/3700',
    'https://avatars.githubusercontent.com/u/4400',
    'https://avatars.githubusercontent.com/u/4432',
    'https://avatars.githubusercontent.com/u/4433',
    'https://avatars.githubusercontent.com/u/19700',
    'https://avatars.githubusercontent.com/u/80540635'
  ];

  var j = Math.floor(Math.random() * imageList.length);
  return imageList[j];
};

export const userMessage: MessageType[] = [
  {
    position: 'left',
    type: 'text',
    title: 'Kursat',
    text: 'Give me a message list example !',
    id: 1,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'right',
    type: 'text',
    title: 'Emre',
    text: "That's all.",
    id: 2,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'right',
    type: 'text',
    title: 'Emre',
    text: "That's all.",
    id: 2,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'right',
    type: 'text',
    title: 'Emre',
    text: "That's all.",
    id: 2,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'left',
    type: 'text',
    title: 'Kursat',
    text: 'Give me a message list example !',
    id: 1,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'right',
    type: 'text',
    title: 'Emre',
    text: "That's all.",
    id: 2,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'right',
    type: 'text',
    title: 'Emre',
    text: "That's all.",
    id: 2,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'left',
    type: 'text',
    title: 'Kursat',
    text: 'Give me a message list example !',
    id: 1,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'left',
    type: 'text',
    title: 'Kursat',
    text: 'Give me a message list example !',
    id: 1,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'waiting',
    notch: false,
    retracted: false
  },
  {
    position: 'right',
    type: 'text',
    title: 'Emre',
    text: "That's all.",
    id: 2,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'sent',
    notch: false,
    retracted: false
  },
  {
    position: 'right',
    type: 'text',
    title: 'Emre',
    text: "That's all.",
    id: 2,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'sent',
    notch: false,
    retracted: false
  },
  {
    position: 'right',
    type: 'text',
    title: 'Emre',
    text: "That's all.",
    id: 2,
    focus: false,
    date: new Date(),
    titleColor: '#000',
    forwarded: false,
    replyButton: false,
    removeButton: false,
    status: 'sent',
    notch: false,
    retracted: false
  }
];

export const userList: User[] = [
  {
    userId: 0,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 0,
    messages: shuffle([...userMessage]),
    name: 'Kursat A'
  },
  {
    userId: 1,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
    messages: shuffle([...userMessage]),
    name: 'Kursat B'
  },
  {
    userId: 2,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
    messages: shuffle([...userMessage]),
    name: 'Kursat C'
  },
  {
    userId: 3,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
    messages: shuffle([...userMessage]),
    name: 'Kursat D'
  },
  {
    userId: 4,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
    messages: shuffle([...userMessage]),
    name: 'Kursat E'
  },
  {
    userId: 5,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
    messages: shuffle([...userMessage]),
    name: 'Kursat F'
  },
  {
    userId: 6,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
    messages: shuffle([...userMessage]),
    name: 'Kursat G'
  },
  {
    userId: 7,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
    messages: shuffle([...userMessage]),
    name: 'Kursat H'
  },
  {
    userId: 8,
    avatar: shuffleImage(),
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
    messages: shuffle([...userMessage]),
    name: 'Kursat I'
  }
];
