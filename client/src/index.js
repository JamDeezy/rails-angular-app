// import './assets/parent.css'
// import './assets/report.css'

// import angular from 'angular';

// import bootstrap from 'angular-ui-bootstrap';
// import angulartics from 'angulartics';
// import analyticsga from 'angulartics-google-analytics';

// import reach from './app/features/reach';
// import content from './app/features/content';
// import audience from './app/features/audience';
// import finance from './app/features/finance';
// import error from './app/features/error';

// import routing from './routing';
// import init from './init';
// init();

import angular from "angular";
import router from "angular-ui-router";

import home from "./features/home";
import routing from "./routing";

// Main angular app
var app = angular.module("app", [home, router]).config(routing);

export default app.name;
