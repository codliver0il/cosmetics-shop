<template>
  <header class="fixed top-0 left-0 w-full bg-white z-50 shadow">
    <div class="flex items-center justify-between px-4 py-2 mx-auto">
      <!-- Бургер + Название -->
      <div class="flex items-center gap-4 min-w-[200px]">
        <button @click="toggleSideNav" class="focus:outline-none">
          <div class="space-y-1">
            <span class="block w-5 h-0.5 bg-black rounded-4xl"></span>
            <span class="block w-5 h-0.5 bg-black rounded-4xl"></span>
            <span class="block w-5 h-0.5 bg-black rounded-4xl"></span>
          </div>
        </button>
        <Name />
      </div>

      <!-- Поиск -->
      <div class="flex-1 flex justify-center">
        <Search />
      </div>

      <!-- Корзина + Профиль -->
      <div class="flex items-center gap-6 justify-end min-w-[200px]">
        <Cart />
        <Favourites/>
        <UserProfile />
        <Sorts/>
      </div>
    </div>

    <!-- Боковая навигация -->
    <SideNav v-if="isNavOpen" @close="isNavOpen = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Name from './Name.vue'
import Search from './search.vue'
import Cart from './cart.vue'
import UserProfile from './UserProfile.vue'
import SideNav from './SideNav.vue'
import Favourites from '../favourites.vue'
import Sorts from './Sorts.vue'

const isNavOpen = ref(false)

const toggleSideNav = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>