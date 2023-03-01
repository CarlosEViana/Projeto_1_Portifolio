
//função para criar tarefas

    function addTask(){
    
        const taskTitle = document.querySelector("#task-title").value;
    

         //  //clone do template

             if(taskTitle) {

                const template = document.querySelector(".template");

                const newTask = template.cloneNode(true);

            
    
                    //Title
      
                newTask.querySelector(".task-title").textContent = taskTitle;

                    //remover classes

                newTask.classList.remove("template");
                newTask.classList.remove("hide");
    
                    //add task

                const list = document.querySelector("#task-list");

                list.appendChild(newTask);

                    //Event Revome btn

                const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){

                    removeTask(this);
                });    

                    //event Complet Task

                const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){

                    completeTask(this);
                    
                });


                    //clean text

                document.querySelector("#task-title").value = "";
        
         };


    //Função remove Task

    function removeTask(task){

        task.parentNode.remove(true);

    }

    //Função complet task

    function completeTask(task){

        const tasktocomplet = taskparent.Node;

        tasktocomplet.classList.toggle(done);

    }



    // Evento criar task

    const addBtn = document.querySelector("#add-btn");

    addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();

})}; 

