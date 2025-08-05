<template>
    <div id="app" class="w-4/5 m-auto min-h-screen pt-28 ">
        <Header/>
        <Sorts/>
        <router-view /> 
    </div>

</template>

<script>
import Header from "./components/heander/header-comp.vue";
import Sorts from "./components/heander/Sorts.vue";

export default {
    components: {
        Header,
        Sorts,
    }
}
</script>



