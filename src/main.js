import {render} from './render.js';

import NewTaskButtonView from './view/filter.js';
import NewTaskSortingView from './view/sorting.js';
import NewTaskFormCreateTemplate from './view/create.js';

//import NewTaskLoadingView from './view/loading.js';


const tripMain = document.querySelector('.trip-main');
const tripControlsFilters = tripMain.querySelector('.trip-controls__filters');

const pageMain = document.querySelector('.page-main');

const tripEvents = pageMain.querySelector('.trip-events');

const tripSort = document.querySelector('.trip-sort');
const tripEventsList = tripSort.querySelector('.trip-events__list');



render(new NewTaskButtonView(), tripControlsFilters);


render(new NewTaskSortingView(), tripEvents);

render(new NewTaskFormCreateTemplate(), tripEventsList);
