<template>
  <div v-if="loaded" class="flex justify-center mt-8">
    <div class="relative flex gap-4 max-w-7xl w-full px-4">
      <div class = "sticky">
        <button @click="$router.back()" class="absolute -left-16 top-0 px-4 py-2 bg-white hover:bg-gray-100 text-sm rounded-xl shadow">
          ←
        </button>
      </div>
      <div class="flex-1 p-6 bg-white rounded-xl shadow flex gap-10">
        <div class="w-1/2">
          <img :src="currentImage" alt="Product image" class="rounded-xl w-full h-auto object-cover mb-4"/>
          <div class="flex gap-2">
            <button v-for="(img, index) in imageUrls" :key="img" class="w-16 h-16 border rounded-xl overflow-hidden" @click="currentImage = img">
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
              <span v-if="product.oldPrice" class="line-through text-gray-400 text-md">
                {{ product.oldPrice }} ₽
              </span>
            </div>

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
              
            <div class="space-y-2">
              <p>{{ product.description }}</p>
              <p><strong>Объем:</strong> {{ product.specifications.volume }}</p>
              <p><strong>Применение:</strong> {{ product.specifications.use }}</p>
              <p><strong>Страна производства:</strong> {{ product.specifications.country }}</p>
              <p><strong>Состав:</strong> {{ product.specifications.composition }}</p>
            </div>
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
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';

const route = useRoute();
const product = ref({});
const imageUrls = ref([]);
const loaded = ref(false);
const currentImage = ref('');

const CartStore = useCartStore();


function AddProductToCart() {
  CartStore.addToCart({
    id: product.value._id, 
    image: currentImage.value,
    title: product.value.title,
    price: product.value.price
  });
}
const quantity = computed(() => CartStore.getQuantity(product.value._id));
function increment(){
  CartStore.incrementQuantity(product.value._id);
}
function decrement(){
  CartStore.decrementQuantity(product.value._id);
}
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

