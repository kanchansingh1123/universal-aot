import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';


import { LoginInfoPage } from './../../pages/mobile/login/login';

@Component({
	templateUrl: 'app.html',
	selector: 'ion-app'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	constructor() {
		
	}

	ngOnInit() {
		this.nav.setRoot(LoginInfoPage);
	}
}
