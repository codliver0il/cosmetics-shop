<template>
  <div>
    <div class = "sticky">
        <button @click="$router.back()" class="absolute -left-16 top-0 px-4 py-2 bg-white hover:bg-gray-100 text-sm rounded-xl shadow">
          ←
        </button>
    </div>
    <div class="max-w-6xl mx-auto mt-10 px-4">
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Корзина</h1>
          <button @click="cart.clearCart()" class="text-sm text-gray-500 hover:text-rose-400">
            Очистить корзину
          </button>
        </div>
   <div v-if="cart.items.length > 0" class="space-y-6">
      <div v-for="item in cart.items" :key="item.id" class="flex items-center bg-white rounded-xl shadow p-4 gap-6">
        <button @click="cart.removeFromCart(item.id)" class="text-sm text-gray-400 hover:text-red-400 transition">
            ✕
        </button>
        <img :src="item.image" alt="Product image" class="w-24 h-24 object-cover rounded-xl"/>
        <div class="flex-1">
          <h2 class="text-lg font-semibold mb-1">{{ item.title }}</h2>
          <div class="text-sm text-gray-500">Цена: {{ item.price }} ₽</div>
        </div>

        <div class="flex flex-col items-end gap-2 min-w-[120px]">
          <div class="flex items-center border  px-2 py-1  bg-rose-50 border border-rose-300 rounded-xl">
            <button @click="decrement(item.id)" class="text-rose-400 text-xl font-bold px-3">−</button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button @click="cart.incrementQuantity(item.id)" class="text-rose-400 text-xl font-bold px-3">+</button>
          </div>

          <!-- Сумма -->
          <div>
            <span class="text-xl font-bold text-rose-400">
              {{ item.price * item.quantity }} ₽
            </span>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center mt-6">
        <span class="text-xl font-bold">
          Общая сумма: {{ totalPrice }} ₽
        </span>
        <button class="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-xl font-semibold transition">
          Оформить заказ
        </button>
      </div>
    </div>

    <div v-else class="text-gray-400 text-xl relative">
      Ваша корзина пуста.
        
      <router-link :to="'/'" class="block flex justify-center">
      <button class="px-5 py-4 bg-rose-300 hover:bg-rose-400 text-white rounded-xl shadow transition">
        На главную страницу
      </button>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import returnButton from '@/elements/return-button.vue'

const cart = useCartStore()

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function decrement(id) {
  const item = cart.items.find(item => item.id === id);
  if (item.quantity === 1)
  {
    cart.removeFromCart(item.id);
  }
  else 
  {
    cart.decrementQuantity(item.id);
  }
}
</script>