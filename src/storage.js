//import Task from './task.js';
//import Project from './project.js';

export default class Storage {
  
  static _taskList = JSON.parse(localStorage.getItem('taskList') || '{}');
  static _projectList = JSON.parse(localStorage.getItem('projectList') || '{}');

  static get taskList() {
    return this._taskList;
  }

  static get projectList() {
    return this._projectList;
  }

  static updateLocalStorage(storageName) {
    const storageKey = storageName;
    const storageObject = this[storageName];
    localStorage.setItem(storageKey, JSON.stringify(storageObject));
  }

  static saveTask(task) {
    this._taskList[task._uuid] = task;
    this.updateLocalStorage('taskList');
  }

  static deleteTask(task) {
    delete this._taskList[task._uuid];
    this.updateLocalStorage('taskList');
  }

  static deleteAllTasks() {
    this._taskList = {};
    this.updateLocalStorage('taskList');
  }

  static saveProject(project) {
    this._projectList[project._uuid] = project;
    this.updateLocalStorage('projectList');
  }

  static deleteProject(project) {
    delete this._projectList[project._uuid];
    this.updateLocalStorage('projectList');
  }

  static deleteAllProjects() {
    this._projectList = {};
    this.updateLocalStorage('projectList');
  }
}