<template>
    <div id="app">
        <Header />
        <Main />
        <Product />
        <SideNav />
    </div>
</template>

<script>
import Header from "./components/header-comp.vue";
import Main from "./components/main-comp.vue";
import Product from "./components/product-card.vue";
import SideNav from "./components/side-nav.vue";

export default {
    components: {
        Header,
        Main,
        Product,
        SideNav,
    }
}
</script>

<style>
</style>