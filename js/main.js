const addBtn = document.querySelector('#btn'); // c'est le premier élément  #btn que la function trouve dans le html
const taskCard = document.querySelector('.todoCard');
const taskContainer = document.querySelector('#todoCards');
const taskCard2 = document.querySelector('.task');
const taskContainer2 = document.querySelector('#todoCardsFinish');
const delBtn = document.querySelector('.delBtn'); // on recupere le premier .delBtn
const checkBtn = document.querySelector('.checkBtn'); // on recupere le premier .checkBtn
let nombre =1;
let nombrefini=0;
let probleme = "Veuillez ajouter une tache avant de valider/supprimer";
document.getElementById("compterlist").innerHTML = nombre;
document.getElementById("compternb").innerHTML = nombrefini;


addBtn.addEventListener('click', addTask); // pour ajouter une tache

delBtn.addEventListener('click', function() {
    deleteTask(taskCard);
    });

checkBtn.addEventListener('click', function() {
    deplaceTask(taskCard);
    });
    


// on crée la fonction qui validera une tache
function deplaceTask(task){
    // si nomlbre de tache = 1, ne peux pas deplacer, sinon peut deplacer
    if (nombre>1){
        const newTask2 = task.cloneNode(true); // on clone l'élement NewTask
        const newDelBtn2 = newTask2.querySelector('.delBtn');
        const newTextArea2 = newTask2.querySelector('.task'); 
        
        taskContainer2.appendChild(newTextArea2); // ajoute un enfant à taskContainer et permet la duplication
        nombrefini++; // pour ajouter un au compteur
        
        newDelBtn2.addEventListener('click',function(){
            deleteTask(newTask);
            updateCount(); // permet de mettre a jour le compteur
        });
        
        newTextArea2.value = "New Task"; // changement de variable pour qu'elle ne soit pas vide
        deleteTask(task); // pour supprimer la liste que je valide
        // deleteTask(task);
        updateCount(); 
    } else {
        document.querySelector(".probleme").innerHTML = probleme;
    }
}


// on crée la fonction d'ajout
function addTask(){
    const newTask = taskCard.cloneNode(true); // on clone l'élement NewTask
    const newDelBtn = newTask.querySelector('.delBtn');
    const newCheckBtn = newTask.querySelector('.checkBtn');
    const newTextArea = newTask.querySelector('.task'); 

    nombre++; // pour ajouter un au compteur
    newTextArea.value = "New Task"; // changement de variable pour qu'elle ne soit pas vide

    newDelBtn.addEventListener('click',function(){
        deleteTask(newTask);
        updateCount(); // permet de mettre a jour le compteur
    });

    newCheckBtn.addEventListener('click', function() {
        deplaceTask(newTask);
        });

    taskContainer.appendChild(newTask); // ajoute un enfant à taskContainer et permet la duplication
    updateCount(); 
}

// on crée la fonction qui change le compteur et l'affiche
function updateCount()
{
    document.getElementById("compterlist").innerHTML = nombre; // pour afficher dans une id nomée compterlist la variable nombre
    document.getElementById("compternb").innerHTML = nombrefini; // pour afficher dans une id nomée compterlist la variable nombre
}

// on créer la fonction de suppression
function deleteTask(task){
    if (nombre>1){ // pour qu'il reste forcément une liste
    task.remove();
    nombre--; // pour retirer un au compteur

    }else if (nombre == 1)
    {
        document.querySelector(".probleme").innerHTML = probleme;
    }
}





