import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed.js"
export default class extends Controller {
  connect() {
    console.log("typed controller connected!");
    new Typed(this.element, {
      strings: ["Save any kind of movies,", "whenever you want."],
      typeSpeed: 60,
      loop: true
    })
  }
}
