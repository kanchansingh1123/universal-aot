import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core'
import { tokenNotExpired } from 'angular2-jwt';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfigService } from './app-config.services';
import { CommonService } from './common.service';
// Avoid name not found warnings
declare var Auth0LockPasswordless: any;
declare var Auth0: any;
declare var window : any;

@Injectable()

export class Auth {
    public lock: any;
    public lockOptions: any;
    public url: string;
    public authSettings : any;
    public auth0Instance : any;
    public authResult : any;
    public ssoToken : any;
    public ssoIntervalId:any;

    public event = new Subject<any>();

    constructor(public http: Http, private appConfigService:AppConfigService, private commonService: CommonService) {
        
    }

    public login() {
        // Call the show method to display the widget.
        //var ths = this;
        this.lock.socialOrEmailcode(this.lockOptions, (err, authResult, token, code) => {
            if(!err) {
                localStorage.setItem('id_token', token);
                localStorage.setItem("AuthData", JSON.stringify(authResult));
                this.appConfigService.setUserEmail(authResult.email);
                this.authResult = authResult;
                this.ssoToken = token;
                this.lock.close();
                this.fireEvevt({
                    login: true,
                    data: this.authResult
                });
            }
        });
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public fireEvevt(data) {
        this.event.next(data);
    }

    public logout(config?: any) {
        // Remove token from localStorage
        // localStorage.removeItem('id_token');
        // localStorage.removeItem('AuthData');
        // localStorage.removeItem('api_url_data');
        // //this.login();
        // let url = this.url+'logout';
        // window.location.href = url; 
        if(this.lock){
            this.lock.logout(config);
        }
        return false;  
    };

    getApiUrl() {
        return this.url;
    }

    setApiUrl(url) {
        this.url = url;
    }

    public getLogOutUrl() {
        return this.url+'logout';
    }

    public setAuthSetting(settings) {
        this.authSettings = settings;
    }

    public getAuthSetting(){
        return this.authSettings;
    }

    initializeAuth() {
        this.lock = new Auth0LockPasswordless(this.authSettings.clientID, this.authSettings.domain);
        this.lockOptions = {
            responseType: "code",
            autoClose: true,
            defaultLocation: 'IN',
            //callbackURL: "",
            icon: 'https://assets.incred.com/images/logo/logo.png',
            primaryColor: '#d9472f',
            closable: false,
            connections: ["google-oauth2"],
            //popup : true,
            dict: {
                title: "",
                welcome: "Welcome {name}!",
                code: {
                    codeInputPlaceholder: "Your code",
                    footerText: "",
                    headerText: "Please check your email ({email})<br />You've received a message from us<br />with your passcode."
                },
                confirmation: {
                    success: "Thanks for signing in."
                },
                email: {
                    emailInputPlaceholder: "your-email@incred.com",
                    footerText: "",
                    headerText: "Enter your email to login."
                },
                networkOrEmail: {
                    emailInputPlaceholder: "your-email@incred.com",
                    footerText: "",
                    headerText: "",
                    separatorText: "Otherwise, Enter your email to login.",
                    smallSocialButtonsHeader: "Login with"
                }
            },
            authParams: {
                sso: true,
                redirect: false,
                responseType: 'token'
            }
        };
    }

    getProfile() {
        this.lock.getProfile(this.ssoToken, (error, profile) => {
            if (!error && profile) {
                this.authResult.token = profile.token;
                localStorage.setItem("AuthData", JSON.stringify(this.authResult));
            }
        });
    }

    getSso() {
        let ths = this;
        this.ssoIntervalId = setInterval(() => {
            ths.getProfile();
            ths.getAuthInstance().getSSOData(function (err, data) {
                if(!err) {
                    if(!data.sso) {
                       // ths.logout();
                        return;
                    }
                }
            }); 
        }, 5000);
    }

    clearSso(){
        if(this.ssoIntervalId){
            clearInterval(this.ssoIntervalId);
            localStorage.removeItem('id_token');
            localStorage.removeItem('AuthData');
            localStorage.removeItem('api_url_data');
            this.ssoIntervalId = null;
        }
    }

    getAuthInstance() {
        if(!this.auth0Instance) {
            let envConfig = this.appConfigService.getEnvConfig();
            let authConfig = {
                domain: envConfig.auth0.domain,
                clientID: envConfig.auth0.clientID,
                callbackURL: envConfig.auth0.callbackURL,
                responseType: 'code',
                sso: true
            };
            this.auth0Instance = new Auth0(authConfig);
        }
        return this.auth0Instance;
    }

    checkLogin (){
        this.getAuthInstance().getSSOData((err, data) => {
            let evevtData:any;
            if(!err && data) {
                try {
                    this.authResult = JSON.parse(localStorage.getItem("AuthData"));
                    this.ssoToken = localStorage.getItem("id_token");
                    if(this.authResult){
                        evevtData = {
                            login :  data.sso,
                            data : this.authResult
                        }
                    }
                }
                catch(error){
                    console.log(error);
                }
            }

            if(!data.sso) {
                //return this.logout();
            }

            if(!evevtData) {
                evevtData = {
                    login :  false,
                    message :  "SSO failed."
                }
            }
            this.fireEvevt(evevtData);
        });
    }
    // isUserLoggedIn(callBack, scope) {
    //     this.getAuthInstance().getSSOData((err, data) => {
    //         if(!err) {
    //             if(!data.sso) {
    //                 return callBack(false, scope);
    //             }
    //             else {
    //                 try{
    //                     this.authResult = JSON.parse(localStorage.getItem("AuthData"));
    //                     if(!this.authResult){
    //                         this.login();
    //                         return;
    //                     }
    //                     this.apiHeader.setAuthResult(this.authResult);
    //                     return callBack(true, scope);;
    //                 }
    //                 catch(error){
    //                     console.log(error);
    //                 }
    //             }
    //         }
    //     });
    // }

    getAuthResult() {
        return this.authResult;        
    }
}