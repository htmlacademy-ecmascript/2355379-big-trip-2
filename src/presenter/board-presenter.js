import { render } from '../render.js';
import BoardView from '../view/board.js'; // без скобок - импорт default, название может быть любое или повторяет с импорта
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';

import SortView from '../view/sort-view.js';

export default class BoardPresenter {
  listPoint = new BoardView();
  pointComponent = new PointView();
  editPointComponent = new EditPointView();

  constructor({ boardContainer, pointsModel }) { // параметр передан в main.js
    this.boardContainer = boardContainer; // создано свойство boardContainer у этого объекта
    this.pointsModel = pointsModel;
  }

  // init(), инициализатор начальной загрузки, название придумал
  // вызывается в main.js
  init() {
    console.log(this.pointsModel.getPoints());
    this.points = this.pointsModel.getPoints().slice();

    // добавить сортировку
    render(new SortView(), this.boardContainer); // по умолчанию идет добавление в конец контейнера, прописано в render.js (place = RenderPosition.BEFOREEND)
    // добавить список
    render(this.listPoint, this.boardContainer);

    // добавить точки маршрута
    for (let i = 0; i < 3; i++) {
      // 1 аргумент - что рисовать, 2 аргумент - куда рисовать
      render(new PointView(), this.listPoint.getElement());
      render(new EditPointView(), this.listPoint.getElement());
    }

  }
}
