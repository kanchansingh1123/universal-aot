import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { enableProdMode } from '@angular/core';

//import { WebModule } from './web/app.module';

import { MobileModule } from './mobile/app.module';

//enableProdMode();

/* hiding page loading wrapper */
let loaderEl = document.getElementById("loader-wrapper");
if(loaderEl){
    loaderEl.style.setProperty("display", "none");
}


platformBrowserDynamic().bootstrapModule(MobileModule);

