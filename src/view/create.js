import AbstractView from '../framework/view/abstract-view.js';

function createNewTaskFormCreateTemplate() {
  return `
  <ul class="trip-events__list"></ul>
  `;
}

export default class NewTaskFormCreateTemplate extends AbstractView {
  //export default class NewTaskFormCreateTemplate {
  //getTemplate() {
  get template() {
    return createNewTaskFormCreateTemplate();
  }
  /*
    getElement() {
      if (!this.element) {
        this.element = createElement(this.getTemplate());
      }

      return this.element;
    }

      removeElement() {
        this.element = null;
      } */
}
