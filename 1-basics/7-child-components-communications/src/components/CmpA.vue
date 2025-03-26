<template>
    <div class="card p-2">
<h3>{{ title }} </h3>
<button @click="$emit('change-title','Component A Hack Etti')" class="btn btn-primary">
    component B bilgisini değiştir
</button>

<!-- <button  @click="$emit('run-event')" class="btn btn-secondary">Fonksiyonu Çalıştır</button> -->

{{ run }}
    </div>
</template>

<script>
export default {
    props:["title","run"] ,
    watch : {
        run(isRun){
            console.log(isRun)
            if (isRun)
        {
           
            alert("Çalışmaya başladı");
            
        }
        }
    }
}</script>