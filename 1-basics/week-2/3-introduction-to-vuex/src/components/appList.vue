<template>

<div class="list-group"> 
    
  
  <a v-for="item in itemlist" :key="item.id" href="#" class="list-group-item list-group-item-action">
    
    {{ item.text }}</a>
  
</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    
    computed: mapGetters({ itemlist : "_itemList" }),
        
    }

</script>