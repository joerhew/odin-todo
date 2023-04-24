import generateUuid from './uuid.js';

export default class Task {
  constructor(name, description, project, dueDate, status, priority) {
    this._name = name;
    this._description = description;
    this._project = project;
    this._dueDate = dueDate;
    this._status = status;
    this._priority = priority;
    this._uuid = generateUuid();
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get description() {
    return this._description;
  }
  
  set description(value) {
    this._description = value;
  }

  get project() {
    return this._project;
  }

  set project(value) {
    this._project = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get uuid() {
    return this._uuid;
  }
}