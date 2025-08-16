<template>
  <div class="w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div class="relative z-0">
      <button @click.stop="toggleFavourites" class="absolute top-2 right-2">
        <img :src="isFavourite ? '/free-icon-heart-2107845.png' : '/free-icon-heart-1077035.png'" alt="Favorite icon" class="w-6 h-6"/>
      </button>
      <router-link :to="`/product/${id}`" class="block">
        <img :src="image" alt="Product image" class="w-full h-48 object-cover" />
      </router-link>
    </div>
    <router-link :to="`/product/${id}`" class="block">
      <div class="p-4 flex flex-col justify-between h-32">
        <h2 class="text-lg font-semibold mb-2 line-clamp-2">{{ title }}</h2>
          <div class="flex justify-between items-center">
            <span class="text-rose-300 font-bold text-md">{{ price }} ₽</span>
          </div>
      </div>
    </router-link>

    <addToCartButton :id="id" :image="image" :title="title" :price="price" />
  </div>
</template>

<script setup>
import addToCartButton from '@/elements/add-to-cart-button.vue';
import { useFavouritesStore } from '@/stores/favourites';
import { computed } from 'vue'

const { id, image, title, price } = defineProps({
  id: String,
  image: String,
  title: String,
  price: Number,
});

const FavouritesStore = useFavouritesStore();

const isFavourite = computed(() => FavouritesStore.isFavourite(id));
function toggleFavourites() {
  if (isFavourite.value) {
    FavouritesStore.removeFromFavourites(id);
  } else {
    FavouritesStore.addToFavourites({ id, image, title, price });
  }
}
</script>

