//import Task from './task.js';
//import Project from './project.js';

export default class Storage {
  
  static taskList = JSON.parse(localStorage.getItem('taskList') || '{}');
  static projectList = JSON.parse(localStorage.getItem('projectList') || '{}');

  static updateStorage(storageName) {
    const storageKey = storageName;
    const storageObject = this[storageName];
    localStorage.setItem(storageKey, JSON.stringify(storageObject));
  }

  static getTaskList() {
    return this.taskList;
  }

  static getProjectList() {
    return this.projectList;
  }

  static saveTask(task) {
    this.taskList[task.uuid] = task;
    this.updateStorage('taskList');
  }

  static deleteTask(task) {
    delete this.taskList[task.uuid];
    this.updateStorage('taskList');
  }

  static deleteAllTasks() {
    this.taskList = {};
    this.updateStorage('taskList');
  }

  static saveProject(project) {
    this.projectList[project.uuid] = project;
    this.updateStorage('projectList');
  }

  static deleteProject(project) {
    delete this.projectList[project.uuid];
    this.updateStorage('projectList');
  }

  static deleteAllProjects() {
    this.projectList = {};
    this.updateStorage('projectList');
  }
}