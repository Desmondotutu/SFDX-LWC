import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Phone from '@salesforce/schema/Account.Phone';

export default class WireAdapterDemo extends LightningElement {
    @api recordId

    @wire(getRecord, {recordId: '$recordId', fields: [Account.name, Account.phone]})
    record;

    get name(){
        return this.record.data ? getFieldValue(this.record.data, Account.name) : '';

    }

    get phone(){
        return this.record.data ? getFieldValue(this.record.data, Account.phone) : '';

    }


}