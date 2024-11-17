import type1 from "@/assets/type1.jpg"
import type2 from "@/assets/type2.jfif"
import type3 from "@/assets/type3.jfif"
import type4 from "@/assets/type4.jfif"
import type5 from "@/assets/type5.jfif"
import type6 from "@/assets/type6.jfif"

export const productsData = [
    {
        id: '1000',
        name: 'Motiolads',
        image: type1,
        category: '',
    },
    {
        id: '1001',
        name: 'Peacholads',
        image: type2,
        category: '',
    },
    {
        id: '1002',
        name: 'Flowery',
        image: type3,
        category: '',
    },
    {
        id: '1003',
        name: 'Pecan',
        image: type4,
        category: '',
    },
    {
        id: '1004',
        name: 'Nuts Flowery',
        image: type5,
        category: '',
    },
    {
        id: '1005',
        name: 'Flowery Strawberry',
        image: type6,
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
