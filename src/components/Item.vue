<script setup lang="ts">
import Card from 'primevue/card';
import type { Item } from '../models';

const props = defineProps<{
    item: Item
}>();

</script>
<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img v-if="props.item.image" alt="user header" :src="props.item.image" class="w-full" />
        </template>
        <template #title>{{ props.item.name ?? '' }}</template>
        <template #subtitle>{{ `$${props.item.price}` }}</template>
        <template #content>
            <p class="m-0">{{ props.item.description ?? '' }}</p>
        </template>
        <!-- <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template> -->
    </Card>
</template>../models