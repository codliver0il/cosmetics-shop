<template>
  <div class="sort-menu">
    <div class="menu-wrapper">
      <ul class="menu">
        <li class="menu-item">
          Лицо
          <span class="arrow"></span>
          <ul class="submenu">
            <li>Очищение и снятие макияжа</li>
            <li>Сыворотки</li>
            <li>Кремы и гели</li>
            <li>Флюиды</li>
          </ul>
        </li>
        <li class="menu-item">Тело <span class="arrow"></span></li>
        <li class="menu-item">Волосы <span class="arrow"></span></li>
        <li class="menu-item">Для мужчин <span class="arrow"></span></li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Вся полоса на весь экран */
.sort-menu {
  position: fixed;
  top: 56px;
  left: 0;
  width: 100vw;
  background-color: #333;
  color: white;
  z-index: 1000;
 /* padding: 0.5rem 0;*/
  border-bottom: 1px solid #444;
}

/* Центрирование контента внутри */
.menu-wrapper {
  max-width: 80%;
  margin: 0 auto;
}

/* Список */
.menu {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

/* Пункт меню */
.menu-item {
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
}

/* Стрелка вниз */
.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid white;
  transition: transform 0.3s ease;
}

/* При наведении — стрелка вверх */
.menu-item:hover .arrow {
  transform: rotate(180deg);
}

/* Выпадающее меню */
.submenu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: black;
  border: 1px solid #ccc;
  display: none;
  padding: 0.5rem 0;
  min-width: 220px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1001;
}

.submenu li {
  padding: 0.5rem 1rem;
  white-space: nowrap;
}

/* Показывать подменю при наведении */
.menu-item:hover .submenu {
  display: block;
}
</style>
