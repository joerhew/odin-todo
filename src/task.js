import generateUuid from './uuid.js';

export default class Task {
  constructor(name, description, dueDate, status, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.priority = priority;
    this.uuid = generateUuid();
  }

  getName() {
    return this.name;
  }

  setName(value) {
    this.name = value;
  }

  getDescription() {
    return this.description;
  }
  
  setDescription(value) {
    this.description = value;
  }

  getProject() {
    return this.project;
  }

  setProject(value) {
    this.project = value;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(value) {
    this.dueDate = value;
  }

  getStatus() {
    return this.status;
  }

  setStatus(value) {
    this.status = value;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(value) {
    this.priority = value;
  }

  getUuid() {
    return this.uuid;
  }
}