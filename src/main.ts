import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { appRouterProviders } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(
	AppComponent,
	[
		HTTP_PROVIDERS,
		disableDeprecatedForms(),
		provideForms(),
		appRouterProviders,
	]
)
	.catch((err: any) => console.error(err));
