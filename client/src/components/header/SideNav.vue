<template>
  <div class="fixed top-0 left-0 h-full w-64 bg-gray-200 shadow-lg p-4 z-1001">
    <button @click="$emit('close')" class="mb-4 text-right w-full text-gray-700">✕</button>
    <nav class="flex flex-col gap-4">
      <a href="#">Каталог</a>
      <a href="#">Услуги</a>
      <a href="#">Корзина</a>
      <a href="#">О нас</a>
      <a href="#">Контакты</a>
    </nav>
  </div>
</template>
