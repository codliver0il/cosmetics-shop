import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        addToCart(product) {
            const existing = this.items.find(item => item.id === product.id);
            if (existing)
            {
                existing.quantity++;
            }
            else 
            {
                this.items.push({ ...product, quantity: 1});
            }
        },
        removeFromCart(id) {
            this.items = this.items.filter(item => item.id !== id);
        },
        clearCart(){
            this.items = [];
        },
        incrementQuantity(id) {
            const item = this.items.find(item => item.id === id);
            if (item)
            {
                item.quantity++;
            }
        },
        decrementQuantity(id) {
            const item = this.items.find(item => item.id === id);
            if (item)
            {
                item.quantity--;
                if(item.quantity === 0)
                {
                    this.items = this.items.filter(item => item.id !== id);
                }
            }
        },
        getQuantity(id) {
            const item = this.items.find(item => item.id === id);
            if (item)
            {
                return item.quantity;
            }
            else
            {
                return 0;
            }
        }  
        // localStorage через pinia-plugin-persistedstate
    }
})