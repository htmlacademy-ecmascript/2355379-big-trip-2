import {createElement} from '../render.js';

function createNewTaskLoadingTemplate() {
  return '<p class="trip-events__msg">Loading...</p>';
}

export default class NewTaskLoadingView {
  getTemplate() {
    return createNewTaskLoadingTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
