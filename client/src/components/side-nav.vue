<template>
 <div class="sidenav">
        <nav>
                <a href="#">Каталог</a>
                <a href="#">Услуги</a>
                <a href="#">Корзина</a>
                <a href="#">нас</a>
                <a href="#">Контакты</a>
        </nav>
     </div>
</template>

<script setup>

</script>

<style scoped>
.sidenav{
    height: 100%;
    width: 100px;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ccc;
    overflow-x: hidden;
    padding-top: 20px;
}

.sidenav a{
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 16px;
    color: rgb(33, 31, 33);
    display: block;
}

.sidenav a:hover{
    color: #f1f1f1;
}

</style>