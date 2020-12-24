import { Injectable } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class GeneralUtilityService {

  constructor( private sessionStore: SessionStorageService) { }

  LoggedIn() {
    const  token = this.sessionStore.retrieve('macrax-token');
    if(undefined != token || null != token){
      return true;
    }else{
      return false;
    }
}

}
