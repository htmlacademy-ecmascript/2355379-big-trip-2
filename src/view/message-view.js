// Создание вьюшки для сообщения при отсутствии точек
import AbstractView from '../framework/view/abstract-view';

function createMessageTemplate(text = 'Click New Event to create your first point') {
  return `
  <p class="trip-events__msg">${text}</p>
  `;
}

export default class MessageView extends AbstractView {
  get template() {
    return createMessageTemplate();
  }

}
