import { DOM } from './dom.js';
import List from './list.js';

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
  if (options.selected) { element.selected = options.selected }
  if (options.disabled) { element.disabled = options.disabled }
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

export function findItemWithUuid(uuid, itemType) {
  if (itemType === 'task') {
    return List.findTask(uuid);
  } else {
    return List.findProject(uuid);
  }
}

export function deleteItem(target, itemType) {
  if (itemType === 'task') {
    List.deleteTask(target);
    DOM.renderTasks();
  } else {
    List.deleteProject(target);
    DOM.renderProjects();
  }
}

export function truncateString(string, n){
  return (string.length > n) ? string.slice(0, n-1) + '...' : string;
};

export function findTaskInProjects(taskUuid) {
  for (const project of Object.values(List.getProjects())) {
    const tasks = Object.values(project.tasks);
    for (const task of tasks) {
      if (task.uuid === taskUuid) {
        return project;
      }
    }
  }
  return null;
}