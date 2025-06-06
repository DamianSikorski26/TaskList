let nameInput = document.getElementById('nameInput');
let DateInput = document.getElementById('DateInput');
let taskDesk = document.getElementById('nameInput');
let realTaskContainer = document.querySelector(".real-task-container");
let taskDoneContainer = document.querySelector(".task-done");

let filterButton = document.getElementById('filterButton')
let addButton = document.getElementById('addButton');

const task = [];

class Task{
    constructor(name,date,description,done){
        this.name = name;
        this.date = date;
        this.description =description;
        this.done = done;
    }
}

addButton.addEventListener("click",(e) => {
    e.preventDefault();
    if(!nameInput.value || !DateInput.value || !taskDesk.value){
        alert('Fill all !');
        return
    } 
    task.push(new Task(nameInput.value,DateInput.value,taskDesk.value,false));
    display();
    
})

function createTask(obj,index){
    let details = document.createElement("details");
    details.classList.add("TaskDetails");
    details.innerHTML = ` 
    <details >
        <summary>
            <span>
            `
    
    if(!obj.done){
        details.innerHTML  += `      
                <input type="checkbox" data-index =${index} >`

    }

    details.innerHTML  +=            
                `
                ${obj.name}
                </span>
            <span>${obj.date}</span>
        </summary>
        <p>${obj.description}</p>
    </details>

        `;

    return details;
    


}

function display(){
    realTaskContainer.innerHTML = "";
    taskDoneContainer.innerHTML = "";

    task.forEach((element,index)=>{
        if(element.done){
            taskDoneContainer.append(createTask(element,index));
        }
        else{
            realTaskContainer.append(createTask(element,index));
        }
    })

}

realTaskContainer.addEventListener("input",(e)=>{
    if(e.target.hasAttributes("input")){
        let id = e.target.dataset.index;
        console.log(id);
        console.log("checked");
        task[id].done = true ;
        display();
    }
})



