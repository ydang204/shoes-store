export default interface GetProductsResModel {
    name: string;
    price: number;
    slugName: string;
    categoryName: string;
    brandName: string;
    productImages: ProductImageResModel[];
}

export interface ProductImageResModel {
    imageUrl: string;
}