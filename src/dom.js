//import Task from './task.js';
//import Project from './project.js';
//import Storage from './storage.js';

export const DOM = {
  CONTENT: document.querySelector('#content'),
  HEADER: document.createElement('div'),
  CNTR_PROJECTS: document.createElement('div'),
  CNTR_TASKS: document.createElement('div'),

  init() {
    //Add skeleton structure to page
    this.HEADER.classList.add('header');
    this.CNTR_PROJECTS.classList.add('projects');
    this.CNTR_TASKS.classList.add('tasks');
  
    this.CONTENT.appendChild(this.HEADER);
    this.CONTENT.appendChild(this.CNTR_PROJECTS);
    this.CONTENT.appendChild(this.CNTR_TASKS);
    
    //Populate header, projects list, and tasks list
    this.HEADER.innerText = 'My Task Tracker';
    this.CNTR_PROJECTS.innerText = 'This is where the projects go';
    this.CNTR_TASKS.innerText = 'This is where the tasks go';

    //Add a click handler to entire document
    document.getElementById('content').addEventListener('click', function (event) {
      console.log(event);
    })
  },

  render(list, type) {
    for (const item in list) {
      const ITEM = document.createElement('div')
      
      if (type === 'tasks') {
        ITEM.classList.add('task');
        this.CNTR_TASKS.appendChild(ITEM);
        ITEM.innerText = `${item}: ${list[item].title}`
      } else if (type === 'projects') {
        ITEM.classList.add('project');
        this.CNTR_PROJECTS.appendChild(ITEM);
        ITEM.innerText = `${item}: ${list[item].name}`
      } else {
        alert('This type is not registered.');
      }
    }
  },
}