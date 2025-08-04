<template>
    <div id="app" class="w-4/5 m-auto h-screen mt-10 pt-16 ">
        <Header class="mb-7" />
        <router-view />
        <Sorts/>
    </div>

</template>

<script>
import Header from "./components/heander/header-comp.vue";
import Sorts from "./components/heander/Sorts.vue";
//import Main from "./components/main-comp.vue";

export default {
    components: {
        Header,
        Sorts,
//        Main,
    }
}
</script>



