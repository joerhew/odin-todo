import Storage from './storage.js';
import generateUuid from './uuid.js';

export default class Project {
  constructor(name) {
    this._name = name;
    this._tasks = {};
    this._uuid = generateUuid();
  }

  get name() {
    return this._name;
  }

  get tasks() {
    return this._tasks;
  }

  addTask(task) {
    let projectUuids = Object.keys(Storage.projectList);
    
    if (projectUuids.forEach((uuid) => uuid === task.uuid)) {
      console.log("This task belongs to another project. Remove from that project first.");
      return;
    }
    
    this._tasks[task.uuid] = task;
  }

  removeTask(task) {
    delete this._tasks[task.uuid];
  }

  get uuid() {
    return this._uuid;
  }
}