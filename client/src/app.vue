<template>
  <div id="app" class="w-4/5 m-auto h-500 mt-9 pt-5">
    <Headers />
    <Sorts />
    <router-view />
  </div>
</template>

<script>
import Headers from './components/header/header-comp.vue'
import Sorts from './components/header/Sorts.vue'

export default {
  components: {
    Headers,
    Sorts,
  },
}
</script>