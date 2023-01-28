<template>
    <form @submit.prevent="$emit('filter', filter)" class="d-flex" role="search">
        <input v-model="filter" class="form-control me-2" type="search" placeholder="Buscar por nombre" aria-label="Search">
        <CustomButton>
            <template v-slot:left-icon>
                <i class="bi bi-search"></i>
            </template>
            <template v-slot:right-text>
                <p>Buscar</p>
            </template>
        </CustomButton>
    
    </form>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomButton from './CustomButton.vue';

export default defineComponent({
    name: 'SearchBar',
    components: {
        CustomButton,
    },

    setup() {
        const filter = ref<string>('');

        return {
            filter,
        }
    }
})
</script>


<style scoped>
.d-flex {
    margin: 20px 50px 20px 50px;
}

.bi-search {
    margin-right: 5px;
}

.btn-outline-success > p {
    margin: 0;
    font-weight: 700;
    color: #35495e;
}



</style>