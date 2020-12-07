import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { environment } from '../../environments/environment';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket = io(environment.SOCKET_ENDPOINT, null);
  observer: Observer<string>;

  constructor() {
    try {
      //this.socket = io(environment.SOCKET_ENDPOINT, null);
     }
     catch (error) {
      console.error('Error occured while creating a connection with chat server', error);
     }

   }

   ngOnInit(){

   }
  setupChatRoom(from:string,to:string) {
      let msg = {
        from :from,
        to : to
      }
      if(undefined != this.socket){
        this.socket.emit('joinChatRoom', msg);
      }else{
        console.log('Chat server is not running, Please contact administrator');
      }
     
  }

  sendMessage(message:Message){
    this.emitMessage('message', message);
    console.log(message);
  }

  getMessages(): Observable<any>{
    if(undefined != this.socket){
      this.socket.on('message1', (message) =>{
        this.observer.next(message);
      });
    
    }
    return this.createObservable();
  }

  createObservable() : Observable<string> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }

  disconnect(){
    this.socket.emit('disconnect');
  }


  emitMessage(type:string, message:Message){
    if(undefined != this.socket){
      this.socket.emit(type,message);
    }else{
      console.log('Chat server is not running, Please contact administrator');
    }
  }
  
}
