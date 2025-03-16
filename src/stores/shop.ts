import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Item } from '../models';

export const useShopStore = defineStore('shop', () => {
  
    const itemsForPurchase = ref<Item[]>([
        {
            id: 1,
            name: 'Cutting Board',
            price: 39.98,
            description: 'Introducing the ChefMaster Pro Cutting Board—your kitchen’s new best friend. Crafted from premium bamboo, this board is designed for durability and a sleek, stain-resistant surface that makes slicing and dicing a breeze. With its non-slip edges and reversible design, it’s perfect for every meal prep and easy cleanup.',
            image: './cutting-board.jpg',
            tags: ['cutting-board']
        }
    ]);


    return {
        itemsForPurchase
    }
        
})