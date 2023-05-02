import generateUuid from './uuid.js';

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = {};
    this.uuid = generateUuid();
  }

  getName() {
    return this.name;
  }

  getUuid() {
    return this.uuid;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks[task.uuid] = task;
  }

  removeTask(task) {
    delete this.tasks[task.uuid];
  }
}