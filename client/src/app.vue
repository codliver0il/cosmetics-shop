<template>
    <div id="app" class=" w-4/5 m-auto h-screen mt-10 pt-5">
        <Header/>
        <Sorts/>
        <Main class="pt-30" />
    </div>

</template>

<script>
import Header from "./components/heander/header-comp.vue";
import Main from "./components/main-comp.vue";
import Sorts from "./components/heander/Sorts.vue";
export default {
    components: {
        Header,
        Sorts,
        Main,
    }
}
</script>



