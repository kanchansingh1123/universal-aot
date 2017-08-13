import { UrlProviderService } from './url.provider.service';
import { UtilityService } from './../utils/utility.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiHeader } from "./header";

@Injectable()

export class CommonService {

	private url: string = "/";

	constructor(public http: Http,
		public utilityService: UtilityService,
		public urlProvider: UrlProviderService,
		private apiHeader: ApiHeader) { }



	// to send data to the server
	makeRequest(params) {
		this.utilityService.cleanRequestParam(params);
		return this.http.post(this.urlProvider.getEndPointUrl(), params, this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	//to set the url according to environment
	setApiUrl(url) {
		this.url = url;
	}

	// get application details by id
	getApplication(id) {
		return this.http.get(this.urlProvider.getApplicationUrl() + id, this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	getApplications(params) {
		return this.http.post(this.urlProvider.getUrl() + '/application/personnel/list', params, this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	updateTask(params) {
		return this.http.post(this.urlProvider.getUrl() + '/task_data/update', params.request, this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	getTaskListMaster() {
		return this.http.get(this.urlProvider.getUrl() + '/task/sidebar', this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	getTaskList(params) {
		return this.http.post(this.urlProvider.getUrl() + `/task_data/personnel/list`, params, this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	getTaskApplicationDetails(applicationId, taskId) {
		return this.http.get(this.urlProvider.getUrl() + '/application/get/' + applicationId + '/' + taskId, this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	getApplicationList(params) {
		let field: string = params.FILTER.FIELD;
		let value: string = params.FILTER.VALUE;
		let url: string = `${this.urlProvider.getUrl()}/application/personnel/list?FILTER[FIELD]=${field}&FILTER[VALUE]=${value}`;
		return this.http.get(url, this.apiHeader.getHeaders())
			.map(res => res.json());
	}
	logoutUser() {
		return this.http.get(this.urlProvider.getUrl() + '/user/logout', this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	// comment and save for task.
	saveTask(params) {
		return this.http.post(this.urlProvider.getUrl() + '/task_data/save', params.request, this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	//to get partner list
	getPatnerList(requestType) {
		return this.http.get(this.urlProvider.getUrl() + requestType, this.apiHeader.getHeaders()).map(res => res.json());
	}


	makeRequestWithAction(params, action) {
		this.utilityService.cleanRequestParam(params);
		return this.http.post(this.urlProvider.getUrl() + action, params.request, this.apiHeader.getHeaders())
			.map(res => res.json());
	}

	//to get users based on role in task details page
    getUsersByRole(params){
        return this.http.get(this.urlProvider.getUrl()+'/role/user/'+params, this.apiHeader.getHeaders())
			.map( res => res.json());
    }

	// to get the current task details 
	getCurrentTaskDetils(params){
		return this.http.post(this.urlProvider.getUrl()+'/task_data/personnel/application', params, this.apiHeader.getHeaders())
			.map( res => res.json());
	}

	// to reallocate the task to selected user.
	reallocateTask(params){
		return this.http.post(this.urlProvider.getUrl()+'/task_data/reallocate', params, this.apiHeader.getHeaders())
			.map( res => res.json());
	}
}