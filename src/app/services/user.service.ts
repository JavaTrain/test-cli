import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

	private loggedIn = new BehaviorSubject(false);
	private loginUrl = "http://api-test.loc/app_dev.php/api/v1/tokens";


	constructor(private http: Http) {
		if (!!localStorage.getItem('auth_token')){
			this.loggedIn.next(true);
		}
	}

	login(username, password) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let body = { username: username, password: password }

		return this.http.post
			(
				this.loginUrl,
				JSON.stringify(body),
				{ headers }
			)
			.map(res => res.json())
			.map((res) => {
				if (res.token) {
					localStorage.setItem('auth_token', res.token);
					this.loggedIn.next(true);
				}

				return res.token;
			});
	}

	isLoggedIn() {
		return this.loggedIn.getValue();
	}

	getLoggedIn() {
    	return this.loggedIn;
  	}

	logout() {
		localStorage.removeItem('auth_token');
		this.loggedIn.next(false);
	}

	getTokenData(){
		let token = localStorage.getItem('auth_token');
		let data;
		if (!token) {
			data = null;
		} else {
    		data = JSON.parse(atob(token.split('.')[1]));
		}
		
    	return data;
	}

}
