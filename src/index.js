import Task from './task.js';
import Project from './project.js';
import Storage from './storage.js';
import { DOM } from './dom.js';
import './style.css';


//for development testing
window.Task = Task;
window.Project = Project;
window.Storage = Storage;
window.DOM = DOM;
//end

DOM.init();

/* const testTask = new Task('Test Task','This is a test','','','','','');
const testTask2 = new Task('Test Task 2','This is a test 2','','','','','');
const testTask3 = new Task('Test Task 2','This is a test 2','','','','','');



testStore.saveTask(testTask);
testStore.saveTask(testTask2);
testStore.saveTask(testTask3);

console.log(testStore);
console.log(testStore.taskList);
console.log(testStore.projectList);

DOM.renderList(testStore.taskList,'task');
DOM.renderList(testStore.projectList,'project'); */

/* const testTask = new Task('Test Task','This is a test','','','','','');
const testProj = new Project("Test Project");
const testStore = new Storage();
testStore.deleteAllTasks();
testStore.deleteAllProjects();
console.log(testTask);
testProj.addTask(testTask);
testStore.saveTask(testTask);
testStore.saveProject(testProj);
console.log(testProj);
console.log(testStore);
testProj.removeTask(testTask);
//testStore.deleteTask(testTask);
console.log(testProj);
console.log(testStore); */