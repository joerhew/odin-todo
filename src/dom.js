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
      } else if (targetElement.id === 'btn-add-new-project') {
        //create new project
      } else if (targetElement.id === 'btn-delete-project') {
        const PROJECT_UUID_TO_DELETE = targetElement.closest('.existing-project').id;
        console.log(PROJECT_UUID_TO_DELETE);
        const PROJECT_TO_DELETE = this.STORAGE.projectList[PROJECT_UUID_TO_DELETE];
        console.log(PROJECT_TO_DELETE)
        console.log(this.STORAGE.projectList);
        this.STORAGE.deleteProject(PROJECT_TO_DELETE);
        console.log(this.STORAGE.projectList);
        this.renderProjects();
        //Find the project object that matches the UUID of PROJECT_UUID_TO_DELETE
        //Delete the project
      }
    })
  },

  renderProjects() {
    this.CURRENT_PROJECTS.innerHTML = '';

    Object.values(this.STORAGE.projectList).forEach(project => {
      const existingProjectDiv = document.createElement('div');
      const existingProjectName = document.createElement('div');
      
      const deleteIcon = new Image();
      deleteIcon.src = IconDelete;
      deleteIcon.id = 'btn-delete-project';
      deleteIcon.classList.add('icon');

      const editIcon = new Image();
      editIcon.src = IconEdit;
      editIcon.id = 'btn-edit-project';
      editIcon.classList.add('icon');

      existingProjectDiv.classList.add('existing-project');
      existingProjectDiv.id = project._uuid;
      existingProjectName.classList.add('existing-project-name');
      existingProjectName.innerText = project._name;
      existingProjectDiv.appendChild(existingProjectName);
      existingProjectDiv.appendChild(editIcon);
      existingProjectDiv.appendChild(deleteIcon);
      this.CURRENT_PROJECTS.appendChild(existingProjectDiv);
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
    this.FORM_TASK.classList.add('hidden');
    this.FORM_PROJECT.classList.add('hidden');
  
    // Show the form based on the type parameter
    if (type === 'task') {
      this.FORM_TASK.classList.remove('hidden');
    } else if (type === 'project') {
      this.FORM_PROJECT.classList.remove('hidden');

      //Generate a form to add a new project
      this.FORM_PROJECT.innerHTML = '';
      
      let InputProjectName = document.createElement('input');
      let LabelProjectName = document.createElement('label');
      let buttonAdd = document.createElement('button');
      let buttonCancel = document.createElement('button');

      InputProjectName.type = 'text';
      InputProjectName.id = 'project_name';
      InputProjectName.required =  true;
      LabelProjectName.htmlFor = 'project_name';
      LabelProjectName.innerText = "Project Name";
      
      buttonAdd.id = 'btn-add-new-project';
      buttonAdd.type = 'submit';
      buttonCancel.classList.add('btn-cancel');
      buttonCancel.type = 'button';
      buttonAdd.innerText = 'Add';
      buttonCancel.innerText = 'Cancel';

      this.FORM_PROJECT.appendChild(LabelProjectName);
      this.FORM_PROJECT.appendChild(InputProjectName);
      this.FORM_PROJECT.appendChild(buttonAdd);
      this.FORM_PROJECT.appendChild(buttonCancel);

      this.FORM_PROJECT.addEventListener('submit', (event) => {
        const PROJECT_NAME = InputProjectName.value;
        const NEW_PROJECT = new Project(PROJECT_NAME);
        
        event.preventDefault();
        this.STORAGE.saveProject(NEW_PROJECT);
        this.toggleModal();
      })
    }
  },
  
  
}