import { Router } from '@angular/router';
import { Component } from '@angular/core';


declare var Auth0: any;

@Component({
  templateUrl: 'app.html',
  selector: 'ion-app'
})

export class MyApp {

  constructor(public router:Router) {
    this.router.navigate(['web']);
  }
}
