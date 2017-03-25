import angular from "angular";

import style from "./home.scss";
import HomeController from "./home.controller";

export default angular
  .module("app.home", [])
  .controller("HomeController", HomeController).name;
