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
export class PagesService {
  
	remotePages = new BehaviorSubject([]);
  
  constructor(private http: Http) {}

  private categoriesUrl = "http://api-test.loc/app_dev.php/api/v1/categories/{cat_id}/pages";

  getPages(catId): Observable<Category[]> {
    console.log(catId);
    return this.http.get(this.categoriesUrl.replace(/{cat_id}}/, catId))
      .map(res => res.json());
  }

  refresh(catId){
    console.log(catId);
    let url = this.categoriesUrl.replace(/{cat_id}/, catId);
  	let pagesResponse = this.http.get(url)
      .map(res => res.json());

    pagesResponse.subscribe(
        (cat) => {
          this.remotePages.next(cat);
        },
        (error) => {
          console.error(error);
        }
      );

    return pagesResponse;
  }

}
