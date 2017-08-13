import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiHeader } from "./header";

@Injectable()
export class AppConfigService {

    public url : string;
    public userEmail : string;
    public envConfig : any;
    public loginUserDetails: any;

    public isReady = false;
    public deferredCallbacks = [];
    public filestackConfig : any;
    public s3Config : any;

 
    constructor(public http: Http, private apiHeader: ApiHeader, private commonService: CommonService){
        
    }

    // get application settings
    getConfig(environment){
        this.http.get('assets/config/'+ environment +'.json').map( res => res.json())
            .subscribe(
                data => {
                    this.filestackConfig = data.filestack;
                    this.s3Config = data.s3;
                },
                error => {
                    console.log("error in loading app config");
                }
            );
    }

    // get environment settings
    getEnvironmentConfig(environment){
        return this.http.get('assets/config/'+ environment +'.json').map( res => res.json());
    }

    // get the current api url
    getApiUrl() {
        return this.url;
    }

    // set the current api url
    setApiUrl(url) {
        this.url = url;
    }

    // get the current api url
    getUserEmail() {
        return this.userEmail;
    }

    // set the current api url
    setUserEmail(email) {
        this.userEmail = email;
    }

    // get env config
    getEnvConfig() {
        return this.envConfig;
    }

    // set env config
    setEnvConfig(config) {
        this.envConfig = config;
    }

    //get user details by email
	getLoginUserDetails(email){
		let requestObject = {
			"requestType": "RULES_USER_GET",
			"request": {
				"email": email
			}
		}

        return this.commonService.makeRequest(requestObject);
	}

    //set user details 
    setUserDetails(details){
        this.loginUserDetails = details;
    }

    //get user details
    getUserDetails(){
        return this.loginUserDetails;
    }

    setReady(flag: boolean){
        this.isReady = flag;
        if(this.isReady){
            while(this.deferredCallbacks.length > 0){
                let fn = this.deferredCallbacks.shift();
                fn();
            }
        }
    }
    onReady(fn: Function, scope?: any){
        if(!this.isReady){
            let bindFn = fn.bind(scope);
            this.deferredCallbacks.push(bindFn);
        }
        else{
            fn.call(scope || {});
        }
    }

    //set filestack config
    getFilestackConfig() {
        return this.filestackConfig;
    }

    // set s3 config
    getS3Config () {
        return this.s3Config;
    }
}