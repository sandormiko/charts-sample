import {PersonService} from './PersonService';
import {PersonDTO} from './Person.types';

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
}
