//import Task from './task.js';
import Project from './project.js';
import Storage from './storage.js';

import IconDelete from '../assets/trash-can-outline.svg';
import IconEdit from '../assets/pencil-outline.svg';

export const DOM = {
  //Initialize local storage
  STORAGE: null,
  //querySelectors
  CONTENT: document.querySelector('#content'),
  HEADER: document.querySelector('#header'),
  CNTR_PROJECTS: document.querySelector('#cntr-projects'),
  CURRENT_PROJECTS: document.querySelector('.current-projects'),
  CNTR_TASKS: document.querySelector('#cntr-tasks'),
  CURRENT_TASKS: document.querySelector('.current-tasks'),
  FORM_PROJECT: document.querySelector("form[name='project']"),
  FORM_TASK: document.querySelector("form[name='task']"),
  MODAL: document.querySelector('#modal'),
  OVERLAY: document.querySelector('#overlay'),
  //create buttons for adding new projects and tasks
  BTN_NEW_PROJECT: document.createElement('button'),
  BTN_NEW_TASK: document.createElement('button'),
  
  createElement(type, options = {}) {
    let element;

    if (type === 'Image') {
      element = new Image();
    } else {
      element = document.createElement(type);
    }
  
    if (options.id) {
      element.id = options.id;
    }
  
    if (options.classes) {
      element.classList.add(...options.classes);
    }
  
    if (options.name) {
      element.name = options.name;
    }
  
    if (options.type) {
      element.type = options.type;
    }
  
    if (options.innerText) {
      element.innerText = options.innerText;
    }

    if (options.src) {
      element.src = options.src;
    }
  
    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        element.setAttribute(key, value);
      }
    }

    if (options.appendTo) {
      options.appendTo.appendChild(element);
    }
  
    if (options.insertBefore && options.insertBefore.parentElement) {
      options.insertBefore.parentElement.insertBefore(element, options.insertBefore);
    }
  
    return element;
  },

  init() {
    //Create an instance of local storage
    this.STORAGE = new Storage();
    
    //Populate projects list
    this.renderProjects();
    
    //Populate tasks list
    //TBC

    //Generate and append buttons
    this.BTN_NEW_PROJECT.innerText = "Add Project";  
    this.BTN_NEW_TASK.innerText = "Add Task";
    this.BTN_NEW_PROJECT.id = 'btn-new-project';
    this.BTN_NEW_TASK.id = 'btn-new-task';

    this.CNTR_PROJECTS.insertBefore(this.BTN_NEW_PROJECT, this.CURRENT_PROJECTS);
    this.CNTR_TASKS.insertBefore(this.BTN_NEW_TASK, this.CURRENT_TASKS);

   //Add a click handler to entire document
    document.getElementById('content').addEventListener('click', (event) => {
      const targetElement = event.target;

      if (targetElement.id === 'header') {
        console.log("You clicked on the header!")
      } else if (targetElement.id === 'btn-new-project') {
        this.toggleModal('project')
      } else if (targetElement.id === 'btn-new-task') {
        this.toggleModal('task')
      } else if (targetElement.classList.contains('btn-cancel')) {
        this.toggleModal();
      } else if (targetElement.id === 'btn-delete-project') {
        const PROJECT_UUID_TO_DELETE = targetElement.closest('.existing-project').id;
        const PROJECT_TO_DELETE = this.STORAGE.projectList[PROJECT_UUID_TO_DELETE];

        this.STORAGE.deleteProject(PROJECT_TO_DELETE);
        this.renderProjects();
      }
    })
  },

  renderProjects() {
    this.CURRENT_PROJECTS.innerHTML = '';

    Object.values(this.STORAGE.projectList).forEach(project => {
      
      const existingProjectDiv = this.createElement('div', {
        classes: ['existing-project'],
        id: project._uuid,
        appendTo: this.CURRENT_PROJECTS,
      });
      
      const existingProjectName = this.createElement('div', {
        classes: ['existing-project-name'],
        innerText: project._name,
        appendTo: existingProjectDiv,
      });
      
      const editIcon = this.createElement('Image', {
        id: 'btn-edit-project',
        src: IconEdit,
        classes: ['icon'],
        appendTo: existingProjectDiv,
      });

      const deleteIcon = this.createElement('Image', {
        id: 'btn-delete-project',
        src: IconDelete,
        classes: ['icon'],
        appendTo: existingProjectDiv,
      });
    })
  },

  toggleModal(type) {
    this.MODAL.classList.toggle('hidden');
    this.OVERLAY.classList.toggle('hidden');
  
    // Hide all forms first
    this.FORM_TASK.classList.add('hidden');
    this.FORM_PROJECT.classList.add('hidden');
  
    // Show the form based on the type parameter
    if (type === 'task') {
      this.FORM_TASK.classList.remove('hidden');
    } else if (type === 'project') {
      this.FORM_PROJECT.classList.remove('hidden');

      //Generate a form to add a new project
      this.generateNewProjectForm();
    }
  },

  generateNewProjectForm() {
    this.FORM_PROJECT.innerHTML = '';

      let LabelProjectName = this.createElement('label', {
        innerText: 'Project Name',
        attributes: {
          for: 'project-name'
        },
        appendTo: this.FORM_PROJECT,
      });

      let InputProjectName = this.createElement('input', {
        id: 'project-name',
        type: 'text',
        attributes: {
          required: true,
        },
        appendTo: this.FORM_PROJECT,
      });
      
      let buttonAdd = this.createElement('button', {
        id: 'btn-add-new-project',
        type: 'submit',
        innerText: 'Add',
        appendTo: this.FORM_PROJECT,
      });

      let buttonCancel = this.createElement('button', {
        classes: ['btn-cancel'],
        type: 'button',
        innerText: 'Cancel',
        appendTo: this.FORM_PROJECT,
      });

      this.FORM_PROJECT.addEventListener('submit', (event) => {
        const PROJECT_NAME = InputProjectName.value;
        const NEW_PROJECT = new Project(PROJECT_NAME);
        
        event.preventDefault();
        this.STORAGE.saveProject(NEW_PROJECT);
        this.renderProjects();
        this.toggleModal();
      })
  }
  
}