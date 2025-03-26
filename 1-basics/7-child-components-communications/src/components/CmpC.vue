<template>
    <div class="card p-2">
<h3>{{ componentCTitle }} </h3>
<button @click="$emit('change-title','Component C Hack etti')" class="btn btn-primary">
    component D bilgisini değiştir
</button>

<!-- <button  @click="$emit('run-event')" class="btn btn-secondary">Fonksiyonu Çalıştır</button> -->

{{ run }}
    </div>
</template>

<script>
export default {
    props:["run"] ,
    inject :["componentCTitle"],
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