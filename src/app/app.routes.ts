import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { provideRouter, RouterConfig, Route } from '@angular/router';

const fallbackRoute:Route = {
	path: '**',
	component: CategoriesComponent
}

const indexRoute:Route = {
	path: '',
	component: CategoriesComponent
}

const routes: RouterConfig = [
    { path: 'categories', component: CategoriesComponent, },
    { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: '/categories', pathMatch: 'full', },
    fallbackRoute,
    indexRoute
];

export const appRouterProviders = [
    provideRouter(routes /*, {enableTracing: true}*/),
];