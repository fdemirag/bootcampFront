<template>
  <div class="row mt-5">
    <div class="col-6 offset-3">
      <div class="list-group">
        <div 
          v-for="item in itemList" 
          :key="item.id" 
          class="list-group-item"
          :style="{ padding: '10px', borderBottom: '1px solid #ddd' }"
        >
          <h5 :style="{ fontWeight: 'bold', marginBottom: '5px' }">
            {{ item.title }}
          </h5>
          <div v-html="item.content" :style="{ marginTop: '5px' }"></div>
        </div>

        <a 
          class="list-group-item list-group-item-action disabled" 
          aria-disabled="true"
          :style="{ color: '#999', cursor: 'not-allowed', textAlign: 'center' }"
        >
          A disabled link item
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  data() {
    return {
      itemList: [
        { id: 1, title: "Haber 1", content: "<strong>Bu Haber Kaçmaz</strong>" },
        { id: 2, title: "Haber 2", content: `<a target="_blank" href="https://youtube.com" target="_blank">Youtube</a>` },
        { id: 3, title: "Haber 3", content: `<h3>Bu Nasıl Bir Haber!</h3>` }
      ]
    };
  }
};
</script>
