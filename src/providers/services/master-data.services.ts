import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UtilityService } from './../utils/utility.service';
import { ApiHeader } from "./header";

@Injectable()
export class MasterServices {
	public genders: any = [];
	private url: string = "/";
	public countries: any = [];
	public religions: any = [];
	public categories: any = [];
	public martialStatus: any = [];
	public nationalities: any = [];
	public repaymentModes: any = [];
	public loanRateTypes: any = [];
	public loanReasons: any = [];
	public landTypes: any = [];
	public relationTypes: any = [];
	public loanTypeList: any = [];
	public apfs: any = [];
	public applicantRelations = [];

	private allMasterData: Array<any> = [];
	private allMasterDataMap: any = {};
	private allMasterDataTypesMap = {};
	public dsaDst : any;

	constructor(public http: Http, public utilityService: UtilityService, private apiHeader: ApiHeader, private commonService: CommonService) {

	}

	getAllMasterData() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": {} };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				if (data.status) {
					this.allMasterData = data.response;
					this.processAllMasterData();
				}
			},
			error => {
				console.log('Error while fetching the data' + error);
			}
			);
	}
	//Process all the data and filter on the basis of tyoe and pCode
	processAllMasterData() {
		this.allMasterData = this.allMasterData || [];
		this.allMasterData.forEach((o) => {
			let type = o.TYPE;
			let pCode = o.P_CODE;
			let codePcodeKey = `${type}-${pCode}`;
			let typesList = this.allMasterDataMap[type] = this.allMasterDataMap[type] || [];
			let codePcodeList = this.allMasterDataMap[codePcodeKey] = this.allMasterDataMap[codePcodeKey] || [];
			if (type) {
				typesList.push(o);
				codePcodeList.push(o);
			}

			this.allMasterDataTypesMap[type] = true;
		});
	}

	getMasterData(config: { type: string; parent?: string, sorting?: boolean }) {
		let { type, parent, sorting = false } = config;
		let key = parent ? `${type}-${parent}` : type;

		let list = this.allMasterDataMap[key] || [];
		if (sorting) {
			list = this.sortArrayAssending(list);
		}
		return list;
	}

	// Get OPT
	getOtp(params) {
		return this.commonService.makeRequest(params);
	}

	//submitOtp
	submitOtp(params) {
		return this.commonService.makeRequest(params);
	}

	// check for eligibility
	createEligibility(params) {
		this.utilityService.cleanRequestParam(params);
		return this.commonService.makeRequest(params);
	}


	// check for eligibility
	updateTask(params) {
		return this.commonService.updateTask(params);
	}


	//get location names based on pincode
	getLocation(pincode) {
		let requestObject = { "requestType": "GET_PINCODE_DATA", "request": { "pincode": pincode } };
		return this.commonService.makeRequest(requestObject);
	}

	//get Bank list
	getBankList() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": 'BANK_NAME' } };
		return this.commonService.makeRequest(requestObject);
	}

	//get countries list
	getCountryList() {
		let requestObject = { "requestType": "DB_GEO_LEVEL_GET_LIST", "request": {} };
		return this.commonService.makeRequest(requestObject);
	}

	//get countries list
	getCountryListFromMaster() {
		let requestObject = { "requestType": "DB_GEO_LEVEL_GET_LIST", "request": {} };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				if (data.status) {
					this.countries = data.response;
				}
			},
			error => {
				console.log('Error while fetching the data' + error);
			}
			);
	}

	//getCountries
	getCountries() {
		return this.countries;
	}

	//get particular country
	getCountry() {
		let countryName = 'India';
		for (let i = 0; i < this.countries.length; i++) {
			if (this.countries[i].COUNTRY == countryName) {
				return this.countries[i];
			}
		}
	}


	//get company categories list
	getCompanyCategories() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": 'CUST_CONSTITUTION' } };
		return this.commonService.makeRequest(requestObject);
	}

	//get industry list
	getIndustryList() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": 'INDUSTRY_TYPE' } };
		return this.commonService.makeRequest(requestObject);
	}

	//get sub industry list by id
	getSubIndustryList(id) {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "SUB_INDUSTRY_TYPE", "parent": id } };
		return this.commonService.makeRequest(requestObject);
	}

	//get gender from master
	getGenderFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": 'GENDER_INDIVIDUAL' } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				if (data.status) {
					this.genders = data.response;
				}
			},
			error => console.log('Error while fetching data' + error)
			)
	}

	//get gender
	getGender(gender) {
		for (let i = 0; i < this.genders.length; i++) {
			if (this.genders[i].CODE == gender) {
				return this.genders[i];
			}
		}
	}

	//get genders
	getGenders() {
		return this.genders;
	}

	//get document type from masters
	getDocumentsType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "DOC_TYPE" } };
		return this.commonService.makeRequest(requestObject);
	}

	//get upload document doc LoanTypePage

	getPLDocumentsType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "DOC_TYPE", "parent": "PL" } };
		return this.commonService.makeRequest(requestObject);
	}

	//get documents on doc type
	getDocs(code) {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "DOC_NAME", 'parent': code } };
		return this.commonService.makeRequest(requestObject);
	}

	//get salary types
	getSalryTypes() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "SALARY_TYPE" } };
		return this.commonService.makeRequest(requestObject);
	}

	getAccountType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "ACCOUNT_TYPE" } };
		return this.commonService.makeRequest(requestObject);
	}

	//DATA_ENTRY_TYPE
	getDataEntryType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "BANK_STATEMENT_ENTRY" } };
		return this.commonService.makeRequest(requestObject);
	}

	//PRIMARY_FLAG
	getPrimaryFlagType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "PRIMARY_ACCOUNT" } };
		return this.commonService.makeRequest(requestObject);
	}

	getApiUrl() {
		return this.url;
	}

	setApiUrl(url) {
		this.url = url;
	}

	//get financed  type list
	getCarFinancedTypes() {
		let requestObject = {
			"requestType": "DB_GET_MASTER",
			"request": {
				"type": "CAR_FINANCE_TYPE"
			}
		}
		return this.commonService.makeRequest(requestObject);
	}

	//get financed  type list
	getCarPermitTypes() {
		let requestObject = {
			"requestType": "DB_GET_MASTER",
			"request": {
				"type": "CAR_PERMIT_TYPE"
			}
		}
		return this.commonService.makeRequest(requestObject);
	}

	//get financed  type list
	getCarManufacturerDetails(manufacturer) {
		let requestObject = {
			"requestType": "GET_CAR_MASTER",
			"request": {
				"MANUFACTURER": manufacturer
			}
		}
		return this.commonService.makeRequest(requestObject);
	}

	// get HL document name
	getHLDocumentName() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "DOC_NAME", "parent": "HL_IN_ID_PRF" } };
		return this.commonService.makeRequest(requestObject);
	}

	//get HL Applicant relation
	getHLApplicantRelations() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "APPLICANT_RELATION" } };
		return this.commonService.makeRequest(requestObject);
	}

	//set data response to applicant relation list
	setApplicantRelations() {
		let me = this;
		me.getHLApplicantRelations().subscribe(
			data => {
				this.applicantRelations = data.response;
			},
			error => {
			}
		);
	}

	//get applicant relation list
	getApplicantRelations() {
		return this.applicantRelations;
	}

	// get hl relation type
	getHLReletionType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "RELATION_TYPE" } };
		return this.commonService.makeRequest(requestObject);
	}

	// set Hl relation types array
	setHLRelations() {
		let ths = this;
		ths.getHLReletionType().subscribe(
			data => {
				this.relationTypes = data.response;
			},
			error => {
			}
		);
	}
	// set relation types
	getRelations() {
		return this.relationTypes;
	}


	// get hl employment types
	getEmploymentTypesFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "CUST_CONSTITUTION", "parent": "INDV" } };
		return this.commonService.makeRequest(requestObject);
	}

	// get hl expenses income source types
	getIncomeSourceType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "INCOME_SOURCE_TYPE" } };
		return this.commonService.makeRequest(requestObject);
	}

	// get hl expenses asset types
	getAssetTypes() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "ASSET_TYPE" } };
		return this.commonService.makeRequest(requestObject);
	}

	// get hl expenses liability types
	getLiabilityTypes() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "LIABILITY_TYPE" } };
		return this.commonService.makeRequest(requestObject);
	}
	//to get religion from master
	getReligionFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "RELIGION" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.religions = data.response;
			},
			error => {
			}
			);
	}

	//get religion from master
	getReligions() {
		return this.religions;
	}

	getReligion(religion) {
		for (let i = 0; i < this.religions.length; i++) {
			if (this.religions[i].CODE == religion) {
				return this.religions[i];
			}
		}
	}



	//to get category from master
	getCategoryFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "CAST_CATEGORY" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.categories = data.response;
			},
			error => {
			}
			);
	}
	//get category from master
	getCategories() {
		return this.categories;
	}
	getCategory(category) {
		for (let i = 0; i < this.categories.length; i++) {
			if (this.categories[i].CODE == category) {
				return this.categories[i];
			}
		}
	}

	//to get martialStatus from master
	getMartialStatusFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "MARITAL_STATUS" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.martialStatus = data.response;
			},
			error => {
			}
			);
	}
	//get martialStatus from master
	getMartialStatuses() {
		return this.martialStatus;
	}
	getMartialStatus(status) {
		for (let i = 0; i < this.martialStatus.length; i++) {
			if (this.martialStatus[i].CODE == status) {
				return this.martialStatus[i];
			}
		}
	}

	//to get Nationality from master
	getNationalityFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "NATIONALITY" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.nationalities = data.response;
			},
			error => {
			}
			);
	}
	//get Nationality from master
	getNationalities() {
		return this.nationalities;
	}
	getNationality(nattionality) {
		for (let i = 0; i < this.nationalities.length; i++) {
			if (this.nationalities[i].CODE == nattionality) {
				return this.nationalities[i];
			}
		}
	}

	//to get Repayment modes from master
	getRepaymentModesFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "REPAYMENT_MODE" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.repaymentModes = data.response;
			},
			error => {
			}
			);
	}
	//return Repayment modes from master
	getRepaymentModes() {
		return this.repaymentModes;
	}

	//to get loanRateTypes from master
	getLoanRateTypesFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "LOAN_RATE_TYPE" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.loanRateTypes = data.response;
			},
			error => {
			}
			);
	}
	//return loanRateTypes from master
	getLoanRateTypes() {
		return this.loanRateTypes;
	}
	//to get LoanReasons from master
	getLoanReasonsFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "LOAN_REASON" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.loanReasons = data.response;
			},
			error => {
			}
			);
	}
	//return LoanReasons from master
	getLoanReasons() {
		return this.loanReasons;
	}
	//
	getHLBankName() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "BANK_NAME" } };
		return this.commonService.makeRequest(requestObject);
	}

	//to get LandTypes from master
	getLandTypesFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "LAND_TYPE" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.landTypes = data.response;
			},
			error => {
			}
			);
	}
	//return LandTypes from master
	getLandTypes() {
		return this.landTypes;
	}
	getLandType(landType) {
		for (let i = 0; i < this.landTypes.length; i++) {
			if (this.landTypes[i].CODE == landType) {
				return this.landTypes[i];
			}
		}
	}
	//get accomodationTypes
	getAccommodationType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": 'ACCOMMODATION_TYPE' } };
		return this.commonService.makeRequest(requestObject);
	}

	//to get document type from master
	getHLDocumentsType() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "DOC_TYPE", "parent": "HL" } };
		return this.commonService.makeRequest(requestObject);
	}

	//get loan type list
	getProductData() {
		let requestObject = {
			"requestType": "DB_GET_MASTER",
			"request": {
				"type": "PRODUCT_CATEGORY"
			}
		}

		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				if (data.status) {
					this.loanTypeList = data.response;
				}
			},
			error => console.log('Error while fetching data' + error)
			);
	}
	//to get APFS from master
	getApfFromMaster() {
		let requestObject = { "requestType": "DB_GET_MASTER", "request": { "type": "APF" } };
		return this.commonService.makeRequest(requestObject)
			.subscribe(
			data => {
				this.apfs = data.response;
			},
			error => {
			}
			);
	}
	//return APFS from master
	getAPF() {
		return this.apfs;
	}

	getApfType(apf) {
		for (let i = 0; i < this.apfs.length; i++) {
			if (this.apfs[i].CODE == apf) {
				return this.apfs[i];
			}
		}
	}

	sortArrayAssending(array) {
		array = array.sort((o1, o2) => {
			return o1.DESC.toLowerCase() > o2.DESC.toLowerCase() ? 1 : -1
		})
		return array;
	}

	sortLocationAssending(array) {
		array = array.sort((o1, o2) => {
			return o1.LOCALITY.toLowerCase() > o2.LOCALITY.toLowerCase() ? 1 : -1
		})
		return array;
	}

	//to get particular object from master data
	getObject(code, data) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].CODE == code) {
				return data[i];
			}
		}
	}
	// check for eligibility
	actionCreateEligibility(params, action) {
		this.utilityService.cleanRequestParam(params);
		return this.commonService.makeRequestWithAction(params, action)
	}

	// set dsadst
	setDsaDst(data) {
		this.dsaDst = data;
	}

	// get dsadst
	getDsaDst() {
		return this.dsaDst;
	}
}