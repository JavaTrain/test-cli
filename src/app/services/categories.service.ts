import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
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
export class CategoriesService {
	remoteCat = new BehaviorSubject([]);
  
  constructor(private http: Http) {}

  private categoriesUrl = "http://api-test.loc/app_dev.php/api/v1/categories";

  getCategories(): Observable<Category[]> {
  	console.log(this.http);
    return this.http.get(this.categoriesUrl)
      .map(res => res.json());
  }

  refresh(){
  	let catResponse = this.http.get(this.categoriesUrl)
      .map(res => res.json());

    catResponse.subscribe(
        (cat) => {
          this.remoteCat.next(cat);
        },
        (error) => {
          console.error(error);
        }
      );

    return catResponse;
  }

}
