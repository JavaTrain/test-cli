import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../services/pages.service';


@Component({
  moduleId: module.id,
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['pages.component.css'],
  providers: [PagesService]
})
export class PagesComponent implements OnInit {

  constructor(
  	private actRoute: ActivatedRoute,
  	private pagesService: PagesService,
  	private router: Router
  	) { }

  ngOnInit() {
    this.actRoute.params
    .map(params => params['catId'])
      .subscribe((catId) => {
        this.pagesService.refresh(catId)
      });
  }

  getRemotePages() {
    return this.pagesService.remotePages;
  }

  onSelect(page){
  	this.actRoute.params
    .map(params => params['catId'])
      .subscribe((catId) => {
      	this.router.navigateByUrl(`/categories/${catId}/pages/${page.id}`);
      });
  }

}
