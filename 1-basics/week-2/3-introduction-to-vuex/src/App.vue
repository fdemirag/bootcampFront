
<template>

  <div class="container mt-5">
    <h3 class="text-center">Vuex</h3>
    <div class="row">
      <div class="col-6 offset-3 card p-2">
        {{$store.state.fullName}}
        <appText></appText>

        {{ $store.state.itemList }}
      </div>
    </div>
  </div>
</template>

<script>
export default {}

</script>