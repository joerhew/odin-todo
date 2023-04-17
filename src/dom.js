//import Task from './task.js';
import Project from './project.js';
import Storage from './storage.js';

export const DOM = {
  STORAGE: null,

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
    //Create an instance of local storage
    this.STORAGE = new Storage();

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
    this.FORM_NEW_TASK.classList.add('form_new_task', 'hidden');
    
    //Populate header, projects list, and tasks list
    this.HEADER.innerText = 'My Task Tracker!';
    this.CURRENT_PROJECTS.innerText = this.STORAGE.projectList;
    
    //Create a function to display existing projects
    console.log(this.STORAGE.projectList);

    this.CURRENT_TASKS.innerText = 'This is where the tasks go';
    this.BTN_NEW_PROJECT.innerText = "Add Project";
  
    this.BTN_NEW_TASK.innerText = "Add Task";

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
      } else if (targetElement.classList.contains('btn_cancel')) {
        this.toggleModal();
      } else if (targetElement.id === 'btn_add_new_project') {
        //create new project
      }
    })
  },

  renderList(list, type) {
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

      //Generate a form to add a new project
      this.FORM_NEW_PROJECT.innerHTML = '';
      
      let InputProjectName = document.createElement('input');
      let LabelProjectName = document.createElement('label');
      let buttonAdd = document.createElement('button');
      let buttonCancel = document.createElement('button');

      InputProjectName.type = 'text';
      InputProjectName.id = 'project_name';
      InputProjectName.required =  true;
      LabelProjectName.htmlFor = 'project_name';
      LabelProjectName.innerText = "Project Name";
      
      buttonAdd.id = 'btn_add_new_project';
      buttonAdd.type = 'submit';
      buttonCancel.classList.add('btn_cancel');
      buttonCancel.type = 'button';
      buttonAdd.innerText = 'Add';
      buttonCancel.innerText = 'Cancel';

      this.FORM_NEW_PROJECT.appendChild(LabelProjectName);
      this.FORM_NEW_PROJECT.appendChild(InputProjectName);
      this.FORM_NEW_PROJECT.appendChild(buttonAdd);
      this.FORM_NEW_PROJECT.appendChild(buttonCancel);

      this.FORM_NEW_PROJECT.addEventListener('submit', (event) => {
        const PROJECT_NAME = InputProjectName.value;
        const NEW_PROJECT = new Project(PROJECT_NAME);
        
        event.preventDefault();
        this.STORAGE.saveProject(NEW_PROJECT);
        this.toggleModal();
      })
    }
  },
  
  
}