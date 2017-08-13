import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
    constructor() {}

	//to trim the text with extra spaces at both the ends
	trimText(value){
		if(value){
			return value.trim();
		}else{
			return value;
		}
		
	}

	convertNumberToWords(amount) {
		let a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
		let b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
		let number = parseFloat(amount).toFixed(2).split(".");
		var num = parseInt(number[0]);
		var digit = parseInt(number[1]);

		if ((num.toString()).length > 9) return 'overflow';
		let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
		let d = ('00' + digit).substr(-2).match(/^(\d{2})$/);;
		if (!n) return; var str = '';
		str += (Number(n[1]) != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
		str += (Number(n[2]) != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
		str += (Number(n[3]) != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
		str += (Number(n[4]) != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
		str += (Number(n[5]) != 0) ? (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rupees ' : 'Rupees ';
		str += (Number(d[1]) != 0) ? ((str != '') ? "and " : '') + (a[Number(d[1])] || b[d[1][0]] + ' ' + a[d[1][1]]) + 'Paise ' : 'Only';

		return str;
	}
	getOfferValidityPeriod(loanType) {
		return 30;
	}

	getAvailabilityPeriod(loanType) {
		return 30;
	}

	getLoanPurpose(applicationObj) {
		if (applicationObj.LOAN_PURPOSE) {
			return applicationObj.LOAN_PURPOSE;
		}
		else {
			let loanPurpose = 'NA';
			switch (applicationObj.LOAN_TYPE) {
				case 'PL':
					loanPurpose = "Personal loan";
					break;
				case 'HL':
					loanPurpose = "Housing loan";
					break;
				case 'EL':
					loanPurpose = "Education loan";
					break;
				case 'BL':
					loanPurpose = "Business loan";
					break;
				default:
					loanPurpose = "NA";
					break;
			}

			return loanPurpose;
		}
	}

	getLoanEMI = function (applicationObj) {
		let sanctionDetail = applicationObj.SANCTION_DETAIL;
		if (sanctionDetail && sanctionDetail.LOAN_AMOUNT && sanctionDetail.LOAN_RATE > -1 && sanctionDetail.LOAN_TENURE) {
			return this.computeEMI(sanctionDetail.LOAN_AMOUNT, sanctionDetail.LOAN_TENURE, sanctionDetail.LOAN_RATE);
		} else {
			return 0;
		}
	}

	computeEMI = function (loanAmount, numberOfMonths, rateOfInterest) {
		let pvif, emiAmount;
		loanAmount = loanAmount - loanAmount/10;
		if(rateOfInterest > 0){
			let monthlyInterestRatio = rateOfInterest / 12 / 100;
			pvif = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
			emiAmount = monthlyInterestRatio / (pvif - 1) * (loanAmount * pvif);
		}
		else{
			emiAmount = loanAmount/numberOfMonths;
		}
		return Math.round(emiAmount);
	};

	getDisbursementDate() {
		let date: any = new Date();
		return date.setDate(date.getDate() + 5);
	}

	getPreEMIAmount(applicationObj) {
		let sanctionDetail = applicationObj.SANCTION_DETAIL;
		if (sanctionDetail && sanctionDetail.LOAN_AMOUNT && sanctionDetail.LOAN_RATE > -1
			&& sanctionDetail.LOAN_TENURE && sanctionDetail.DUE_DATE) {
			let emiData = this.prepareEMIData(sanctionDetail.DUE_DATE);
			return this.computePreEMI(sanctionDetail.LOAN_AMOUNT, sanctionDetail.LOAN_RATE, emiData.NO_OF_DAYS);
		} else {
			return 0;
		}
	}

	computePreEMI(loanAmount, rateOfInterest, noOfDays) {
		let dailyInterestRate = rateOfInterest / 365 / 100;
		return Math.round(loanAmount * noOfDays * dailyInterestRate);
	};

	prepareEMIData(dueDate) {
		let currentDate = new Date();
			currentDate.setDate(dueDate);
			currentDate.setMonth(currentDate.getMonth() + 1);
		let firstEmiDate = currentDate;
		currentDate = new Date();
		let disbursementDate = new Date(this.getDisbursementDate());
		var noOfDays = this.diffDays(firstEmiDate, disbursementDate);
		var noOfMonths = this.diffMonths(firstEmiDate, disbursementDate)

		if (noOfMonths <= 0) { 
			firstEmiDate = new Date();
				firstEmiDate.setDate(dueDate);
				firstEmiDate.setMonth(currentDate.getMonth() + 2);
		}
		let result = {
			NO_OF_DAYS: noOfDays,
			FIRST_EMI_DATE: firstEmiDate
		};

		return result;
	}

	diffDays(startDate, endDate) {
		let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
		return Math.ceil(timeDiff / (1000 * 3600 * 24));
	}

	diffMonths(startDate, endDate) {
		return endDate.getMonth() - startDate.getMonth() + (12 * (endDate.getFullYear() - startDate.getFullYear()));
	}

	getDownPayment(loanAmount){
		return Math.ceil( loanAmount / 10)
	}
	getProcessingFee(loanAmount){
		let processingFee = Math.ceil( (1.5 / 100) * loanAmount);
		if(processingFee > 500){
			return processingFee;
		}
		else{
			return 500;
		}
	}
	getAge(DOB){
			// let today = new Date();
			// DOB = this.dateTimeService.formatBootstapDatePickerToIonic(DOB);
			// let birthDate = new Date(DOB);
			// let age = today.getFullYear() - birthDate.getFullYear();
			// let month = today.getMonth() - birthDate.getMonth();
			// if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
			// {
			// 	age--;
			// }
			// return age;
	}

	cleanRequestParam(o){
		
		if(Object.prototype.toString.call(o) == "[object Array]"){
			for(let key in o){
				this.cleanRequestParam(o[key]);
			}
		}
		else if(Object.prototype.toString.call(o) == "[object Object]"){
			for(let key in o){
				let value = this.cleanRequestParam(o[key]);
				if(value === null || value === ""){
					delete o[key];
				}
			}
		}
		return o;

	}

	prepareDueData(dueDate,months){
		let currentDate = new Date();
			currentDate.setDate(dueDate);
			currentDate.setMonth(currentDate.getMonth() + months);
		return currentDate;
	}
}