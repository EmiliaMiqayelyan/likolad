import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        return {
            cart,
            deliveryFee: 1000,
        };
    },

    actions: {
        addToCart(product: any) {
            const existingProduct = this.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
            this.saveCart();
        },

        removeFromCart(productId: any) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCart();
        },

        updateQuantity(productId: any, quantity: number) {
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
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
    },

    getters: {
        cartItems() {
            return this.cart;
        },

        productPrice() {
            return Math.round(this.cart.reduce((total: number, product: any) => total + (product.price * product.quantity), 0));
        },

        cartTotal() {
            const productsTotal = this.cart.reduce((total: number, product: any) => total + (product.price * product.quantity), 0);
            return Math.round(productsTotal + this.deliveryFee);
        }
    }
});
