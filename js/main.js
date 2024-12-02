const addBtn = document.querySelector('#btn'); // c'est le premier élément  #btn que la function trouve dans le html
const taskCard = document.querySelector('.todoCard');
const taskContainer = document.querySelector('#todoCards');

const delBtn = document.querySelector('.delBtn'); // on recupere le premier .delBtn
delBtn.addEventListener('click', function() {
    deleteTask(taskCard);
    });

addBtn.addEventListener('click', addTask); // pour ajouter une tache

// on crée la fonction d'ajout
function addTask(){
    const newTask = taskCard.cloneNode(true); // on clone l'élement NewTask
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task'); 

    newTextArea.value = "New Task"; // changement de variable pour qu'elle ne soit pas vide
    newDelBtn.addEventListener('click',function(){
        deleteTask(newTask);
    });

    taskContainer.appendChild(newTask); // ajoute un enfant à taskContainer et permet la duplication
    updateCount();
}

function updapteCount()
{
    let count = list.compterlist;
    compterlist = 'you have ${count} to- dos.';
}

// on créer la fonction de suppression
function deleteTask(task){
    task.remove();
}





