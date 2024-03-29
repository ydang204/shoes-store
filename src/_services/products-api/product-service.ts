import { AxiosResponse } from "axios";
import qs from 'qs';
import { postAsync, getAsync } from "../../_cores/utils/http-client";
import SearchProductReqModel from "../../_models/product-api/req-model/search-product-req-model";
import GetProductsReqModel from "../../_models/product-api/req-model/get-product-req-model";
import GetProductByIdsReqModel from "../../_models/product-api/req-model/get-product-by-ids-req-model";

const PRODUCT_URL = 'api/v1/product/products';


export const parseProductsReqModel = (url: string, oldModel: GetProductsReqModel): GetProductsReqModel => {
    const params = qs.parse(url, {
        ignoreQueryPrefix: true
    });

    const { brand, category, page, query } = params;

    const brandId = brand && +brand.split("-").pop();
    const categoryId = category && +category.split("-").pop();

    const model: GetProductsReqModel = {
        ...oldModel,
        brandId: brandId,
        categoryId: categoryId,
        page: page,
        name: query
    };

    return model;
};

export const searchProductsAsync = (model: SearchProductReqModel): Promise<AxiosResponse> => {
    const url = `${PRODUCT_URL}/search`;
    return getAsync(url, model);
};


export const getProductsAsync = (model: GetProductsReqModel): Promise<AxiosResponse> => {
    const url = `${PRODUCT_URL}`;
    return getAsync(url, model);
};


export const getProductDetailsAsync = (slug: string): Promise<AxiosResponse> => {
    const url = `${PRODUCT_URL}/slug/${slug}`;
    return getAsync(url);
};

export const getProductByIdsAsync = (model: GetProductByIdsReqModel) => {
    const url = PRODUCT_URL + '/get-by-ids';
    return getAsync(url, model)
};