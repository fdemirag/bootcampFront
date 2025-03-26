<template>
    <div class="card p-2">
<h3>{{ title }} </h3>

<button  @click="$emit('change-title','Component B Hack Etti')" class="btn btn-danger">    

    component A bilgisini değiştir
</button>

<button  @click="$emit('run-event')" class="btn btn-secondary">Fonksiyonu Çalıştır</button>
    </div>
</template>


<script>
export default {
    props:["title"]
   
}</script>

