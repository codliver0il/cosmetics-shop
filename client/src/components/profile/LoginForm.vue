<template>
  <div>
    <h2 class="text-xl font-semibold mb-6">Вход</h2>
    <form @submit.prevent="submit" class="space-y-4">
      <div class="flex items-center border border-gray-300 rounded px-3 py-2">
        <span class="text-gray-500 mr-2">+7</span>
        <input
          type="tel"
          v-model="phone"
          placeholder="___ ___ __ __"
          pattern="[0-9]{10}"
          maxlength="10"
          class="flex-1 outline-none"
          required
        />
      </div>

      <button type="submit" class="w-full bg-blue-500 text-white rounded py-2">
        Войти
      </button>

      <p class="text-xs text-gray-500 text-center">
        У меня нет аккаунта.
        <button type="button" @click="switchToRegister" class="text-blue-500 hover:underline">Зарегистрироваться</button>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submitted','switch-form'])

const phone = ref('')

const submit = () => {
  emit('submitted', { phone: phone.value })
}

const switchToRegister = () => emit('switch-form', 'register')
</script>