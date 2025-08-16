<template>
  <div>
    <h2 class="text-xl font-semibold mb-6">Регистрация</h2> <!-- mb-6 отсуп снизу элемента -->
    <form @submit.prevent="submit" class="space-y-4">  <!-- вертикально расстояние между элементами,
      @submit.prevent="submit" - модификатор .prevent не дает перезагрузить старницу после отправки формы, иначе данные исчезнут-->
      <input
        type="text"
        placeholder="Имя"
        v-model="form.firstName"  
        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      /> <!--  v-model="form.firstName" - связывает поле (инпут) с переменной в скрипте, аналогично ниже-->

      <input
        type="text"
        placeholder="Фамилия"
        v-model="form.lastName"
        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <!-- Телефон с +7 -->
      <div class="flex items-center border border-gray-300 rounded px-3 py-2">
        <span class="text-gray-500 mr-2">+7</span> <!-- mr-2 отступ справа -->
        <input
          type="tel"
          v-model="form.phone"
          placeholder="___ ___ __ __"
          pattern="[0-9]{10}"
          maxlength="10"
          class="flex-1 outline-none"
          required
        />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white rounded py-2">
        Зарегистрироваться
      </button>
      <p class="text-xs text-gray-500 text-center">
        У меня уже есть аккаунт.
        <button type="button" @click="switchToLogin" class="text-blue-500 hover:underline">Войти</button>
      </p>

      <!-- TODO: открыть профиль после успешной регистрации -->
      <p v-if="statusMessage" :class="statusClass" class="text-sm text-center mt-2">
        {{ statusMessage }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const emit = defineEmits(['submitted','switch-form']); //emit механизм отправки событий из дочернего элемента (this) в родительский (UserProfile.vue)
const form = ref({ firstName: '', lastName: '', phone: '' });

const statusMessage = ref('');
const statusClass = ref('');
const submit = async () => {
  try {
    const response = await axios.post('http://localhost:2609/api/user/create', form.value);

    if (response.status === 200) {
      // TODO: открыть профиль
    }
  } catch (error) {
    if (error.response?.status === 400) {
      statusMessage.value = 'Этот номер уже зарегистрирован.';
      statusClass.value = 'text-red-500';
    } else {
      statusMessage.value = 'Ошибка сервера.';
      statusClass.value = 'text-red-500';
    }
  }
}
const switchToLogin = () => emit('switch-form', 'login');

</script>

