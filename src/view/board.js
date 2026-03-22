import { createElement } from '../framework/render.js';
import AbstractView from '../framework/view/abstract-view';

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
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
