<template>
  <div class="relative z-[1001]">
    <div class="flex items-center gap-2 cursor-pointer" @click="togglePanel">
    <!-- gap-2 - создает расстояния между элементами в контейнере flex,
     cursor-pointer - смена указателя мыши на руку -->
      <img src="/2.png" alt="Profile" class="w-5" />
      <b>Профиль</b>
    </div>

    <div v-if="isOpen" class="fixed top-0 right-0 h-full w-[33%] min-w-[300px] bg-white shadow-xl z-[1500] transition-transform duration-300">
      <!-- transition-transform duration-300 - создает плавное открытие панели в 300 мс -->
      <button @click="togglePanel" class="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-black"> 
        <!-- absolute top-3 right-3 - создание элемента в правом верхнем углу с отступом 3 -->
        &times; <!-- это просто символ X -->
      </button>

      <div class="p-8"> <!-- отступ со всех сторон внутри элемента -->
        <component :is="currentForm" 
        @submitted="onFormSubmitted"
        @switch-form="switchForm"/> <!-- вставляет компонент либо регистрация либо вход + два слушателя событий (делегаты)-->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import RegisterForm from '../profile/RegisterForm.vue'
import LoginForm from '../profile/LoginForm.vue'

const isOpen = ref(false)
const mode = ref('register')

const togglePanel = () => { isOpen.value = !isOpen.value }

const currentForm = computed(() => mode.value === 'register' ? RegisterForm : LoginForm)

const onFormSubmitted = (data) => {
  console.log('Отправка формы:', data)
  //TODO
  togglePanel()
}

const switchForm = (newMode) => {
  if (newMode !== 'register' && newMode !== 'login') {
    console.warn('Invalid mode:', newMode)
    return
  }
  mode.value = newMode
}
</script>
