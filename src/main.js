import { render } from './framework/render.js';

import FilterView from './view/filter.js'; // без скобок - импорт default

import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';


const tripMain = document.querySelector('.trip-main');
const tripControlsFilters = tripMain.querySelector('.trip-controls__filters');

const pageMain = document.querySelector('.page-main');

const tripEvents = pageMain.querySelector('.trip-events');

const pointsModel = new PointsModel();
// создать экземпляр презентера, аргумент предан из board-presenter.js
const boardPresenter = new BoardPresenter({ boardContainer: tripEvents, pointsModel });

render(new FilterView(pointsModel.getPoints()), tripControlsFilters); // NewTaskFilterView

// вызывается из boardPresenter.js
boardPresenter.init();

