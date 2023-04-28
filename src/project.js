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

  addTaskToProject(task, project, storage) {
    let oldProject = task._project;
    let newProject = project;

    if (oldProject === newProject) {
      return;
    } else if (oldProject !== newProject) {
      task._project = newProject;
      console.log(task);
      Object.assign(project._tasks, task);
      console.log(project);
      storage.Storage.updateLocalStorage('taskList');
      storage.Storage.updateLocalStorage('projectList');
    }
  }

  removeTask(task) {
    delete this._tasks[task.uuid];
  }

  get uuid() {
    return this._uuid;
  }
}