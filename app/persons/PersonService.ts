import {PersonDTO} from './Person.types';

export class PersonService {

    static $inject = ["$http"];
    static NAME = 'personService';
    persons: Array<PersonDTO>;
    constructor(private $http: ng.IHttpService) {

    }

    getPersons(): ng.IPromise<Array<PersonDTO>> {

        return this.$http.get('./persons.json').then((result: any) => {
            if (this.persons == null) {
                this.persons = result.data;
            }
            return this.persons;
        });

    }

    deletePerson(index: number, callback: Function): void {

        this.persons.splice(index, 1);
        callback();

    }

    savePerson(person: PersonDTO, callBack: Function): void {
        this.persons.push(person);
        callBack();
    }

}
