import {Deserializable} from './deserializable.model';

export class ChatMessage implements Deserializable{

  public from_id: string;
  public to_id: string;
  public text: string;
  public time: string;

  deserialize(input: any): this {
      return Object.assign(this, input);
    }
 }
