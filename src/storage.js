//import Task from './task.js';
//import Project from './project.js';

export default class Storage {
  constructor() {
    this._taskList = JSON.parse(localStorage.getItem('taskList') || '{}');
    this._projectList = JSON.parse(localStorage.getItem('projectList') || '{}');
  }

  get taskList() {
    return this._taskList;
  }

  get projectList() {
    return this._projectList;
  }

  updateLocalStorage(storageName) {
    const storageKey = storageName;
    const storageObject = this[storageName];
    localStorage.setItem(storageKey, JSON.stringify(storageObject));
  }

  saveTask(task) {
    this._taskList[task._uuid] = task;
    this.updateLocalStorage('taskList');
  }

  deleteTask(task) {
    delete this._taskList[task._uuid];
    this.updateLocalStorage('taskList');
  }

  deleteAllTasks() {
    this._taskList = {};
    this.updateLocalStorage('taskList');
  }

  saveProject(project) {
    console.log(project._uuid);
    this._projectList[project._uuid] = project;
    console.log(this._projectList);
    this.updateLocalStorage('projectList');
  }

  deleteProject(project) {
    delete this._projectList[project._uuid];
    this.updateLocalStorage('projectList');
  }

  deleteAllProjects() {
    this._projectList = {};
    this.updateLocalStorage('projectList');
  }
}