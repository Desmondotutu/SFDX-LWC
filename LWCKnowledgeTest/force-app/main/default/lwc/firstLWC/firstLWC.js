import { LightningElement } from 'lwc';

export default class FirstLWC extends LightningElement {
   
    FirstName ='';
    lastName='';
     
    handleChange(event){
        const field = event.target.name;
        if(field === 'firstname'){
            this.firstName = event.target.value;
        }else if(field === 'lastname'){
            this.lastName = event.target.value;
        }
    }
    get uppercasedFullName(){
        return '${this.firstName} ${this.lastName}'.toUpperCase();

    }
  
}