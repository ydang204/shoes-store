import { AxiosResponse } from "axios";
import { postAsync, getAsync } from "../../_cores/utils/http-client";

const BRAND_URL = 'api/v1/product/brands/';

export const getBrandsAsync = (): Promise<AxiosResponse> => {
    var url = `${BRAND_URL}`;

    return getAsync(url);
};