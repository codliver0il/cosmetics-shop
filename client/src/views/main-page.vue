<template>
    <div class="flex flex-wrap gap-4">
        <cardComp
        v-for="product in products"
        :key="product._id"
        :id="product._id"
        :image="`http://localhost:2609${product.images[0]}`"
        :title="product.title"
        :price="product.price"
        />
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import cardComp from '../components/card-comp.vue';

const products = ref([]);

onMounted( async () => {
    try 
    {
       const res = await axios.get("http://localhost:2609/api/product/getallproducts");
       products.value = res.data;
    } 
    catch (err)
    {
        console.error('Ошибка при получении товаров: ', err);
    }
})
</script>
