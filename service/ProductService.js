import productSlider from '@/assets/product-slider.svg';

export const productsData = [
    {
        id: '1000',
        name: 'Name',
        image: productSlider,
        price: "2000 AMD",
        category: '',
    },
    {
        id: '1001',
        name: 'Name',
        image: productSlider,
        price: "2000 AMD",
        category: '',
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Name',
        image: productSlider,
        price: "2000 AMD",
        category: '',
    },
    {
        id: '1003',
        name: 'Name',
        image: productSlider,
        price: "2000 AMD",
        category: '',
    },
    {
        id: '1004',
        name: 'Name',
        image: productSlider,
        price: "2000 AMD",
        category: '',
    },
    {
        id: '1005',
        name: 'Name',
        image: productSlider,
        price: "2000 AMD",
        category: '',
    },
];


export const ProductService = {
    getProductsData() {
        return productsData;
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },
};
