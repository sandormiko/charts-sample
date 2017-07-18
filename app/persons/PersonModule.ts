import {PersonService} from "./PersonService";
import {PersonController} from "./PersonController";
import {PersonComponent} from "./PersonComponent";
import {NewPersonController} from './NewPersonController';
import * as angular from 'angular';
import {StateProvider} from 'angular-ui-router';

export let personModuleName = angular.module('person', [])
    .service(PersonService.NAME, PersonService)
    .component(PersonComponent.NAME, PersonComponent.DEFINITION)
    .name;
