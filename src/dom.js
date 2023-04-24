import Task from './task.js';
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
  MODAL: document.querySelector('#modal'),
  OVERLAY: document.querySelector('#overlay'),
  //create buttons for adding new projects and tasks
  BTN_NEW_PROJECT: document.createElement('button'),
  BTN_NEW_TASK: document.createElement('button'),
  TASK_STATUSES: ['To do','In progress','Completed'],
  TASK_PRIORITIES: ['Low','Medium','High'],
  
  createElement(type, options = {}) {
    let element;

    if (type === 'Image') {
      element = new Image();
    } else {
      element = document.createElement(type);
    }
  
    if (options.value && type === 'input') { element.defaultValue = options.value}
    if (options.id) { element.id = options.id }
    if (options.classes) { element.classList.add(...options.classes) }
    if (options.name) { element.name = options.name }
    if (options.type) { element.type = options.type }
    if (options.innerText) { element.innerText = options.innerText }
    if (options.src) { element.src = options.src }
    if (options.appendTo) { options.appendTo.appendChild(element) }
    if (options.insertBefore && options.insertBefore.parentElement) { options.insertBefore.parentElement.insertBefore(element, options.insertBefore); }

    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        element.setAttribute(key, value);
      }
    }
  
    return element;
  },

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  init() {
    //Create an instance of local storage
    this.STORAGE = new Storage();
    //Populate projects list
    this.renderProjects();
    //Populate tasks list
    this.renderTasks();
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
        this.showModal();
        this.generateProjectForm();
      } else if (targetElement.id === 'btn-new-task') {
        this.showModal();
        this.generateTaskForm();
      } else if (targetElement.classList.contains('btn-cancel')) {
        this.hideModal();
      } else if (targetElement.classList.contains('btn-delete-project')) {
        let projectToDelete = this.findItem(targetElement, 'project');
        this.deleteItem(projectToDelete, 'project');
      } else if (targetElement.classList.contains('btn-edit-project')) {
        let projectToEdit = this.findItem(targetElement, 'project');
        this.showModal();
        this.generateProjectForm(projectToEdit);
      } else if (targetElement.classList.contains('btn-delete-task')) {
        let taskToDelete = this.findItem(targetElement, 'task');
        this.deleteItem(taskToDelete,'task');
      } else if (targetElement.classList.contains('btn-edit-task')) {
        let taskToEdit = this.findItem(targetElement, 'task');
        console.log(taskToEdit);
        this.showModal();
        this.generateTaskForm(taskToEdit);
      }
    })
  },

  findItem(item, itemType) {
    const UUID_OF_ITEM = item.closest('.existing-' + itemType).id;
    return this.STORAGE[itemType + 'List'][UUID_OF_ITEM];
  },
  
  deleteItem(target, itemType) {
    this.STORAGE['delete' + this.capitalizeFirstLetter(itemType)](target);
    (itemType === 'task') ? this.renderTasks() : this.renderProjects();
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
        classes: ['btn-edit-project','icon'],
        src: IconEdit,
        appendTo: existingProjectDiv,
      });

      const deleteIcon = this.createElement('Image', {
        src: IconDelete,
        classes: ['icon', 'btn-delete-project'],
        appendTo: existingProjectDiv,
      });
    })
  },

  renderTasks() {
    this.CURRENT_TASKS.innerHTML = '';

    Object.values(this.STORAGE.taskList).forEach(task => {
      
      const existingTaskDiv = this.createElement('div', {
        classes: ['existing-task'],
        id: task._uuid,
        appendTo: this.CURRENT_TASKS,
      });
      
      const existingTaskName = this.createElement('div', {
        classes: ['existing-task-name'],
        innerText: task._name,
        appendTo: existingTaskDiv,
      });

      const existingTaskDescription = this.createElement('div', {
        classes: ['existing-task-description'],
        innerText: task._description,
        appendTo: existingTaskDiv,
      });

      const existingTaskProject = this.createElement('div', {
        classes: ['existing-task-project'],
        innerText: task._project,
        appendTo: existingTaskDiv,
      });

      const existingTaskDueDate = this.createElement('div', {
        classes: ['existing-task-due-date'],
        innerText: task._dueDate,
        appendTo: existingTaskDiv,
      });

      const existingTaskStatus = this.createElement('div', {
        classes: ['existing-task-status'],
        innerText: task._status,
        appendTo: existingTaskDiv,
      });

      const existingTaskPriority = this.createElement('div', {
        classes: ['existing-task-priority'],
        innerText: task._priority,
        appendTo: existingTaskDiv,
      });
      
      const editIcon = this.createElement('Image', {
        src: IconEdit,
        classes: ['icon','btn-edit-task'],
        appendTo: existingTaskDiv,
      });

      const deleteIcon = this.createElement('Image', {
        src: IconDelete,
        classes: ['icon','btn-delete-task'],
        appendTo: existingTaskDiv,
      });
    })
  },

  showModal() {
    this.MODAL.classList.remove('hidden');
    this.OVERLAY.classList.remove('hidden');
  },

  hideModal() {
    this.MODAL.classList.add('hidden');
    this.OVERLAY.classList.add('hidden');
  },

  generateProjectForm(project) {
    console.log(project);
    this.MODAL.innerHTML = ''
    
    let projectForm = this.createElement('form', {
      id: 'project',
      attributes: {
        name: 'project'
      },
      appendTo: this.MODAL,
    });

    let divProjectName = this.createElement('div', {
      classes: ['form-row'],
      appendTo: projectForm,
    });
  
    let labelProjectName = this.createElement('label', {
      innerText: 'Project Name',
      attributes: {
        for: 'project-name'
      },
      appendTo: divProjectName,
    });

    let inputProjectName = this.createElement('input', {
      id: 'project-name',
      type: 'text',
      value: project ? project._name : '',
      attributes: {
        required: true,
      },
      appendTo: divProjectName,
    });

    let divFormBtns = this.createElement('div', {
      classes: ['form-row-btns'],
      appendTo: projectForm,
    })
    
    let buttonAction = this.createElement('button', {
      id: 'btn-action-project',
      type: 'submit',
      innerText: project ? 'Save' : 'Add',
      appendTo: divFormBtns,
    });

    let buttonCancel = this.createElement('button', {
      classes: ['btn-cancel'],
      type: 'button',
      innerText: 'Cancel',
      appendTo: divFormBtns,
    });

    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const PROJECT_NAME = inputProjectName.value;
      
      if (project) {
        project._name = PROJECT_NAME;
        this.STORAGE.saveProject(project);
      } else {
        const NEW_PROJECT = new Project(PROJECT_NAME);
        this.STORAGE.saveProject(NEW_PROJECT);
      }

      this.renderProjects();
      this.hideModal();
    })
  },

  generateTaskForm(task) {
    this.MODAL.innerHTML = ''; 

    let taskForm = this.createElement('form', {
      id: 'task',
      attributes: {
        name: 'task'
      },
      appendTo: this.MODAL,
    });

    let divTaskName = this.createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskName = this.createElement('label', {
      innerText: 'Name',
      attributes: {
        for: 'task-name'
      },
      appendTo: divTaskName,
    });

    let inputTaskName = this.createElement('input', {
      id: 'task-name',
      type: 'text',
      attributes: {
        required: true,
      },
      value: task ? task._name : '',
      appendTo: divTaskName,
    });

    let divTaskDescription = this.createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskDescription = this.createElement('label', {
      innerText: 'Description',
      attributes: {
        for: 'task-description'
      },
      appendTo: divTaskDescription,
    });

    let inputTaskDescription = this.createElement('textarea', {
      id: 'task-description',
      value: task ? task._description : '',
      appendTo: divTaskDescription,
    });

    let divTaskProject = this.createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskProject = this.createElement('label', {
      innerText: 'Project',
      attributes: {
        for: 'task-project'
      },
      appendTo: divTaskProject,
    });

    let inputTaskProject = this.createElement('select', {
      id: 'task-project',
      value: task ? task._project : '',
      attributes: {
        required: true,
      },
      appendTo: divTaskProject,
    });

    Object.values(this.STORAGE.projectList).forEach(project => {
      this.createElement('option', {
        value: project._uuid,
        innerText: project._name,
        appendTo: inputTaskProject,
      })
    })

    let divTaskDueDate = this.createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskDueDate = this.createElement('label', {
      innerText: 'Due Date',
      attributes: {
        for: 'task-due-date'
      },
      appendTo: divTaskDueDate,
    });

    let inputTaskDueDate = this.createElement('input', {
      id: 'task-due-date',
      type: 'date',
      value: task ? task._dueDate : '',
      appendTo: divTaskDueDate,
    });

    let divTaskStatus = this.createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskStatus = this.createElement('label', {
      innerText: 'Status',
      attributes: {
        for: 'task-status'
      },
      appendTo: divTaskStatus,
    });

    let inputTaskStatus = this.createElement('select', {
      id: 'task-status',
      value: task ? task._status : '',
      appendTo: divTaskStatus,
    });

    this.TASK_STATUSES.forEach(status => {
      this.createElement('option', {
        value: status,
        innerText: status,
        appendTo: inputTaskStatus,
      })
    })

    let divTaskPriority = this.createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskPriority = this.createElement('label', {
      innerText: 'Priority',
      attributes: {
        for: 'task-priority'
      },
      appendTo: divTaskPriority,
    });

    let inputTaskPriority = this.createElement('select', {
      id: 'task-priority',
      value: task ? task._priority : '',
      appendTo: divTaskPriority,
    });

    this.TASK_PRIORITIES.forEach(priority => {
      this.createElement('option', {
        value: priority,
        innerText: priority,
        appendTo: inputTaskPriority,
      })
    })

    let divFormBtns = this.createElement('div', {
      classes: ['form-row-btns'],
      appendTo: taskForm,
    })
    
    let buttonAdd = this.createElement('button', {
      id: 'btn-action-task',
      type: 'submit',
      innerText: 'Add',
      appendTo: divFormBtns,
    });

    let buttonCancel = this.createElement('button', {
      classes: ['btn-cancel'],
      type: 'button',
      innerText: 'Cancel',
      appendTo: divFormBtns,
    });

    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const TASK_NAME = inputTaskName.value;
      const TASK_DESCRIPTION = inputTaskDescription.value;
      const TASK_PROJECT = inputTaskProject.value;
      const TASK_DUE_DATE = inputTaskDueDate.value;
      const TASK_STATUS = inputTaskStatus.value;
      const TASK_PRIORITY = inputTaskPriority.value;
      
      if (task) {
        task._name = TASK_NAME;
        task._description = TASK_DESCRIPTION;
        task._project = TASK_PROJECT;
        task._dueDate = TASK_DUE_DATE;
        task._status = TASK_STATUS;
        task._priority = TASK_PRIORITY;
        this.STORAGE.saveTask(task);
      } else {
        const NEW_TASK = new Task(TASK_NAME, TASK_DESCRIPTION, TASK_PROJECT, TASK_DUE_DATE, TASK_STATUS, TASK_PRIORITY);
        this.STORAGE.saveTask(NEW_TASK);
      }

      this.renderTasks();
      this.hideModal();
    })
  }
}