import { AxiosResponse } from "axios";
import { postAsync, getAsync } from "../../_cores/utils/http-client";

const CATEGORY_URL = 'api/v1/product/categories';

export const getCategoriesAsync = (): Promise<AxiosResponse> => {
    var url = `${CATEGORY_URL}`;

    return getAsync(url);
};