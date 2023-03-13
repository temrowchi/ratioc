import {MessageType} from 'react-chat-elements';

export interface User {
  userId: number;
  avatar: string;
  date: string | Date;
  alt: string;
  subtitle: string;
  messages: MessageType[];
  name?: string;
  title: string;
  unread: any;
}
