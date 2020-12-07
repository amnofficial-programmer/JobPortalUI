import {Deserializable} from './deserializable.model';

export class Message implements Deserializable{

  public from: string;
  public to: string;
  public text: string;
  public time: string;

  deserialize(input: any): this {
      return Object.assign(this, input);
    }
 }
