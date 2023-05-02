import Task from './task.js';
import Project from './project.js';
//import Storage from './storage.js';
import List from './list.js';
import { createElement, deleteItem, findItemWithUuid, findUuidOfHtmlItem } from './utility.js';

import IconDelete from '../assets/trash-can-outline.svg';
import IconEdit from '../assets/pencil-outline.svg';

export const DOM = {
  TASK_STATUSES: ['','To do','In progress','Completed'],
  TASK_PRIORITIES: ['','Low','Medium','High'],
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
  BTN_NEW_PROJECT: createElement('button', {
    id: 'btn-new-project',
    innerText: "Add Project",
  }),
  BTN_NEW_TASK: createElement('button', {
    id: 'btn-new-task',
    innerText: 'Add Task',
  }),

  init() {
    //Populate projects & tasks list
    this.renderProjects();
    this.renderTasks();
    //Append buttons
    this.CNTR_PROJECTS.insertBefore(this.BTN_NEW_PROJECT, this.CURRENT_PROJECTS);
    this.CNTR_TASKS.insertBefore(this.BTN_NEW_TASK, this.CURRENT_TASKS);
   //Add a click handler to entire document
    document.getElementById('content').addEventListener('click', (event) => {
      const targetElement = event.target;

      if (targetElement.id === 'header') {
        console.log("You clicked on the header!")
      } else if (targetElement.id === 'btn-new-project') {
        this.generateProjectForm();
      } else if (targetElement.id === 'btn-new-task') {
        this.generateTaskForm();
      } else if (targetElement.classList.contains('btn-cancel')) {
        this.hideModal();
      } else if (targetElement.classList.contains('btn-delete-project')) {
        let projectUuid = findUuidOfHtmlItem(targetElement, 'project');
        let projectToDelete = findItemWithUuid(projectUuid, 'project');
        deleteItem(projectToDelete, 'project');
      } else if (targetElement.classList.contains('btn-edit-project')) {
        let projectUuid = findUuidOfHtmlItem(targetElement, 'project');
        let projectToEdit = findItemWithUuid(projectUuid, 'project');
        this.generateProjectForm(projectToEdit);
      } else if (targetElement.classList.contains('existing-project-name')) {
        //Click into that project
        let projectUuid = findUuidOfHtmlItem(targetElement, 'project');
        let projectClicked = findItemWithUuid(projectUuid, 'project');
        this.updateHeader(projectClicked);
        this.navigateToProject(projectClicked);
        console.log(`You've clicked on ${projectClicked.name}`);
      } else if (targetElement.classList.contains('btn-delete-task')) {
        let taskUuid = findUuidOfHtmlItem(targetElement, 'task');
        let taskToDelete = findItemWithUuid(taskUuid, 'task');
        deleteItem(taskToDelete,'task');
      } else if (targetElement.classList.contains('btn-edit-task')) {
        let taskUuid = findUuidOfHtmlItem(targetElement, 'task');
        let taskToEdit = findItemWithUuid(taskUuid, 'task');
        this.generateTaskForm(taskToEdit);
      }
    })
  },

  navigateToProject(project) {
    console.log(project.uuid);
  },

  updateHeader(project) {
    let headerProjectDiv = createElement('div', {
      class: 'nav-block',
      appendTo: this.HEADER,
    })
    let headerProject = createElement('h1', {
      innerText: `  > ${project.name}`,
      appendTo: headerProjectDiv
    })
  },

  renderProjects() {
    this.CURRENT_PROJECTS.innerHTML = '';

    Object.values(List.projects).forEach(project => {
      console.log(project);
      
      const existingProjectDiv = createElement('div', {
        classes: ['existing-project'],
        id: project.uuid,
        appendTo: this.CURRENT_PROJECTS,
      });
      
      const existingProjectName = createElement('div', {
        classes: ['existing-project-name'],
        innerText: project.name,
        appendTo: existingProjectDiv,
      });
      
      const editIcon = createElement('Image', {
        classes: ['btn-edit-project','icon'],
        src: IconEdit,
        appendTo: existingProjectDiv,
      });

      const deleteIcon = createElement('Image', {
        src: IconDelete,
        classes: ['icon', 'btn-delete-project'],
        appendTo: existingProjectDiv,
      });
    })
  },

  renderTasks() {
    this.CURRENT_TASKS.innerHTML = '';

    Object.values(List.tasks).forEach(task => {
      
      const existingTaskDiv = createElement('div', {
        classes: ['existing-task'],
        id: task.uuid,
        appendTo: this.CURRENT_TASKS,
      });
      
      const existingTaskName = createElement('div', {
        classes: ['existing-task-name'],
        innerText: task.name,
        appendTo: existingTaskDiv,
      });

      const existingTaskDescription = createElement('div', {
        classes: ['existing-task-description'],
        innerText: task.description,
        appendTo: existingTaskDiv,
      });

      const existingTaskProject = createElement('div', {
        classes: ['existing-task-project'],
        innerText: task.project,
        appendTo: existingTaskDiv,
      });

      const existingTaskDueDate = createElement('div', {
        classes: ['existing-task-due-date'],
        innerText: task.dueDate,
        appendTo: existingTaskDiv,
      });

      const existingTaskStatus = createElement('div', {
        classes: ['existing-task-status'],
        innerText: task.status,
        appendTo: existingTaskDiv,
      });

      const existingTaskPriority = createElement('div', {
        classes: ['existing-task-priority'],
        innerText: task.priority,
        appendTo: existingTaskDiv,
      });
      
      const editIcon = createElement('Image', {
        src: IconEdit,
        classes: ['icon','btn-edit-task'],
        appendTo: existingTaskDiv,
      });

      const deleteIcon = createElement('Image', {
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
    this.showModal();
    this.MODAL.innerHTML = ''
    
    let projectForm = createElement('form', {
      id: 'project',
      attributes: {
        name: 'project'
      },
      appendTo: this.MODAL,
    });

    let divProjectName = createElement('div', {
      classes: ['form-row'],
      appendTo: projectForm,
    });
  
    let labelProjectName = createElement('label', {
      innerText: 'Project Name',
      attributes: {
        for: 'project-name'
      },
      appendTo: divProjectName,
    });

    let inputProjectName = createElement('input', {
      id: 'project-name',
      type: 'text',
      value: project ? project.name : '',
      attributes: {
        required: true,
      },
      appendTo: divProjectName,
    });

    let divFormBtns = createElement('div', {
      classes: ['form-row-btns'],
      appendTo: projectForm,
    })
    
    let buttonAction = createElement('button', {
      id: 'btn-action-project',
      type: 'submit',
      innerText: project ? 'Save' : 'Add',
      appendTo: divFormBtns,
    });

    let buttonCancel = createElement('button', {
      classes: ['btn-cancel'],
      type: 'button',
      innerText: 'Cancel',
      appendTo: divFormBtns,
    });

    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const PROJECT_NAME = inputProjectName.value;
      
      if (project) {
        project.name = PROJECT_NAME;
        List.saveProject(project);
      } else {
        const NEW_PROJECT = new Project(PROJECT_NAME);
        List.saveProject(NEW_PROJECT);
      }

      this.renderProjects();
      this.hideModal();
    })
  },

  generateTaskForm(task) {
    this.showModal();

    this.MODAL.innerHTML = ''; 

    let taskForm = createElement('form', {
      id: 'task',
      attributes: {
        name: 'task'
      },
      appendTo: this.MODAL,
    });

    let divTaskName = createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskName = createElement('label', {
      innerText: 'Name',
      attributes: {
        for: 'task-name'
      },
      appendTo: divTaskName,
    });

    let inputTaskName = createElement('input', {
      id: 'task-name',
      type: 'text',
      attributes: {
        required: true,
      },
      value: task ? task.name : '',
      appendTo: divTaskName,
    });

    let divTaskDescription = createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskDescription = createElement('label', {
      innerText: 'Description',
      attributes: {
        for: 'task-description'
      },
      appendTo: divTaskDescription,
    });

    let inputTaskDescription = createElement('textarea', {
      id: 'task-description',
      value: task ? task.description : '',
      appendTo: divTaskDescription,
    });

    let divTaskProject = createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskProject = createElement('label', {
      innerText: 'Project',
      attributes: {
        for: 'task-project'
      },
      appendTo: divTaskProject,
    });

    let inputTaskProject = createElement('select', {
      id: 'task-project',
      value: task ? task.project : '',
      attributes: {
        required: true,
      },
      appendTo: divTaskProject,
    });

    Object.values(List.projects).forEach(project => {
      createElement('option', {
        value: project.uuid,
        innerText: project.name,
        appendTo: inputTaskProject,
      })
    })

    let divTaskDueDate = createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskDueDate = createElement('label', {
      innerText: 'Due Date',
      attributes: {
        for: 'task-due-date'
      },
      appendTo: divTaskDueDate,
    });

    let inputTaskDueDate = createElement('input', {
      id: 'task-due-date',
      type: 'date',
      value: task ? task.dueDate : '',
      appendTo: divTaskDueDate,
    });

    let divTaskStatus = createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskStatus = createElement('label', {
      innerText: 'Status',
      attributes: {
        for: 'task-status'
      },
      appendTo: divTaskStatus,
    });

    let inputTaskStatus = createElement('select', {
      id: 'task-status',
      value: task ? task.status : '',
      appendTo: divTaskStatus,
    });

    this.TASK_STATUSES.forEach(status => {
      createElement('option', {
        value: status,
        innerText: status,
        appendTo: inputTaskStatus,
      })
    })

    let divTaskPriority = createElement('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskPriority = createElement('label', {
      innerText: 'Priority',
      attributes: {
        for: 'task-priority'
      },
      appendTo: divTaskPriority,
    });

    let inputTaskPriority = createElement('select', {
      id: 'task-priority',
      value: task ? task.priority : '',
      appendTo: divTaskPriority,
    });

    this.TASK_PRIORITIES.forEach(priority => {
      createElement('option', {
        value: priority,
        innerText: priority,
        appendTo: inputTaskPriority,
      })
    })

    let divFormBtns = createElement('div', {
      classes: ['form-row-btns'],
      appendTo: taskForm,
    })
    
    let buttonAdd = createElement('button', {
      id: 'btn-action-task',
      type: 'submit',
      innerText: 'Add',
      appendTo: divFormBtns,
    });

    let buttonCancel = createElement('button', {
      classes: ['btn-cancel'],
      type: 'button',
      innerText: 'Cancel',
      appendTo: divFormBtns,
    });

    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const TASK_NAME = inputTaskName.value;
      const TASK_DESCRIPTION = inputTaskDescription.value;
      const TASK_PROJECT_UUID = inputTaskProject.value;
      const TASK_DUE_DATE = inputTaskDueDate.value;
      const TASK_STATUS = inputTaskStatus.value;
      const TASK_PRIORITY = inputTaskPriority.value;
      
      if (task) {
        task.name = TASK_NAME;
        task.description = TASK_DESCRIPTION;
        Project.addTaskToProject(task, findItemWithUuid(TASK_PROJECT_UUID, 'project'))
        task.dueDate = TASK_DUE_DATE;
        task.status = TASK_STATUS;
        task.priority = TASK_PRIORITY;
        List.saveTask(task);
      } else {
        const NEW_TASK = new Task(TASK_NAME, TASK_DESCRIPTION, TASK_PROJECT_UUID, TASK_DUE_DATE, TASK_STATUS, TASK_PRIORITY);
        List.saveTask(NEW_TASK);
      }

      this.renderTasks();
      this.hideModal();
    })
  }
}