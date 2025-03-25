

<template>

<div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description}}</p>
    <a :href="link" class="btn btn-primary">Go Website</a>

</div>
</template>

<script>
export default {
    name : "AppCardDetails",
    props : ["title","description","link"]
}
</script>