import AbstractView from '../framework/view/abstract-view';

function createBoardTemplate() { // PointListTemplate
  return `
    <ul class="trip-events__list"></ul>
  `;
}

export default class BoardView extends AbstractView { // PointView
  get template() {
    return createBoardTemplate(); // PointListTemplate
  }

}
