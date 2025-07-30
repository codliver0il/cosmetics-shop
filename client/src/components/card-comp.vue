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
      <button @click.stop
      class="w-full bg-rose-300 text-white py-2 font-bold text-sm rounded-xl hover:bg-rose-400 transition">
        В корзину
      </button>
    </div>
  </div>
</template>


<script setup>
defineProps ({
    id: String,
    image: String,
    title: String,
    price: Number,
})
</script>

