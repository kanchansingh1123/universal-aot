var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { LoginInfoPage } from './login/login';
export var MobileInfoModule = (function () {
    function MobileInfoModule() {
    }
    MobileInfoModule = __decorate([
        NgModule({
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
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], MobileInfoModule);
    return MobileInfoModule;
}());
//# sourceMappingURL=mobile.module.js.map