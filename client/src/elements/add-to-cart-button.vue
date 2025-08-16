<template>
  <div class="px-4 pb-4">  <!-- отступы по горизонтали и снизу соответсвенно  -->
    <div v-if="quantity === 0">
      <button @click.stop="add" class="w-full bg-rose-300 text-white py-2 font-bold text-sm rounded-xl hover:bg-rose-400 transition"> 
      <!-- w-full - ширина 100% от родителя, py-2 отступы по вертикали, transition - плавный переход при наведении-->
        В корзину
      </button>
    </div>
    <div v-else class="flex items-center justify-between bg-rose-50 border border-rose-300 rounded-xl px-2 py-1">
    <!-- flex - создает контейний чтобы все элементы распологались горизонтально, 
     items-center - выравнивание по центру, justify-between - распределение элементов по горизонтали-->
      <button @click="decrement" class="text-rose-400 text-xl font-bold px-3">−</button>
      <span class="font-semibold text-gray-700">{{ quantity }}</span>
      <button @click="increment" class="text-rose-400 text-xl font-bold px-3">+</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const props = defineProps({
  id: String,
  image: String,
  title: String,
  price: Number
})

const CartStore = useCartStore()
const quantity = computed(() => CartStore.getQuantity(props.id))

function add() {
  CartStore.addToCart({
    id: props.id,
    image: props.image,
    title: props.title,
    price: props.price
  })
}

function increment() {
  CartStore.incrementQuantity(props.id)
}

function decrement() {
  CartStore.decrementQuantity(props.id)
}
</script>