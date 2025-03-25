<template>
  <div class="container">asd
  <h3>{{title}}</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores fuga tempore suscipit, qui eos debitis nihil? Corporis autem ea, consequatur odio ex quis officia tempore quod laborum officiis aperiam dolores eos nostrum quas necessitatibus est repudiandae velit animi assumenda fugiat. Eligendi ratione ab dolorem pariatur. Eveniet provident porro expedita atque?</p>

  <button @click="chanceTitle">Tıkla</button>
</div>
 </template>


<script>
  export default {
    data () {
      return {
        title: "bu vue tarafından instance edilmiş bir başlık",
        title2:"yeni başlık"
      }
    },
    methods :{
      chanceTitle(){
        this.title = this.title2;
      }
    },
    computed : {
       
    },
    mounted(){
      console.log("mounted çalıştı.")
    }
  }
</script>
 