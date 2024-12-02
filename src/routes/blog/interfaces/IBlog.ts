import { Timestamp } from 'firebase/firestore';

export default interface IBlog {
  author: string;
  id: string;
  content: string;
  title: string;
  image: string;
  timeToRead: string;
  overview: string;
  dateCreated: Timestamp;
}
