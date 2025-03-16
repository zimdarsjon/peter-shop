<script setup lang="ts">
import Item from '../components/Item.vue';
import { useShopStore } from '../stores/shop';
import { storeToRefs } from 'pinia';

const shopStore = useShopStore();

const { itemsForPurchase } = storeToRefs(shopStore);

</script>
<template>
    <div class="flex flex-column align-items-center">
        <h1>HOME</h1>
        <Item v-for="item in itemsForPurchase" :item="item" />
    </div>
</template>