import AbstractView from '../framework/view/abstract-view.js';
import { isFuturePoints, isPastPoints, isPresentPoints } from '../utils.js';


function createNewTaskButtonTemplate(points) {
  //getPastPoints();
  return `
  <form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input ${isFuturePoints(points) ? '' : 'disabled'} id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
      <input ${isPresentPoints(points) ? '' : 'disabled'} id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">
      <label class="trip-filters__filter-label" for="filter-present">Present</label>
    </div>

    <div class="trip-filters__filter">
      <input ${isPastPoints(points) ? '' : 'disabled'} id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
  `;
}


export default class FilterView extends AbstractView {
  constructor(points) {
    super();
    this.points = points;
  }

  get template() {
    return createNewTaskButtonTemplate(this.points);
  }

}
