export function runConfig($templateCache: ng.ITemplateCacheService) {

  $templateCache.put('navigation.html'),require('./navigation.html');
}
runConfig.$inject = ["$templateCache"];
