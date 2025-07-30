<template>
  <div v-if="loaded">
  <button
    @click="$router.back()"
    class="fixed top-34 left-45 px-6 py-4 bg-white hover:bg-gray-100 text-sm rounded shadow">
    ← 
  </button>

  <div class="max-w-7xl mx-auto mt-8 p-6 bg-white rounded shadow flex gap-10">
    <div class="w-1/2">
      <img
        :src="currentImage"
        alt="Product image"
        class="rounded-lg w-full h-auto object-cover mb-4"
      />
      <div class="flex gap-2">
        <button
          v-for="(img, index) in imageUrls"
          :key="img"
          class="w-16 h-16 border rounded overflow-hidden"
          @click="currentImage = img"
        >
          <img :src="img" alt="Thumbnail" class="object-cover w-full h-full" />
        </button>
      </div>
    </div>

    <div class="w-1/2 flex flex-col justify-between">
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ product.title }}</h1>
        <p class="text-sm text-gray-500 mb-4">
          {{ product.path[product.path.length - 1] }}
        </p>

        <div class="flex items-center gap-4 mb-4">
          <span class="text-2xl font-bold text-rose-300">{{ product.price }} ₽</span>
          <span
            v-if="product.oldPrice"
            class="line-through text-gray-400 text-md"
          >
            {{ product.oldPrice }} ₽
          </span>
        </div>

        <button
          class="mb-6 px-5 py-2 bg-rose-300 hover:bg-rose-400 text-white rounded shadow transition"
        >
          В корзину
        </button>

        <div class="space-y-2">
          <p><strong>Объем:</strong> {{ product.specifications.volume }}</p>
          <p><strong>Применение:</strong> {{ product.specifications.use }}</p>
          <p><strong>Страна производства:</strong> {{ product.specifications.country }}</p>
          <p><strong>Состав:</strong> {{ product.specifications.composition }}</p>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div v-else class="text-lg font-semibold text-center text-gray-400 mt-20">
    Загрузка товара...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref({});
const imageUrls = ref([]);
const loaded = ref(false);
const currentImage = ref('');

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:2609/api/product/getproduct/${route.params.id}`);
    product.value = res.data;
    imageUrls.value = res.data.images.map(img => `http://localhost:2609${img}`);
    currentImage.value = imageUrls.value[0]; // стартовая картинка
    loaded.value = true;
  } catch (err) {
    console.error('Ошибка при получении товара:', err);
  }
});
</script>

