import {createElement} from '../render.js';

function createNewTaskButtonTemplate() {
  return '<div class="trip-filters__filter"><input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked disabled><label class="trip-filters__filter-label" for="filter-everything">Everything</label></div>';
}

export default class NewTaskButtonView {
  getTemplate() {
    return createNewTaskButtonTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
};
