<template>
    <div id="app" class="w-4/5 m-auto min-h-screen pt-28 ">
        <Header/>
        <router-view /> 
    </div>

</template>

<script>
import Header from "./components/header/header-comp.vue";

export default {
    components: {
        Header,
    }
}
</script>