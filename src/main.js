import {render} from './render.js';

import NewTaskButtonView from './view/filter.js'; // без скобок - импорт default
import NewTaskSortingView from './view/sort-view.js';
import NewTaskFormCreateTemplate from './view/create.js';
import BoardPresenter from './presenter/board-presenter.js';

//import NewTaskLoadingView from './view/loading.js';


const tripMain = document.querySelector('.trip-main');
const tripControlsFilters = tripMain.querySelector('.trip-controls__filters');

const pageMain = document.querySelector('.page-main');

const tripEvents = pageMain.querySelector('.trip-events');

// создать экземпляр презентера, аргумент предан из board-presenter.js
const boardPresenter = new BoardPresenter({boardContainer: tripEvents});


/*
const tripSort = document.querySelector('.trip-sort');
const tripEventsList = tripSort.querySelector('.trip-events__list');
*/


render(new NewTaskButtonView(), tripControlsFilters); // NewTaskFilterView

// вызывается из boardPresenter.js
boardPresenter.init();
console.log(boardPresenter);
/*
render(new NewTaskSortingView(), tripEvents);

render(new NewTaskFormCreateTemplate(), tripEventsList);
*/
