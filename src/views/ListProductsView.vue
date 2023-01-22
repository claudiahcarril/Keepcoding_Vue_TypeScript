<template>
  <SearchBar></SearchBar>
</template>

<script lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  components: { 
    SearchBar, 
  },
  setup() {
    return {}      
  },
});
</script>
