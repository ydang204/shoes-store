import { AxiosResponse } from "axios";
import { postAsync, getAsync } from "../../_cores/utils/http-client";
import LoginReqModel from "../../_models/user-api/req-model/login-req-model";
import { CreateOrderReqModel } from "../../_models/order-api/create-order-req-model";


const ORDER_URL = 'api/v1/order/auth';

export const createOrder = (model: CreateOrderReqModel): Promise<AxiosResponse> => {
    return postAsync(ORDER_URL, model);
};

