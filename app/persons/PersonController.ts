import {PersonDTO} from './Person.types';
import {PersonService} from './PersonService';
import {NewPersonController} from './NewPersonController';
import {PersonGraphController} from './PersonGraphController';
import * as angular from 'angular';
import * as chart from 'highcharts';
export class PersonController {

    static NAME = 'PersonController';
    static $inject = ["personService", "$uibModal"];
    persons: Array<PersonDTO>;
    constructor(private personService: PersonService, private $uibModal: ng.ui.bootstrap.IModalService) {

    }

    deletePerson(index: number) {
        let options: ng.ui.bootstrap.IModalSettings = {
            template: require('./Confirm.html'),
            windowClass: 'popup',
            size: 'md'
        };

        this.$uibModal.open(options).result.then(() => {
            this.personService.deletePerson(index, () => {
                this.refreshPersonList();

            }
            )
        }
        );
    }

    $onInit() {
        this.refreshPersonList();

    }

    private refreshPersonList(): void {
        this.personService.getPersons().then((data: Array<PersonDTO>) => { this.persons = data });
    }

    newPerson(): void {
        let options: ng.ui.bootstrap.IModalSettings = {
            template: require('./PersonEdit.html'),
            windowClass: 'popup',
            size: 'md',
            controllerAs: 'vm',
            controller: NewPersonController
        };
        this.$uibModal.open(options).result.then(() => {
            this.refreshPersonList();
        });
    }

    openGraph(): void {
        let options: ng.ui.bootstrap.IModalSettings = {
            template: require('./PersonGraph.html'),
            windowClass: 'popup',
            size: 'md',
            controllerAs: 'vm',
            controller: PersonGraphController
        };
        this.$uibModal.open(options).result.then(() => {
            this.refreshPersonList();
        }, () => { });

    }

    getPersonJob(person: PersonDTO): string {
        if (person.job) {
            let job: string = person.job;
            return `(${job})`;
        }
        return '';
    }
}
