// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';

// Models

import { Constants } from '../api-url';
import { UserModel } from '../models/user.model';
import {SessionStorageService} from 'ngx-webstorage';

import { ResponseModel } from '../models/reponse.model';
import { JobSeekerModel } from '../models/job-seeker.model';



@Injectable()
export class JobSeekerService {

	token:any;
	constructor(private http: HttpClient, private sessionStore: SessionStorageService) { 
	 // this.token = sessionStore.retrieve('macrax-token');
	}

	getHTTPHeaders(): HttpHeaders {
		this.token = this.sessionStore.retrieve('macrax-token');
		let result = new HttpHeaders();
		result = result.set('Content-Type', 'application/json');
		result = result.set('Authorization', 'Bearer ' +this.token);

		return result;
	}

	createJobSeekerProfile(jobSeeker:JobSeekerModel):Observable<ResponseModel>{
		const httpHeaders = this.getHTTPHeaders();

		return this.http.post<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Job_Seeker_Add, jobSeeker,{   headers: httpHeaders,});

	}
	//get all Read
	// READ
	
getAllJobSeekers(role:string): Observable<ResponseModel>{
		const httpHeaders = this.getHTTPHeaders();
		return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.GetJobSeekers+role,{   headers: httpHeaders,});
}

getAllColleges(): Observable<ResponseModel>{
	const httpHeaders = this.getHTTPHeaders();
	return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.College,{   headers: httpHeaders,});
}
getAllDegrees(): Observable<ResponseModel>{
	const httpHeaders = this.getHTTPHeaders();
	return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Degree,{   headers: httpHeaders,});
}

getAllDepartments(id): Observable<ResponseModel>{

	const httpParams =new HttpParams()
	.set('degreeId', id.toString())
	const httpHeaders = this.getHTTPHeaders();
	return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Department,{   headers: httpHeaders,params:httpParams});
}

getAllExperience(): Observable<ResponseModel>{
	const httpHeaders = this.getHTTPHeaders();
	return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Experience,{   headers: httpHeaders,});
}

getAllJobLocation(): Observable<ResponseModel>{
	const httpHeaders = this.getHTTPHeaders();
	return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.JobLocation,{   headers: httpHeaders,});
}

getAllFunctionalAreas(): Observable<ResponseModel>{
	const httpHeaders = this.getHTTPHeaders();
	return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Functional_Area,{   headers: httpHeaders,});
}

getAllSalaryRanges(): Observable<ResponseModel>{
	const httpHeaders = this.getHTTPHeaders();
	return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Salary_Range,{   headers: httpHeaders,});
}

getAllSkills(ids): Observable<ResponseModel>{
	const httpHeaders = this.getHTTPHeaders();
	return this.http.put<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Skills,ids,{headers: httpHeaders});

}

getJobsCount(): Observable<any>{
	const httpHeaders = this.getHTTPHeaders();
	return this.http.get<any>(Constants.URL.DOMAIN_URL+Constants.URL.GetJobsCount,{headers: httpHeaders});
}




}
