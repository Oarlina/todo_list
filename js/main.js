console.log("J'ai reussi a lier Js au fichier Html!");

const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector('.todoCard');
const taskContainer = document.querySelector('#todoCards');





// const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask); // pour ajouter une tache







function addTask(){
    const newTask = taskCard.cloneNode(true);
    const newsTextArea = newTask.querySelector('.task');
    newsTextArea.value = "New Task";
    taskContainer.appendChild(newTask);
}

