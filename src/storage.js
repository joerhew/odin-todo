//import Task from './task.js';
//import Project from './project.js';

export default class Storage {
  
  static tasks = JSON.parse(localStorage.getItem('tasks') || '{}');
  static projects = JSON.parse(localStorage.getItem('projects') || '{}');

  static updateStorage(storageName) {
    const storageKey = storageName;
    const storageObject = Storage[storageName];
    localStorage.setItem(storageKey, JSON.stringify(storageObject));
  }

  static getTasks() {
    console.log(Storage.tasks);
    return Storage.tasks;
  }

  static getProjects() {
    console.log(Storage.projects);
    return Storage.projects;
  }

  static saveTask(task) {
    Storage.tasks[task.uuid] = task;
    Storage.updateStorage('tasks');
  }

  static deleteTask(task) {
    delete Storage.tasks[task.uuid];
    Storage.updateStorage('tasks');
  }

  static deleteAllTasks() {
    Storage.tasks = {};
    Storage.updateStorage('tasks');
  }

  static saveProject(project) {
    Storage.projects[project.uuid] = project;
    Storage.updateStorage('projects');
  }

  static deleteProject(project) {
    delete Storage.projects[project.uuid];
    Storage.updateStorage('projects');
  }

  static deleteAllProjects() {
    Storage.projects = {};
    Storage.updateStorage('projects');
  }
}