import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { LoginInfoPage } from './login/login';

@NgModule({
	declarations: [
		LoginInfoPage,
	],
	imports: [
		IonicModule.forRoot(LoginInfoPage),
		BrowserModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		LoginInfoPage,
	],
	providers: [

	]
})
export class MobileInfoModule { }