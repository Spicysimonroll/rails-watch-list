import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["nav_btn"]
  connect() {
    console.log("navbar controller connected!");
  }

  updateNavbar() {
    if (window.scrollY >= window.innerHeight) {
      this.element.classList.add("navbar-white")
      this.nav_btnTargets.forEach( target => target.classList.remove("text-white"))
    } else {
      this.element.classList.remove("navbar-white")
      this.nav_btnTargets.forEach( target => target.classList.add("text-white"))
    }
  }
}
