<template>
    <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
        <input type="text" class="search-field" v-model="userSearch">
        <button type="submit" class="btn-search">
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
    data(){
      return {
        userSearch: ''
      }
    }
}
</script>

<style>

</style>