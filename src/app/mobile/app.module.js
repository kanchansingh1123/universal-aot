var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MobileInfoModule } from './../../pages/mobile/mobile.module';
export var MobileModule = (function () {
    function MobileModule() {
    }
    MobileModule = __decorate([
        NgModule({
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
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], MobileModule);
    return MobileModule;
}());
//# sourceMappingURL=app.module.js.map