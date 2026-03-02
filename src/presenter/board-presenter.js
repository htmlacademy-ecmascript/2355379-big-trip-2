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
    this.points = this.pointsModel.getPoints().slice();

    // добавить сортировку
    render(new SortView(), this.boardContainer); // по умолчанию идет добавление в конец контейнера, прописано в render.js (place = RenderPosition.BEFOREEND)

    // добавить список
    render(this.listPoint, this.boardContainer);

    // добавить точки маршрута
    for (let i = 0; i < this.points.length; i++) {
      // i-тая точка маршрута
      const point = this.points[i];
      // у очередного элемента по destination находим в points-model.js с функцией getDestinationById,
      const destination = this.pointsModel.getDestinationById(point.destination);
      // как в const point
      const offers = this.pointsModel
        .getOffersByType(point.type)
        .offers // массив 'offers': по типу в offers.js
        .filter((offer) => point.offers.includes(offer.id)); // фильтрация id-шников в 'offers': в points.js

      const allDestinations = this.pointsModel.getDestination().map((item) => item.name);
      const allTypes = this.pointsModel.getOffers().map((item) => item.type);
      const offersByType = this.pointsModel.getOffersByType(point.type).offers;

      // 1 аргумент - что рисовать, 2 аргумент - куда рисовать
      render(new PointView(point, destination, offers), this.listPoint.getElement()); // передается в constructor файла point-view.js

      render(new EditPointView(point, destination, allDestinations, allTypes, offersByType), this.listPoint.getElement());

    }

  }
}
