import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiHeader {
    public AuthResult : any;
    constructor() {
        
    }

    getHeaders() {
        if(!this.AuthResult) {
            this.AuthResult = JSON.parse(localStorage.getItem('AuthData'));
        }
        const headers = new Headers();
        let tempHeader : any;
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', "Bearer " + this.AuthResult.token);
        headers.append('API-TOKEN', this.AuthResult.token);
        tempHeader = headers;
        return {headers: tempHeader };
    } 

    setAuthResult(result) {
        this.AuthResult = result
    } 
}