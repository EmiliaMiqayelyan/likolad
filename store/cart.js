import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => {
        const cart = JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('cart') : '[]');
        return {
            cart: []
        };
    },

    actions: {
        addToCart(product) {
            const existingProduct = this.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
            this.saveCart();
        },

        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCart();
        },

        updateQuantity(productId, quantity) {
            const product = this.cart.find(item => item.id === productId);
            if (product) {
                product.quantity = quantity;
                this.saveCart();
            }
        },

        clearCart() {
            this.cart = [];
            this.saveCart();
        },

        saveCart() {
            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        },
    },

    getters: {
        cartItems() {
            return this.cart;
        },

        productPrice() {
            return Math.round(this.cart.reduce((total, product) => total + (product.price * product.quantity), 0));
        },

        cartTotal() {
            return Math.round(this.cart.reduce((total, product) => total + (product.price * product.quantity), 0));
        }
    }
});
