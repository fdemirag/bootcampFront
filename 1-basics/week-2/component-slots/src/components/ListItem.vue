<template>
     <div  
          :key="item.id" 
          class="list-group-item"
          :style="{ padding: '10px', borderBottom: '1px solid #ddd' }"
        >
          <h5 :style="{ fontWeight: 'bold', marginBottom: '5px' }">
            {{ item.title }}
          </h5>
          <div v-html="item.content" :style="{ marginTop: '5px' }"></div>
        </div>
</template>

<script>
    export default {
        name : "ListItem.vue",
        props: {
            item:Object 
        }
    }
</script>