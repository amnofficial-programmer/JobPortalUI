import {Deserializable} from './deserializable.model';

export class ResponseModel implements Deserializable{

    code:number;
    data: any;
    msg: string;
    status: number;
    succ: boolean;

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}