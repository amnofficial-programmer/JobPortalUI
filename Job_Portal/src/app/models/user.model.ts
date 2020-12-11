import { Message } from './message.model';
import {Deserializable} from './deserializable.model';

export class UserModel implements Deserializable{
	id:number;
	userName:String;
	password:String;
  role:String;
  mobileNo:string;
  addTime:Date;
  lastUpdated:Date;
  ipAddress:string;
  rightPosition:string;
  messages: Message[];
  otp: string;

  UserModel(){
    this.id = 0;
    this.userName='';
    this.password='';
    this.role='';
    this.mobileNo = '';
    this.ipAddress = '';
    this.rightPosition = '';
    this.messages = [];
    this.otp = '';
  }

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  clear(){
      this.id=0;
      this.userName='';
      this.password='';
      this.role='';
  }

  setRightPosition(rightPosition:string){
    this.rightPosition = rightPosition
  }

  setId(id:number){
    this.id = id
  }
  setUsername(username:string){
    this.userName = username
  }
  setRole(role:string){
    this.role=role
  }

  setMessages(messages:Message[]){
    this.messages = messages
  }

    
}