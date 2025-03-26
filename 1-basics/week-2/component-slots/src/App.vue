<template>
  <div class="row mt-5">
    <div class="col-6 offset-3">
      <div class="list-group">
       

        <ListItem v-for="item in itemList" :key="item.id" :item="item" />

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

        <appModal>
          <template #header>
            <h3 class="text-danger">Header</h3>
          </template>

          <template v-slot:content> 
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, dolore eveniet accusantium suscipit, ipsa inventore sit iste veritatis dolor magnam esse doloribus facilis fuga, culpa voluptates in? Ipsum odio adipisci illo, consequuntur, necessitatibus fuga inventore eius autem veritatis aliquid assumenda! Dolor provident quo recusandae reprehenderit natus laborum accusamus deserunt?
          </div>
          </template>
         <template v-slot:footer>

          <h4>Footer</h4>
         </template>

         <h1>Custom Slot</h1>
        </appModal>


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
