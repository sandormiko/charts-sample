import {PersonController} from './PersonController';
export class PersonComponent {

    static NAME = 'personComponent';
    static DEFINITION: ng.IComponentOptions = {
        controller: PersonController,
        controllerAs: 'vm',
        template: require('./Persons.html')

    }
}
