import Task from './task.js';
import Project from './project.js';

export default class Storage {
  constructor() {
    this.taskList = JSON.parse(localStorage.getItem('taskList') || '{}');
    this.projectList = JSON.parse(localStorage.getItem('projectList') || '{}');
  }

  updateLocalStorage(storageName) {
    const storageKey = storageName;
    const storageObject = this[storageName];
    localStorage.setItem(storageKey, JSON.stringify(storageObject));
  }

  saveTask(task) {
    this.taskList[task.uuid] = task;
    this.updateLocalStorage('taskList');
  }

  deleteTask(task) {
    delete this.taskList[task.uuid];
    this.updateLocalStorage('taskList');
  }

  deleteAllTasks() {
    this.taskList = {};
    this.updateLocalStorage('taskList');
  }

  saveProject(project) {
    this.projectList[project.uuid] = project;
    this.updateLocalStorage('projectList');
  }

  deleteProject(project) {
    delete this.projectList(project.uuid);
    this.updateLocalStorage('projectList');
  }

  deleteAllProjects() {
    this.projectList = {};
    this.updateLocalStorage('projectList');
  }
}