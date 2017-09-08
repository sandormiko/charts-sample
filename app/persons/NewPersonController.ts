import {PersonService} from './PersonService';
import {PersonDTO} from './Person.types';

const MAX_AGE : number = 200;

export class NewPersonController {
	
    static $inject = ["personService"];

    person: PersonDTO;
    constructor(private personService: PersonService) {

    }

    $onInit() {
        this.person = <PersonDTO>{};
    }
	
    submit(close: Function, isFormValid: boolean) {
	  if(isFormValid){
        this.personService.savePerson(this.person, close);
        }
    }
	
	validateAgeRange(personForm : any){
		if(personForm.age.$valid){
			let ageAsNum :number = +this.person.age;
			if(ageAsNum > MAX_AGE){
				personForm.age.$setValidity("pattern", false);
			}
		}
	}
}
