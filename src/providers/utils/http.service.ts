import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import { LoaderService } from './../services/loader.service';

import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';

@Injectable()
export class HttpService extends Http {
  public pendingRequests: number = 0;
  public showLoading: boolean = false;

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private loaderService: LoaderService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.get(url,options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {   
      return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.delete(url, options));
  }
  
  getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
    return options;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    this.pendingRequests++;
    this.turnOnModal();
    return observable
      .catch((err, source) => {
        return err;
      })
      .do((res: Response) => {
        
      }, (err: any) => {
        this.turnOffModal();
      })
      .finally(() => {
        this.turnOffModal();
      });
    }
  
  private turnOnModal() {
    if (!this.showLoading) {
        this.showLoading = true;
        this.loaderService.show();
    }
    this.showLoading = true;
  }
  
  private turnOffModal() {
    this.pendingRequests--;
    if (this.pendingRequests <= 0) {
      if (this.showLoading) {
        this.loaderService.hide();
      }
      this.showLoading = false;
    }
  }
}