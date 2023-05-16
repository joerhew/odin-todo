//import Storage from './storage.js';
import Project from './project.js';
import Task from './task.js';
import Storage from './storage.js';
import { findTaskInProjects } from './utility.js';

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

  static getTasks() {
    let storageTasks = Storage.getTasks();
    let numStorageTasks = Object.keys(storageTasks).length;
    if (numStorageTasks > 0) {
      Object.values(storageTasks).forEach(task => {
        let newTask = Object.assign(new Task(), task);
        List.saveTask(newTask);
      })
    } else if (numStorageTasks === 0) {
      this.tasks = {};
    }
    return this.tasks;
  }

  static getProjects() {
    let storageProjects = Storage.getProjects();
    let numStorageProjects = Object.keys(storageProjects).length;
    Object.values(storageProjects).forEach(project => {
      let newProject = Object.assign(new Project(), project);
      List.saveProject(newProject);
    })
    return this.projects;
  }

  static findTask(uuid) {
    return this.getTasks()[uuid];
  }

  static findProject(uuid) {
    return this.getProjects()[uuid];
  }

  static setTasks(taskList) {
    Object.assign(this.tasks, taskList)
  }

  static saveProject(project) {
    this.projects[project.uuid] = project;
    Storage.saveProject(project);
  }

  static saveTask(task) {
    this.tasks[task.uuid] = task;
    Storage.saveTask(task);
  }

  static addTaskToProject(task, project) {
    //Search for the task's UUID in projects' tasks
    let oldProject;

    if (findTaskInProjects(task.uuid)) {
      oldProject = findTaskInProjects(task.uuid);
      oldProject.removeTask(task);
      Storage.saveProject(oldProject);
    }
    
    let newProject = project;

    newProject.addTask(task);
    console.log(newProject);
    console.log(oldProject);

    Storage.saveProject(newProject);
    
  }

  static deleteProject(project) {
    Storage.deleteProject(project);
    delete this.projects[project.uuid];
  }

  static deleteTask(task) {
    Storage.deleteTask(task);
    delete this.tasks[task.uuid];
  }
}