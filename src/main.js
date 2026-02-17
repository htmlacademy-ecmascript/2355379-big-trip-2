
import NewTaskButtonView from './view/menu-button.js';
import {render} from './render.js';

const tripMain = document.querySelector('.trip-main');
const tripControlsFilters = tripMain.querySelector('.trip-controls__filters');

render(new NewTaskButtonView(), tripControlsFilters);
