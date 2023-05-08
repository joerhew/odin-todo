//import Storage from './storage.js';
import Project from './project.js';
import Task from './task.js';

export default class List {
  static projects = {};
  static tasks = {};

  static setProjects(projectList) {
    let storageProjectList = projectList;
    Object.keys(storageProjectList)
      .forEach(key => {
        console.log(storageProjectList[key]);
        Object.assign(this.projects, storageProjectList[key]);
        console.log(List.projects);
      });
  }

  static setTasks(taskList) {
    Object.assign(this.tasks, taskList)
  }

  static saveProject(project) {
    this.projects[project.uuid] = project;
  }

  static saveTask(task) {
    this.tasks[task.uuid] = task;
  }

  static addTaskToProject(task, project) {
    let oldProject = task.project;
    let newProject = project;

    task.setProject(newProject);
    newProject.addTask(task);
    console.log(newProject);
    oldProject.removeTask(task);
    console.log(oldProject);
    
  }

  static deleteProject(project) {
    delete this.projects[project.uuid]
  }

  static deleteTask(task) {
    delete this.tasks[task.uuid]
  }

  static findProject(projectUuid) {
    return this.projects[projectUuid]
  }

  static findTask(taskUuid) {
    return this.tasks[taskUuid]
  }
}