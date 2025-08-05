<template>
  <router-link :to="'/cart'" class="relative">
  <div class="flex items-center gap-2">
    <span>{{totalPrice}} ₽</span>
    <img src="/3.png" alt="Cart" class="w-5" />
  </div>
  </router-link>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

</script>