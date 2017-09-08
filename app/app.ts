import * as angular from "angular";
import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.css';
import 'angular-ui-bootstrap';
import 'angular-ui-router';
import {personModuleName} from './persons/PersonModule';
import {StateProvider} from 'angular-ui-router';
import {config} from './AppConfig';
import 'angular-translate';


angular.module('app', ['ui.bootstrap', 'ui.router', 'pascalprecht.translate', personModuleName])
    .config(config);
