import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { environment } from '../../environments/environment';
import { Message } from '../models/message.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ResponseModel } from '../models/reponse.model';
import { Constants } from '../api-url';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket = io(environment.SOCKET_ENDPOINT, null);
  observer: Observer<string>;
  statusObserver: Observer<string>;
  token:any;

  constructor(private http: HttpClient, private sessionStore: SessionStorageService) {
    try {
      //this.socket = io(environment.SOCKET_ENDPOINT, null);
      //this.token=localStorage.getItem('macrax-token')
      this.token = sessionStore.retrieve('macrax-token')
     }
     catch (error) {
      console.error('Error occured while creating a connection with chat server', error);
     }

   }

   getHTTPHeaders(): HttpHeaders {
		let result = new HttpHeaders();
		result = result.set('Content-Type', 'application/json');
		result = result.set('Authorization', 'Bearer ' +this.token);

		return result;
	}

   ngOnInit(){

   }
  setupChatRoom(from_id:string,to_id:string) {
      let msg = {
        from_id :from_id,
        to_id : to_id
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

  getStatusObserver(): Observable<any>{
    if(undefined != this.socket){
      this.socket.on('statusUpdated', (message) =>{
        this.statusObserver.next(message);
      });
    
    }
    return this.createStatusObservable();
  }

  createStatusObservable() : Observable<string> {
    return new Observable(statusObserver => {
      this.statusObserver = statusObserver;
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

  getHistoricalChats(body){

    const httpHeaders = this.getHTTPHeaders();
	  return this.http.post<ResponseModel>(environment.SOCKET_ENDPOINT+Constants.URL.GetAllHostoricalChats,body);

  }
  
}
