import { DOM } from './dom.js';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function createElement(type, options = {}) {
  let element;

  if (type === 'Image') {
    element = new Image();
  } else {
    element = document.createElement(type);
  }

  if (options.value) { element.value = options.value}
  if (options.id) { element.id = options.id }
  if (options.classes) { element.classList.add(...options.classes) }
  if (options.name) { element.name = options.name }
  if (options.type) { element.type = options.type }
  if (options.innerText) { element.innerText = options.innerText }
  if (options.src) { element.src = options.src }
  if (options.appendTo) { options.appendTo.appendChild(element) }
  if (options.insertBefore && options.insertBefore.parentElement) { options.insertBefore.parentElement.insertBefore(element, options.insertBefore); }

  if (options.attributes) {
    for (const [key, value] of Object.entries(options.attributes)) {
      element.setAttribute(key, value);
    }
  }
  return element;
}

export function findUuidOfHtmlItem(item, itemType) {
  return item.closest('.existing-' + itemType).id;
}

export function findItemWithUuid(uuid, itemType, storage) {
  return storage[itemType + 'List'][uuid];
}

export function deleteItem(target, itemType, storage) {
  storage['delete' + capitalizeFirstLetter(itemType)](target);
  (itemType === 'task') ? DOM.renderTasks() : DOM.renderProjects();
}