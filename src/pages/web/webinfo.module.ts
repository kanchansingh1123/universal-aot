import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { WebInfoPage } from './webinfo';
import { LoginInfoPage } from './login/login';
import { WebInfoRoutingModule } from './webinfo.routing';

@NgModule({
	declarations: [
		WebInfoPage,
		LoginInfoPage
	],
	imports: [
		WebInfoRoutingModule,
		RouterModule
	],
	providers: [
		
	]
})
export class WebInfoModule { }