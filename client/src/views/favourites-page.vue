<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Избранные товары</h1>

    <div v-if="favourites.length === 0" class="text-gray-500 text-lg">
      У вас пока нет избранных товаров.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="item in favourites" :key="item.id" class="bg-white shadow-md rounded-xl overflow-hidden relative">
        
        <!-- Кнопка "убрать из избранного" -->
        <button
          @click="remove(item.id)"
          class="absolute top-2 right-2 z-10"
        >
          <img src="/free-icon-dislike-6579189.png" alt="Remove from favorites" class="w-6 h-6" />
        </button>

        <!-- Картинка и переход -->
        <router-link :to="`/product/${item.id}`">
          <img :src="item.image" alt="Product" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-semibold mb-2">{{ item.title }}</h2>
            <span class="text-rose-300 font-bold text-md">{{ item.price }} ₽</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavouritesStore } from '@/stores/favourites';
import { computed } from 'vue';

const store = useFavouritesStore();
const favourites = computed(() => store.items);

function remove(id) {
  store.removeFromFavourites(id);
}
</script>