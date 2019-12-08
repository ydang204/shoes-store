export default interface ProductDetailsResModel {
    brand: Brand;
    category: Brand;
    name: string;
    price: number;
    slugName: string;
    categoryName: string;
    brandName: string;
    productImages: ProductDetailsImage[];
}

interface ProductDetailsImage {
    imageUrl: string;
}

interface Brand {
    id: number;
    name: string;
    slugName: string;
}