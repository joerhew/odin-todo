//import Task from './task.js';
//import Project from './project.js';
//import Storage from './storage.js';

export const DOM = {
  CONTENT: document.querySelector('#content'),
  HEADER: document.createElement('div'),
  
  CNTR_PROJECTS: document.createElement('div'),
  BTN_NEW_PROJECT: document.createElement('button'),
  CURRENT_PROJECTS: document.createElement('div'),
  
  CNTR_TASKS: document.createElement('div'),
  BTN_NEW_TASK: document.createElement('button'),
  CURRENT_TASKS: document.createElement('div'),

  MODAL: document.createElement('section'),
  OVERLAY: document.createElement('div'),
  FORM_NEW_PROJECT: document.createElement('form'),
  FORM_NEW_TASK: document.createElement('form'),

  init() {
    //Add skeleton structure to page
    this.HEADER.classList.add('header');
    this.CNTR_PROJECTS.classList.add('container');
    this.CURRENT_PROJECTS.classList.add('current-projects');
    this.CNTR_TASKS.classList.add('container');
    this.CURRENT_TASKS.classList.add('current-tasks');

    this.BTN_NEW_PROJECT.id = 'btn_new_project';
    this.BTN_NEW_TASK.id = 'btn_new_task';

    this.MODAL.classList.add('modal', 'hidden');
    this.OVERLAY.classList.add('overlay', 'hidden');
    this.FORM_NEW_PROJECT.classList.add('form_new_project', 'hidden');
    this.FORM_NEW_TASK.classList.add('form_new_task', );
    
    //Populate header, projects list, and tasks list
    this.HEADER.innerText = 'My Task Tracker!';
    this.CURRENT_PROJECTS.innerText = 'This is where the projects go';
    this.CURRENT_TASKS.innerText = 'This is where the tasks go';
    this.BTN_NEW_PROJECT.innerText = "Add Project";
  
    this.BTN_NEW_TASK.innerText = "Add Task";
    this.FORM_NEW_PROJECT.innerText = "Project form goes here";
    this.FORM_NEW_TASK.innerText = "Task form goes here";

    //Append
    this.CONTENT.appendChild(this.HEADER);
    this.CONTENT.appendChild(this.MODAL);
    this.CONTENT.appendChild(this.OVERLAY);
    this.CONTENT.appendChild(this.CNTR_PROJECTS);
    this.CNTR_PROJECTS.appendChild(this.BTN_NEW_PROJECT);
    this.CNTR_PROJECTS.appendChild(this.CURRENT_PROJECTS);
    this.CONTENT.appendChild(this.CNTR_TASKS);
    this.CNTR_TASKS.appendChild(this.BTN_NEW_TASK);
    this.CNTR_TASKS.appendChild(this.CURRENT_TASKS);
    this.MODAL.appendChild(this.FORM_NEW_TASK);
    this.MODAL.appendChild(this.FORM_NEW_PROJECT);

    //Add a click handler to entire document
    document.getElementById('content').addEventListener('click', (event) => {
      const targetElement = event.target;

      if (targetElement.classList.contains('header')) {
        console.log("You clicked on the header!")
      } else if (targetElement.id === 'btn_new_project') {
        this.toggleModal('project')
      } else if (targetElement.id === 'btn_new_task') {
        this.toggleModal('task')
      } else if (targetElement.classList.contains('modal')) {
        this.toggleModal();
      }
    })
  },

  render(list, type) {
    for (const item in list) {
      const ITEM = document.createElement('div')
      
      if (type === 'task') {
        this.CNTR_TASKS.innerHTML = '';
        ITEM.classList.add('task');
        this.CNTR_TASKS.appendChild(ITEM);
        ITEM.innerText = `${item}: ${list[item].title}`
      } else if (type === 'project') {
        this.CNTR_PROJECTS.innerHTML = '';
        ITEM.classList.add('project');
        this.CNTR_PROJECTS.appendChild(ITEM);
        ITEM.innerText = `${item}: ${list[item].name}`
      } else {
        alert('This type is not registered.');
      }
    }
  },

  toggleModal(type) {
    this.MODAL.classList.toggle('hidden');
    this.OVERLAY.classList.toggle('hidden');
  
    // Hide all forms first
    this.FORM_NEW_TASK.classList.add('hidden');
    this.FORM_NEW_PROJECT.classList.add('hidden');
  
    // Show the form based on the type parameter
    if (type === 'task') {
      this.FORM_NEW_TASK.classList.remove('hidden');
    } else if (type === 'project') {
      this.FORM_NEW_PROJECT.classList.remove('hidden');
    }
  },  
}