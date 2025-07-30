<template>
  <div v-if="loaded" class="max-w-3xl mx-auto mt-8 p-4 bg-white rounded shadow">
    <div v-for="img in imageUrls" :key="img" class="mb-4">
        <img :src="img" alt="product image" class="rounded-lg w-full max-w-sm" />
    </div>
    <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
    <p class="text-gray-600 mb-4">{{ product.description }}</p>
    <div class="flex justify-between text-lg font-semibold">
      <span>{{ product.price }} ₽</span>
      <span v-if="product.oldPrice" class="line-through text-gray-400">{{ product.oldPrice }} ₽</span>
    </div>
  </div>

  <div v-else class="text-lg font-semibold mb-2 line-clamp-2 text-gray-400">
    Загрузка товара...
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'; // получить текущий маршрут 

const route = useRoute();
const product = ref({});
const imageUrls = ref([]); 
const loaded = ref(false);

onMounted(async () => {
    try {
        const res = await axios.get(`http://localhost:2609/api/product/getproduct/${route.params.id}`);
        product.value = res.data;
        imageUrls.value = res.data.images.map(img => `http://localhost:2609${img}`);// относительная ссылка в абсолютную
        loaded.value = true;
    } 
    catch (err) 
    {
        console.error('Ошибка при получении товара:', err);
    }
})
</script>


