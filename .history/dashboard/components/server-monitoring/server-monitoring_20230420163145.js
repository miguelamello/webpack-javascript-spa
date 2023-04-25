"use strict";

import './server-monitoring.css';
import template from './server-monitoring.html';

class ServerMonitoring {

  /** Private Properties */
  #observers = []; // holds the observers
  #template = ``; // holds the template

  /** Private Methods */

  #setTemplate() {
    this.#template = template;
  }

  // binds the dom nodes to the class
  #bondToDom() {
    setTimeout(() => {
      //this.#submitButton = document.getElementById('nw5voqqr71');
      //this.setListeners();
    });
  }

  /** Public Methods */
  constructor() {
    this.#setTemplate();
    this.#bondToDom();
  }

  // gets an observer previously set
  getObserver(index) {
    return this.#observers[index];
  }

  // sets an observer
  setObserver(index, module) {
    this.#observers[index] = module;
  }

  // sets the listeners for this module
  setListeners() {
    setTimeout(() => { //wait for dom nodes creation
      /*if (this.#submitButton) {
        this.#submitButton.addEventListener('click', () => {
          this.handleSubmit();
        });
      }*/
    });
  }

  // returns the template for this module
  getTemplate() { return this.#template; }

  
  load(callback = undefined) {
    const container = document.getElementById('app-body'); //gets the container
    container.innerHTML = this.getTemplate(); //applies the template to the container
    if (callback) this[callback]();
    //this.#bondToDom();
  }

}

export default new ServerMonitoring();
