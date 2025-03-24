// const addBtn = document.querySelector("#addBtn")
// const todoInput =document.querySelector("#todoValue")
// const todoList = document.querySelector("#todoList")
// const totalCount = document.querySelector("#totalCount")

// let todoCount=0;

// addBtn.addEventListener("click",()=>
// {
//     const ListItem = document.createElement("li");
//     ListItem.textContent = todoInput.value;
//     todoList.appendChild(ListItem);
//     todoInput.value ="";

//     todoCount++;
//     totalCount.textContent = `Total: ${todoCount}`;


// })

const app=Vue.createApp({
    data(){
        return {
        todoValue:null,
        todoList:[]
               }
    },
    methods:{
        addTodo(){
            this.todoList.push(this.todoValue)
            this.todoValue =null;
        }
    }
})

app.mount("#app")