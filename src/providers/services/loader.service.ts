import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
    constructor() {
        
    }

    showLoader() {};

   hideLoader() {};

    show() {
      document.getElementById("loader-wrapper").style.display = "block";
    };

   hide() {
      document.getElementById("loader-wrapper").style.display = "none";
    };
}