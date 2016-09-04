import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { PageDetailComponent } from './pages/page-detail/page-detail.component';
import { provideRouter, RouterConfig, Route } from '@angular/router';
import { UserService } from './services/user.service';


const fallbackRoute:Route = {
	path: '**',
	component: CategoriesComponent
}

const indexRoute:Route = {
	path: '',
	component: CategoriesComponent
}

const routes: RouterConfig = [
    // { 
    //     path: 'categories', 
    //     component: 
    //     CategoriesComponent, 
    // },
    { 
        path: 'categories', 
        children:[
            {
                path: '',
                component: CategoriesComponent
            },
            // {
            //     path: ':catId/pages/:pageId',
            //     component: PageDetailComponent
            // }   
        ],
         
    },
    {
       path: 'categories/:catId/pages/:pageId',
       component: PageDetailComponent
    },
    {
        path: 'category/:catId',
        component: PagesComponent,
        outlet: 'pages'
    },
    { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: '/categories', pathMatch: 'full', },
    fallbackRoute,
    indexRoute
];

export const appRouterProviders = [
    provideRouter(routes /*, {enableTracing: true}*/),
    UserService
];