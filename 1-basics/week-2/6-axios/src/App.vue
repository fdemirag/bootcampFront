<template>
  <div class="container">
    <h3 class="text-center mt-3">Axios</h3>

    <div class="row">
      <div class="col-6 offset-3 p-2">
        <input
          @keydown.enter="newTodo"
          class="form-control"
          type="text"
          placeholder="Type todo and press enter key"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-6 offset-3 p-2">
        <ul class="list-group">
          <li
            v-for="todo in todoList"
            :key="todo.id"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{{ todo.title }}</span>
            <button @click="deleteItem(todo)" class="btn btn-sm btn-danger">
              Sil
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div>
    <ul class="list-group">
      <li v-for="todo in todoList" :key="todo.id" class="list-group-item">
        {{ todo.title }} --- {{ todo.id }} --- {{ todo.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todoList: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("http://localhost:3000/todos").then((todo_List_response) => {
        console.log(todo_List_response);
        this.todoList = todo_List_response.data;
      });
    },
    newTodo(e) {
      axios
        .post("http://localhost:3000/todos", {
          title: e.target.value,
          completed: false,
          
        })
        .then((new_todo_response) => {
          console.log(new_todo_response);

          this.todoList.push(new_todo_response.data); // Yeni todo'yu listeye ekle
          e.target.value = ""; // Input'u temizle
          
          // this.todoList.push({
          //   id: new Date().getTime(),
          //   title: e.target.value,
          //   e.target.value = null
          // });
        })
        .catch((e) => console.error(e));
    },
    deleteItem(item) {
      this.todoList = this.todoList.filter((t) => t !== item);
      
    },
  },
};
</script>
