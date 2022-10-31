import { LightningElement, api} from 'lwc';

export default class PriPubDemo extends LightningElement {
    message = 'Private message';
    @api recordId;
}