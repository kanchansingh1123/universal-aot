import { platformBrowser }    from '@angular/platform-browser';

import { WebModuleNgFactory } from '../../aotweb/src/app/web/app.module.ngfactory';

/* hiding page loading wrapper */
let loaderEl = document.getElementById("loader-wrapper");
if(loaderEl){
    loaderEl.style.setProperty("display", "none");
}

console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(WebModuleNgFactory);