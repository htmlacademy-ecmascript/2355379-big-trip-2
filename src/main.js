
import NewTaskButtonView from './view/menu.js';
import NewTaskLoadingView from './view/loading.js';
import {render} from './render.js';

const tripMain = document.querySelector('.trip-main');
const tripControlsFilters = tripMain.querySelector('.trip-controls__filters');

const pageMain = document.querySelector('.page-main');
const tripEvents = pageMain.querySelector('.trip-events');

render(new NewTaskButtonView(), tripControlsFilters);
render(new NewTaskLoadingView(), tripEvents);
