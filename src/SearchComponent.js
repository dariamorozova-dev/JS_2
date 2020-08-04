Vue.component('search-prods', {
    props: ['search'],
    template: `
    <form action="#" class="search-form">
        <input type="text" class="search-field" :v-model="search">
        <button type="submit" class="btn-search" @click="$parent.$emit('filter-all', search)">
            <i class="fas fa-search"></i>
        </button>
    </form>
    `
})