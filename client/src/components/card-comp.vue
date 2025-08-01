<template>
  <div class="w-64 bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <router-link :to="`/product/${id}`" class="block">
      <img :src="image" alt="Product image" class="w-full h-48 object-cover" />
      <div class="p-4 flex flex-col justify-between h-32">
        <h2 class="text-lg font-semibold mb-2 line-clamp-2">{{ title }}</h2>
          <div class="flex justify-between items-center">
            <span class="text-rose-300 font-bold text-md">{{ price }} ₽</span>
          </div>
      </div>
    </router-link>

    <div class="px-4 pb-4">
      <div v-if="quantity === 0">
        <button @click.stop="AddProductToCart" class="w-full bg-rose-300 text-white py-2 font-bold text-sm rounded-xl hover:bg-rose-400 transition">
          В корзину
        </button>
      </div>
      <div v-else class="flex items-center justify-between bg-rose-50 border border-rose-300 rounded-xl px-2 py-1">
          <button @click="decrement" class="text-rose-400 text-xl font-bold px-3">−</button>
          <span class="font-semibold text-gray-700">{{ quantity }}</span>
          <button @click="increment" class="text-rose-400 text-xl font-bold px-3">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';

const { id, image, title, price } = defineProps({
  id: String,
  image: String,
  title: String,
  price: Number,
});

const CartStore = useCartStore();
const quantity = computed(() => CartStore.getQuantity(id));
function AddProductToCart() {
  CartStore.addToCart({id, image, title, price});
}
function increment(){
  CartStore.incrementQuantity(id);
}
function decrement(){
  CartStore.decrementQuantity(id);
}
</script>