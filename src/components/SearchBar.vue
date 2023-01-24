<template>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar por nombre" aria-label="Search">
        <CustomButton>
            <template v-slot:left-icon>
                <i class="bi bi-search"></i>
            </template>
            <template v-slot:right-icon>
                <p>Buscar</p>
            </template>
        </CustomButton>
    
    </form>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from './CustomButton.vue';

export default defineComponent({
    name: 'SearchBar',
    components: {
        CustomButton,
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
}



</style>