// CRUD 
// Create Read Update Delete

let tasks =[
    {
        "title":"Read book",
        "date":"15/10/2030",
        "isDone":false
    },
    {
        "title":"Final Project",
        "date":"15/10/2030",
        "isDone":false
    },
    {
        "title":"JS course",
        "date":"15/10/2030",
        "isDone":true

    }
] 


function getTasksFromStorage(){
    let retrievedTasks= JSON.parse(localStorage.getItem("tasks"))
    // if(retrievedTasks == null){
    //     tasks =[]
    // }else tasks=retrievedTasks
    tasks = retrievedTasks ?? [] // => nullish operator
   
}
getTasksFromStorage()
function fillTasksOnThePage(){document.getElementById("tasks").innerHTML=""//=>لغى كل اشي محطوط يدوي
let index =0
for(task of tasks){

let content=`
 <div class="task  ${task.isDone? 'done' : '' }">
 
    <!-- Tasks Info -->
        <div class="task-info">
            <h2>${task.title}</h2>
            <div>
            <p>${task.date}</p>
            </div>             
            </div>
    <!-- /Tasks Info /-->
    <!-- Action -->
    <div class="action">
        <button class="circular Delete" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></button>
        ${task.isDone?`
            <button class="circular Cancel" onclick="completeTask(${index})"><i class="fa-solid fa-xmark"></i></button>`
            :
            `
            <button class="circular done" onclick="completeTask(${index})"><i class="fa-solid fa-check"></i></button>`}
        
        <button class="circular edite" onclick="editTask(${index})"><i class="fa-solid fa-pen-to-square"></i></button>

    </div>
     <!-- /Action/ -->

    </div>
`

document.getElementById("tasks").innerHTML+=content
index++
// const btns = document.querySelectorAll(".Delete")
// btns.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         tasks.splice(index, 1)
//         fillTasksOnThePage()
//     })
// })
}}
fillTasksOnThePage()

document.getElementById("add-btn").addEventListener("click",()=>{
   let taskName= prompt("Add Task")
   let now=new Date() 
   let date=now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear()
   tasks.push({
    "title":taskName,
    "date":date,
    "isDone":false
   })
    // let taskString=JSON.stringify(tasks)
//    localStorage.setItem("tasks",JSON.stringify(tasks))
//    console.log(taskString)
    storeTasks()
   fillTasksOnThePage()
}) 
// const btns=document.querySelectorAll(".Delete")
// console.log( btns);
// btns.forEach((btn,index)=>{
//     btn.addEventListener("click",()=>{
//         tasks.splice(index,1)
//         fillTasksOnThePage()
//    })
// })
function deleteTask(index){
    let x =confirm("Are you sure you want to delete this task?")
    console.log(x)
    if(x){
        tasks.splice(index,1)
        storeTasks()
        fillTasksOnThePage()

    } 
}
function editTask(index){
    let task=tasks[index]
    let newTaskTitle =prompt("Edite Tasks",task.title)
    task.title=newTaskTitle 
    storeTasks()
    fillTasksOnThePage()   
}
function completeTask(index){
    let task=tasks[index]
    // if(task.isDone){
    //     task.isDone=false
    // } else {
    //     task.isDone=true
    // }
    task.isDone=!task.isDone
    storeTasks()
    fillTasksOnThePage()   
}
// =========== Storage function ===========
function storeTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}





// ${task.isDone? 'done' : '' } 

   




