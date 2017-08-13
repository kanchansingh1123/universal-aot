import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importing routing module
 import { AppRoutingModule } from './app.routing';

//custom module
import { WebInfoModule } from './../../pages/web/webinfo.module';


//importing components
import { MyApp } from './app.component';


@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		WebInfoModule,
		RouterModule
	],
	bootstrap: [MyApp],
	providers: [
		
	]
})
export class WebModule { }