<template>
  <div class="w-64 bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img :src="image" alt="Product image" class="w-full h-48 object-cover" />
    
    <div class="p-4 flex flex-col justify-between h-32">
      <h2 class="text-lg font-semibold mb-2 line-clamp-2">{{ title }}</h2>
      <div class="flex justify-between items-center">
        <span class="text-rose-300 font-bold text-md">{{ price }} ₽</span>
        <button
          class="bg-rose-300 text-white px-3 py-1 font-bold text-sm rounded-lg hover:bg-rose-400 transition"
        >
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
defineProps ({
    image: Image,
    title: String,
    price: Number
})
</script>