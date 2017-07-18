import {StateProvider} from 'angular-ui-router';
var localeEn = require('./locales/en.json');

export function config($stateProvider: StateProvider, $urlServiceProvider: any,$translateProvider: ng.translate.ITranslateProvider) {
    $urlServiceProvider.rules.otherwise({ state: 'personList' });
    $stateProvider.state('personList', {
        url: '/persons',
        component: 'personComponent'

    });

    $translateProvider.translations('en', localeEn);
    $translateProvider.preferredLanguage('en');

}
config.$inject = ["$stateProvider", "$urlServiceProvider","$translateProvider"];
