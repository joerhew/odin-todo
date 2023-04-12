//import Task from './task.js';
//import Project from './project.js';
//import Storage from './storage.js';

export const DOM = {
  CONTENT: document.querySelector('#content'),
  HEADER: document.createElement('div'),
  MODAL: document.createElement('section'),
  OVERLAY: document.createElement('div'),
  CNTR_PROJECTS: document.createElement('div'),
  BTN_NEW_PROJECT: document.createElement('button'),
  CNTR_TASKS: document.createElement('div'),
  BTN_NEW_TASK: document.createElement('button'),

  init() {
    //Add skeleton structure to page
    this.HEADER.classList.add('header');
    this.CNTR_PROJECTS.classList.add('projects');
    this.CNTR_TASKS.classList.add('tasks');
    this.MODAL.classList.add('modal', 'hidden');
    this.OVERLAY.classList.add('overlay', 'hidden');

    this.BTN_NEW_PROJECT.id = 'btn_new_project';
    this.BTN_NEW_TASK.id = 'btn_new_task';
    
    //Populate header, projects list, and tasks list
    this.HEADER.innerText = 'My Task Tracker!';
    this.CNTR_PROJECTS.innerText = 'This is where the projects go';
    this.CNTR_TASKS.innerText = 'This is where the tasks go';
    this.BTN_NEW_PROJECT.innerText = "Add Project";
    this.MODAL.innerText = 'This is the modal';
    this.BTN_NEW_TASK.innerText = "Add Task";

    //Append
    this.CONTENT.appendChild(this.HEADER);
    this.CONTENT.appendChild(this.MODAL);
    this.CONTENT.appendChild(this.OVERLAY);
    this.CONTENT.appendChild(this.CNTR_PROJECTS);
    this.CNTR_PROJECTS.appendChild(this.BTN_NEW_PROJECT);
    this.CONTENT.appendChild(this.CNTR_TASKS);
    this.CNTR_TASKS.appendChild(this.BTN_NEW_TASK);

    //Add a click handler to entire document
    document.getElementById('content').addEventListener('click', (event) => {
      const targetElement = event.target;

      if (targetElement.classList.contains('header')) {
        console.log("You clicked on the header!")
      } else if (targetElement.id === 'btn_new_project') {
        this.OVERLAY.classList.toggle('hidden');
      }
    })
  },

  render(list, type) {
    for (const item in list) {
      const ITEM = document.createElement('div')
      
      if (type === 'tasks') {
        this.CNTR_TASKS.innerHTML = '';
        ITEM.classList.add('task');
        this.CNTR_TASKS.appendChild(ITEM);
        ITEM.innerText = `${item}: ${list[item].title}`
      } else if (type === 'projects') {
        this.CNTR_PROJECTS.innerHTML = '';
        ITEM.classList.add('project');
        this.CNTR_PROJECTS.appendChild(ITEM);
        ITEM.innerText = `${item}: ${list[item].name}`
      } else {
        alert('This type is not registered.');
      }
    }
  },
}