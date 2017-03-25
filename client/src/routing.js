export default [
  "$urlRouterProvider",
  "$locationProvider",
  "$stateProvider",
  function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    $stateProvider
      .state("home", {
        url: "/",
        views: {
          root: {
            template: require("./features/home/home.html"),
            controller: "HomeController",
            controllerAs: "home"
          }
        }
      })
      .state("another", {
        parent: "home",
        url: "another",
        template: require("./features/home/home.html"),
        controller: "HomeController",
        controllerAs: "home"
      });
  }
];
