
import {SessionStorageService} from 'ngx-webstorage';
export class GeneralUtility {
	/**
	 * Check matching password with confirm password
	 * @param control AbstractControl
	 */
    private sessionStore: SessionStorageService
  
	 LoggedIn() {
        const  token = this.sessionStore.retrieve('macrax-token');
        if(undefined != token || null != token){
          return true;
        }else{
          return false;
        }
	}
}
