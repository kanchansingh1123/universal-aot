import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MobileModule } from './mobile/app.module';

/* hiding page loading wrapper */
let loaderEl = document.getElementById("loader-wrapper");
if(loaderEl){
    loaderEl.style.setProperty("display", "none");
}

platformBrowserDynamic().bootstrapModule(MobileModule);

