import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../shared/category';
import { Observable }     from 'rxjs/Observable';



@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
  providers: [CategoriesService],
})
export class CategoriesComponent implements OnInit {

	categories$: Observable<Category[]>;

	constructor(private categoriesService: CategoriesService) { }

	ngOnInit() {
    this.categoriesService.refresh()
		// this.getCategories();
    // console.log(this.categories);
	}

  getRemoteCategories() {
    return this.categoriesService.remoteCat;
  }

  getCategories() {
    console.log('getCateg');
    this.categories$ =  this.categoriesService.getCategories();
    // console.log(categories$);
      // categories$.subscribe(
      //   categories => {
      //   this.categories = categories;
      // }, error => console.log(error));

  }

}
