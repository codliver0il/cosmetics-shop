import { defineStore } from "pinia";

export const useFavouritesStore = defineStore('favourites', {
    state: () => ({
        items: []
    }),
    actions: {
        addToFavourites(product) {
            const exists = this.items.find(item => item.id === product.id);
            if (!exists) 
            {
                this.items.push(product);
            }
        },
        removeFromFavourites(id) {
            this.items = this.items.filter(item => item.id !== id);
        },
        isFavourite(id) {
            return this.items.some(item => item.id === id); // some - возвращает true если есть хотя бы 1 элемент который удовл. условию 
        }
    },
    persist: true
})