// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import NavbarController from "./navbar_controller"
application.register("navbar", NavbarController)

import StarRatingController from "./star_rating_controller"
application.register("star-rating", StarRatingController)

import TomSelectController from "./tom_select_controller"
application.register("tom-select", TomSelectController)

import TypedJsController from "./typed_js_controller"
application.register("typed-js", TypedJsController)
