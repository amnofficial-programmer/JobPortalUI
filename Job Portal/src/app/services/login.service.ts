
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { ResponseModel } from '../models/reponse.model';
import { Constants } from '../api-url';

// Models

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }
	singUpUser(user: UserModel): Observable<ResponseModel> {
		return this.http.post<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.User_Singup, user);
    }
    loginUser(login){
        return this.http.post<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Login, login);
    }

}