import Task from './task.js';
import Project from './project.js';
//import Storage from './storage.js';
import List from './list.js';
import { createElement, deleteItem, findItemWithUuid, findUuidOfHtmlItem, truncateString, findTaskInProjects } from './utility.js';

import IconDelete from '../assets/trash-can-outline.svg';
import IconEdit from '../assets/pencil-outline.svg';

export const DOM = {
  TASK_STATUSES: ['','To do','In progress','Completed'],
  TASK_PRIORITIES: ['','Low','Medium','High'],
  SELECTED_PROJECT: null,
  //querySelectors
  CONTENT: document.querySelector('#content'),
  HEADER: document.querySelector('#header'),
  CNTR_PROJECTS: document.querySelector('#cntr-projects'),
  ADD_PROJECT_DIV: document.querySelector('.div-add-project'),
  CURRENT_PROJECTS: document.querySelector('.current-projects'),
  CNTR_TASKS: document.querySelector('#cntr-tasks'),
  ADD_TASK_DIV: document.querySelector('.div-add-task'),
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
    function removeDuplicateUnassignedProjects() {
      const projects = List.getProjects();
      console.log(projects)
      const unassignedProjects = Object.values(projects).filter(project => {
        console.log(project.name); // add this line
        return project.name === 'Unassigned';
      });
      console.log(unassignedProjects);
      if (unassignedProjects.length > 1) {
        unassignedProjects.slice(1).forEach(project => {
          List.deleteProject(project);
          this.renderProjects();
        });
      } else if (unassignedProjects.length === 0) {
        //Create a new project for all unassigned tasks
        const UNASSIGNED_PROJECT = new Project('Unassigned');
        List.saveProject(UNASSIGNED_PROJECT);
      }
    }
    
    removeDuplicateUnassignedProjects();

    //Populate projects & tasks list
    this.renderProjects();
    this.renderTasks();
    //Append buttons
    this.ADD_PROJECT_DIV.appendChild(this.BTN_NEW_PROJECT);
    this.ADD_TASK_DIV.appendChild(this.BTN_NEW_TASK);
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
        this.hide(this.MODAL);
        this.hide(this.OVERLAY);
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
        if (this.SELECTED_PROJECT === null) {
          this.selectProject(projectClicked);
        } else if (this.SELECTED_PROJECT.uuid === projectClicked.uuid) {
          this.unselectProject();
        } else if (this.SELECTED_PROJECT.uuid !== projectClicked.uuid) {
          this.unselectProject();
          this.selectProject(projectClicked);
        }
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

  selectProject(project) {
    this.SELECTED_PROJECT = project;
    let selectedProjectContainer = document.querySelector(`#${project.uuid}`);
    
    selectedProjectContainer.classList.toggle('selected-project')
    this.updateHeader(project);
    this.renderTasks(project);
    this.updateTaskButton(project);
  },

  unselectProject() {
    let previousProjectContainer = document.querySelector(`#${this.SELECTED_PROJECT.uuid}`);
    this.SELECTED_PROJECT = null;

    previousProjectContainer.classList.toggle('selected-project')
    this.updateHeader();
    this.renderTasks();
    this.updateTaskButton();
  },

  updateTaskButton(project) {
    if (project) {
      this.BTN_NEW_TASK.innerText = `Add Task to ${project.name}`;
    } else {
      this.BTN_NEW_TASK.innerText = 'Add Task';
    }
  },

  updateHeader(project) {
    if (project) {
      let previousHeader = document.querySelector('.nav-block');
      previousHeader.remove();

      let headerProjectDiv = createElement('div', {
        classes: ['nav-block-project'],
        appendTo: this.HEADER,
      })
      createElement('h1', {
        innerText: `${project.name}`,
        appendTo: headerProjectDiv
      })
    } else {
      let previousProjectContainer = document.querySelector('.nav-block-project');
      previousProjectContainer.remove();

      let headerDefaultDiv = createElement('div', {
        classes: ['nav-block'],
        appendTo: this.HEADER,
      })
      createElement('h1', {
        innerText: 'All Tasks',
        appendTo: headerDefaultDiv
      })
    }
  },

  renderProjects() {
    this.CURRENT_PROJECTS.innerHTML = '';

    Object.values(List.getProjects()).forEach(project => {
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

      const existingProjectNumTasks = createElement('div', {
        classes: ['existing-project-num-tasks'],
        innerText: `Tasks: ${Object.keys(project.tasks).length}`,
        appendTo: existingProjectDiv,
      });
      
      const existingProjectButtons = createElement('div', {
        classes: ['existing-project-buttons'],
        appendTo: existingProjectDiv,
      });

      const editIcon = createElement('Image', {
        classes: ['btn-edit-project','icon'],
        src: IconEdit,
        appendTo: existingProjectButtons,
      });

      const deleteIcon = createElement('Image', {
        src: IconDelete,
        classes: ['icon', 'btn-delete-project'],
        appendTo: existingProjectButtons,
      });
    })
  },

  renderTasks(project) {
    this.CURRENT_TASKS.innerHTML = '';
    console.log(List.getTasks());
    let tasksToBeRendered = project ? project.tasks : List.getTasks();

    
    Object.values(tasksToBeRendered).forEach(task => {

      const projects = Object.values(List.getProjects());
      // Find the project where the project's tasks object has a key matching the task's UUID
      const existingTaskProjectObj = projects.find(project => Object.keys(project.tasks).includes(task.uuid));
      // If we found such a project, use its name as the innerText, otherwise use an empty string
      const existingTaskProjectName = existingTaskProjectObj ? existingTaskProjectObj.name : '';
      
      const existingTaskDiv = createElement('div', {
        classes: ['existing-task'],
        id: task.uuid,
        appendTo: this.CURRENT_TASKS,
      });

      const existingTaskDetails = createElement('div', {
        classes: ['existing-task-details'],
        appendTo: existingTaskDiv,
      })
      
      const existingTaskName = createElement('div', {
        classes: ['existing-task-name'],
        innerText: task.name,
        appendTo: existingTaskDetails,
      });

      const existingTaskDescription = createElement('div', {
        classes: ['existing-task-description'],
        innerText: truncateString(task.description, 50),
        appendTo: existingTaskDetails,
      });

      const existingTaskProject = createElement('div', {
        classes: ['existing-task-project'],
        innerText: existingTaskProjectName,
        appendTo: existingTaskDetails,
      });

      const existingTaskStatus = createElement('div', {
        classes: ['existing-task-status'],
        innerText: task.status,
        appendTo: existingTaskDetails,
      });

      switch (task.priority) {
        case 'Low':
          existingTaskDiv.classList.add('low-priority');
          break;
        case 'Medium':
          existingTaskDiv.classList.add('medium-priority');
          break;
        case 'High':
          existingTaskDiv.classList.add('high-priority');
          break;
      }

      const existingTaskButtons = createElement('div', {
        classes: ['existing-task-buttons'],
        appendTo: existingTaskDiv,
      })
      
      const editIcon = createElement('Image', {
        src: IconEdit,
        classes: ['icon','btn-edit-task'],
        appendTo: existingTaskButtons,
      });

      const deleteIcon = createElement('Image', {
        src: IconDelete,
        classes: ['icon','btn-delete-task'],
        appendTo: existingTaskButtons,
      });
    })
  },

  hide(element) {
    element.classList.add('hidden');
  },

  unhide(element) {
    element.classList.remove('hidden');
  },

  generateProjectForm(project) {
    this.unhide(this.MODAL);
    this.unhide(this.OVERLAY);
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
      this.hide(this.MODAL);
      this.hide(this.OVERLAY);
    })
  },

  generateTaskForm(task) {
    this.unhide(this.MODAL);
    this.unhide(this.OVERLAY);

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
      value: task ? 'A task-project name placeholder' : '',
      disabled: this.SELECTED_PROJECT,
      attributes: {
        required: true,
      },
      appendTo: divTaskProject,
    });

    Object.values(List.getProjects()).forEach(project => {
      let taskProjectUuid;
      if (task) {
      let taskProject = findTaskInProjects(task.uuid);
      if (taskProject) {
        taskProjectUuid = taskProject.uuid;
      }
  }

      createElement('option', {
        value: project.uuid,
        innerText: project.name,
        selected: project.uuid === taskProjectUuid,
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
      innerText: task ? 'Save' : 'Add',
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
      const TASK_PROJECT = List.findProject(inputTaskProject.value);
      const TASK_DUE_DATE = inputTaskDueDate.value;
      const TASK_STATUS = inputTaskStatus.value;
      const TASK_PRIORITY = inputTaskPriority.value;
      
      if (task) {
        task.name = TASK_NAME;
        task.description = TASK_DESCRIPTION;
        List.addTaskToProject(task, TASK_PROJECT)
        task.dueDate = TASK_DUE_DATE;
        task.status = TASK_STATUS;
        task.priority = TASK_PRIORITY;
        List.saveTask(task);
      } else {
        const NEW_TASK = new Task(TASK_NAME, TASK_DESCRIPTION, TASK_DUE_DATE, TASK_STATUS, TASK_PRIORITY);
        
        List.saveTask(NEW_TASK);
        List.addTaskToProject(NEW_TASK, TASK_PROJECT)
      }

      this.renderTasks();
      this.renderProjects();
      this.hide(this.MODAL);
      this.hide(this.OVERLAY);
    })
  }
}