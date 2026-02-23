import {createElement} from '../render.js';

function createBoardTemplate() { // PointListTemplate
  return `
    <ul class="trip-events__list"></ul>
  `;
}

export default class BoardView { // PointView
  getTemplate() {
    return createBoardTemplate(); // PointListTemplate
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
