import IDataResponse from '../../../interfaces/IDataResponse';

export interface IPoem extends IDataResponse {
  author: string;
  id: string;
  image: string;
  content: string;
  title: string;
  timeToRead: string;
  dateCreated: Date;
}
