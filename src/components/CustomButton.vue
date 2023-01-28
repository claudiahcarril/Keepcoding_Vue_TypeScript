<template>
    <button type="submit" @click="$emit('clicked')" class="btn btn-outline-success">
        <slot name="left-icon"></slot>
        <slot name="right-text"></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CustomButton',
})
</script>


<style scoped>

.btn-outline-success {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    background-color: #8ed4b5;
    border: none;
    height: 40px;
    min-width: 120px;
    padding: 10px 15px 10px 15px ;
}


</style>