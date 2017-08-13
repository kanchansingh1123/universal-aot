import { platformBrowser } from '@angular/platform-browser';
import { MobileModuleNgFactory } from '../../aotmobile/src/app/mobile/app.module.ngfactory';
/* hiding page loading wrapper */
var loaderEl = document.getElementById("loader-wrapper");
if (loaderEl) {
    loaderEl.style.setProperty("display", "none");
}
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(MobileModuleNgFactory);
//# sourceMappingURL=main.js.map