<template>
    <div id="app" class="w-4/5 m-auto h-screen mt-10">
        <Header class="mb-7" />
        <Main />
    </div>

</template>

<script>
import Header from "./components/header-comp.vue";
import Main from "./components/main-comp.vue";

export default {
    components: {
        Header,
        Main,
    }
}
</script>
