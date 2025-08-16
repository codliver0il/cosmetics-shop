<!-- components/Main/PromoSlider.vue -->

<template>
  <div
    class="relative w-full h-[600px] overflow-hidden"
    @mouseenter="pauseSlider"
    @mouseleave="resumeSlider"
  >
    <!-- Слайды с fade -->
    <router-link
      v-for="(slide, index) in slides"
      :key="index"
      :to="slide.link"
      class="absolute inset-0 w-full h-full transition-opacity duration-700"
      :class="current === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
    >
      <img
        :src="slide.image"
        alt="Промо"
        class="w-full h-full object-cover"
      />
    </router-link>

<!-- Кнопки -->
<button
  @click="prevSlide"
  class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 text-white text-xl rounded-full flex items-center justify-center hover:bg-gray-700 transition z-20"
  aria-label="Previous slide"
>
  <span class="-mt-1 mr-0.5">‹</span>
</button>

<!-- Стрелка вперёд -->
<button
  @click="nextSlide"
  class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 text-white text-xl rounded-full flex items-center justify-center hover:bg-gray-700 transition z-20"
  aria-label="Next slide"
>
  <span class="-mt-1 ml-0.5">›</span>
</button>
    <!-- Минималистичные индикаторы -->
    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="current = index"
        class="rounded-full transition-transform duration-300 focus:outline-none"
        :class="current === index
          ? 'bg-gray-200 w-1.5 h-1.5'
          : 'bg-gray-400 w-1.5 h-1.5'"
        :aria-current="current === index ? 'true' : 'false'"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = ref([
  { image: '/Promo1.png', link: '/promo' },
  { image: '/Promo2.png', link: '/promo' },
  { image: '/Promo3.jpg', link: '/promo' },
])

const current = ref(0)
let interval = null

function nextSlide() {
  current.value = (current.value + 1) % slides.value.length
}

function prevSlide() {
  current.value = (current.value - 1 + slides.value.length) % slides.value.length
}

function startSlider() {
  interval = setInterval(() => {
    nextSlide()
  }, 5000)
}

function pauseSlider() {
  clearInterval(interval)
}

function resumeSlider() {
  startSlider()
}

onMounted(() => {
  startSlider()
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>