import { AxiosResponse } from "axios";
import { postAsync, getAsync } from "../../_cores/utils/http-client";
import SearchProductReqModel from "../../_models/product-api/req-model/search-product-req-model";
import GetProductsReqModel from "../../_models/product-api/req-model/get-product-req-model";

const PRODUCT_URL = 'api/v1/product/products';

export const searchProductsAsync = (model: SearchProductReqModel): Promise<AxiosResponse> => {
    const url = `${PRODUCT_URL}/search`;

    return getAsync(url, model);
};


export const getProductsAsync = (model: GetProductsReqModel): Promise<AxiosResponse> => {
    const url = `${PRODUCT_URL}`;

    return getAsync(url, model);
};