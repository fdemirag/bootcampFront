<template>
    <div class="card p-2">
<h3>{{ componentDTitle }} </h3>

<button  @click="$emit('change-title','Component D Hack Etti')" class="btn btn-danger">    

    component C bilgisini değiştir
</button>

<button  @click="$emit('run-event')" class="btn btn-secondary">Fonksiyonu Çalıştır</button>
    </div>
</template>


<script>
export default {
    props:["title"],
    inject : ["componentDTitle"]
   
}</script>

