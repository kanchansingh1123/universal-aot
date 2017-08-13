import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WebModule } from './web/app.module';

/* hiding page loading wrapper */
let loaderEl = document.getElementById("loader-wrapper");
if(loaderEl){
    loaderEl.style.setProperty("display", "none");
}


platformBrowserDynamic().bootstrapModule(WebModule);