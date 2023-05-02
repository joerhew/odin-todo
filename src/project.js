import generateUuid from './uuid.js';
import Task from './task.js'

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

  addTaskToProject(task, project) {
    let oldProject = task.getProject();
    let newProject = project;

    if (oldProject === newProject) {
      return;
    } else if (oldProject !== newProject) {
      task.project = newProject;
      Object.assign(newProject.tasks, task);
    }
  }

  removeTask(task) {
    delete this.tasks[task.uuid];
  }
}