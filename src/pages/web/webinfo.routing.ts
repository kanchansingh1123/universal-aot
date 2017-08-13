/**
* To define routing (url) for each module.
* Routing uses hash location strategy, so you can see # in url
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebInfoPage } from './webinfo';
import { LoginInfoPage } from './login/login';

const appRoutes: Routes = [
	{
		path: 'web', component: WebInfoPage,
		children: [
			{
				path: 'login', component: LoginInfoPage
			}, {
				path: '', redirectTo: 'login', pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class WebInfoRoutingModule { }
