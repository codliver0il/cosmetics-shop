<template>
   <header class ="flex justify-between border w-100% p-1 ">
    <div class ="">
      <div class="flex items-center gap-40">
        <Name/>
        <search />
        <cart />
        <UserProfile/>
      </div>
    </div>
  </header>
</template>

<script setup>
import search from './search.vue'
import cart from './cart.vue' 
import UserProfile from './UserProfile.vue';
import Name from './Name.vue';
</script>
