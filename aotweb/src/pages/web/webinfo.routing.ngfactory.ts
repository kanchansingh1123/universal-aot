/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../../src/pages/web/webinfo.routing';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/core/src/di/injector';
import * as import4 from './webinfo.ngfactory';
import * as import5 from './login/login.ngfactory';
import * as import6 from '../../../../src/pages/web/webinfo';
import * as import7 from '../../../../src/pages/web/login/login';
import * as import8 from '@angular/router/src/router_config_loader';
class WebInfoRoutingModuleInjector extends import0.NgModuleInjector<import1.WebInfoRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _WebInfoRoutingModule_1:import1.WebInfoRoutingModule;
  __ROUTES_2:any[];
  constructor(parent:import3.Injector) {
    super(parent,[
      import4.WebInfoPageNgFactory,
      import5.LoginInfoPageNgFactory
    ]
    ,([] as any[]));
  }
  get _ROUTES_2():any[] {
        if ((this.__ROUTES_2 == null)) { (this.__ROUTES_2 = [[{
          path: 'web',
          component: import6.WebInfoPage,
          children: [
            {
              path: 'login',
              component: import7.LoginInfoPage
            }
            ,
            {
              path: '',
              redirectTo: 'login',
              pathMatch: 'full'
            }

          ]

        }
    ]]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.WebInfoRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD,(null as any)));
    this._WebInfoRoutingModule_1 = new import1.WebInfoRoutingModule();
    return this._WebInfoRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.WebInfoRoutingModule)) { return this._WebInfoRoutingModule_1; }
    if ((token === import8.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const WebInfoRoutingModuleNgFactory:import0.NgModuleFactory<import1.WebInfoRoutingModule> = new import0.NgModuleFactory(WebInfoRoutingModuleInjector,import1.WebInfoRoutingModule);