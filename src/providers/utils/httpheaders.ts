import { Headers } from "@angular/http";

export function HttpHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return { headers };
}

export class UploadDocument {
    documentType:any;
    documentName : any;

    documentTypes: Array<any>;
    documentNames :  Array<any>;
    documentNo : any;
    uploadedDocuments : Array<any>;
	uploadedDocumentsUrl: Array<any>;
    ARTIFACT_ID: any;
    DOC_TYPE: any;
    DOC_NAME: any;
    DOC_NUM: any;
    docTypeData: any;
}

export class BankAccount{
    accountType : any ;
    accountOperatingSince : any ;
    accountNumber : any ;
    accountHolderName : any ;
    bankName : any ;
    pdfOrOther: String ;
    primaryAccount: String ;
    bankAccounts : Array<any>;
    bankStatements : Array<any>;

    BANK_NAME: any;
    ACCOUNT_TYPE : any;
    OPERATING_SINCE : any;
    ACCOUNT_HOLDER_NAME : any;
    ACCOUNT_NUM : any;
    DATA_ENTRY_TYPE : any;
    PRIMARY_FLAG : any;
    BANK_STATEMENT : Array<any>;
    BANK_STATEMENT_PASSWORD: any;
	BANK_STATEMENT_DOCUMENTS: Array<any>;
}

export class OtherIncome{
    SOURCE:any;
    INCOME:any;
    sourceName: any;
}

export class AssetType{
    TYPE:any;
    VALUE:any;
}

export class LiabilityType{
     TYPE:any;
     CURRENCY: any;
     VALUE:any;
     EMI_AMOUNT: any;
     PENDING_EMI_NUM: any;
}

export class Mobile{
    MOBILE : any;
}