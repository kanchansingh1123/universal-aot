import { Injectable } from '@angular/core';

@Injectable()

export class UrlProviderService {
	public urlData : any;

	// set the data of API URL
	setApiUrlData(data){
		this.urlData = data;
	}

	getUrl() {
		if(!this.urlData) {
			this.urlData = JSON.parse(localStorage.getItem('api_url_data'));
		}
		let protocol = this.urlData.protocol;
		let host = this.urlData.host;
		let port = this.urlData.port;
		return `${protocol}//${host}:${port}`;
	}

	getEndPointUrl() {
		let url = this.getUrl();
		let endpoint = this.urlData.endpoint;
		return `${url}${endpoint}`;
	}

	getApplicationUrl() {
		let url = this.getUrl();
		return `${url}/application/get/`;
	}
}