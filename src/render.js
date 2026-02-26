const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend', // перед окончанием контейнера
  AFTEREND: 'afterend',
};

function createElement(template) {
  // создание временной обёртки
  const newElement = document.createElement('div');

  // вствить div строкой
  newElement.innerHTML = template;

  // вернуть строку в виде html-элемента
  return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.BEFOREEND) {
  container.insertAdjacentElement(place, component.getElement());
}

export {RenderPosition, createElement, render};
