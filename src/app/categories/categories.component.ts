import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../shared/category';
import { Observable }     from 'rxjs/Observable';
import { Router }              from '@angular/router';




@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
  providers: [CategoriesService],
})
export class CategoriesComponent implements OnInit {

	categories$: Observable<Category[]>;

	constructor(
    private categoriesService: CategoriesService,
    private router: Router
    ) { }

	ngOnInit() {
    this.categoriesService.refresh();
    // can use one of them
    this.categories$ =  this.categoriesService.getCategories();
		// this.getCategories();
    // console.log(this.categories);
	}

  getRemoteCategories() {
    return this.categoriesService.remoteCat;
  }

  getCategories() {
    console.log('getCateg');
    this.categories$ =  this.categoriesService.getCategories();
  }

   onSelect(category: any) {
    this.router.navigateByUrl(`/categories(pages:category/${category.id})`);
  }
}
