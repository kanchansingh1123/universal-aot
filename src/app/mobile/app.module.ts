// required modules
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';


// component modules
import { MyApp } from './app.component';

// sub modules
import { MobileInfoModule } from './../../pages/mobile/mobile.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MobileInfoModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    
  ]
})
export class MobileModule { }