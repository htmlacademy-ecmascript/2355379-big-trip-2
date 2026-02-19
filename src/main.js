import {render} from './render.js';

import NewTaskButtonView from './view/filter.js';
import NewTaskSortingView from './view/sorting.js';
//import NewTaskLoadingView from './view/loading.js';


const tripMain = document.querySelector('.trip-main');
const tripControlsFilters = tripMain.querySelector('.trip-controls__filters');

const pageMain = document.querySelector('.page-main');
//const tripEvents = pageMain.querySelector('.trip-events');

const tripSort = pageMain.querySelector('.trip-events');

render(new NewTaskButtonView(), tripControlsFilters);
//render(new NewTaskLoadingView(), tripEvents);

render(new NewTaskSortingView(), tripSort);
