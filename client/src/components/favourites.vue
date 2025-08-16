<template>
    <div class="flex items-center gap-2">
    <router-link :to="'/favourites'" class="relative">
        <img src="/free-icon-heart-1077035.png" alt="favourites" class="w-5" />
    </router-link>
    </div>
  </template>

<script setup>
import returnButton from '@/elements/return-button.vue';
</script>