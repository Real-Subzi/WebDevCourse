//References
const form = document.querySelector("#form");
const container = document.querySelector("#todolist-container");
const clear = document.querySelector("#clear-todos");
let todoList=[]; //The actual list of items. Has to be LET because we reassign when loading.

DisplaySavedList();

//Add Listeners
form.addEventListener('submit',addTodo)
function addTodo(e){
    e.preventDefault();
    const todoItem = FormToObject(e.target); //passes the whole form into the method, gets todo item as obj.
    todoItem.id = Date.now();
    todoList.push(todoItem); //push the item into list.
    localStorage.savedTodos = JSON.stringify(todoList);
    DisplaySavedList();
}

clear.addEventListener('click',ClearAllTodos);
function ClearAllTodos(){
    todoList = [];
    localStorage.savedTodos = JSON.stringify(todoList);
    DisplaySavedList();
}

function FormToObject(form){
    const formData = new FormData(form); //converts the form into FormData format.
    const data = {} //create an empty object
    for([key,value] of formData){ //iterate over the key-value pairs in formData
        data[key] = value; //assign the object with attributes and their values.
    }
    //console.log(data)
    return data; 
}

function DisplaySavedList(){
    if(!localStorage.savedTodos){
        todoList=[]; //if there isn't any previously saved todos
    }else{
        todoList = JSON.parse(localStorage.savedTodos)
    }

    const DisplayList = todoList.map((item)=>TodoHtml(item)).join(" ");//pass every item in list to show function
    container.innerHTML = DisplayList; //inject html into container.
}

function TodoHtml(item){ //i do not put "on" here because ! will make it false and clicking it again makes it true instead of on.
    return ` <div class="form-group todo" id="">
                    <p class="todo-title ${item.completed?"strike":""}" id="">${item.title}</p> 
                    <input class="completed icon" type="checkbox"
                    onclick="todoStatus(${item.id})"${item.completed?"checked":""}>
                    <i class="fa fa-trash icon" onclick="deleteTodo(${item.id})"></i>
             </div>`
}

function deleteTodo(itemID){
    const todoitem = todoList.find((item)=>item.id === itemID);//get item with id
    const index = todoList.indexOf(todoitem);//find index in the array
    todoList.splice(index,1);
    localStorage.savedTodos = JSON.stringify(todoList);
    DisplaySavedList();
}

function todoStatus(itemID){
    const todoitem = todoList.find((item)=>item.id === itemID);//get item with id
    const index = todoList.indexOf(todoitem);//find index in the array
    todoList[index].completed = !todoList[index].completed;
    localStorage.savedTodos = JSON.stringify(todoList);
    DisplaySavedList();
}