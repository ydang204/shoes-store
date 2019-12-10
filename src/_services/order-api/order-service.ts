import { AxiosResponse } from "axios";
import { postAsync, getAsync } from "../../_cores/utils/http-client";
import LoginReqModel from "../../_models/user-api/req-model/login-req-model";
import { CreateOrderReqModel, OrderProduct } from "../../_models/order-api/req-model/create-order-req-model";
import { Subject } from 'rxjs';

const ORDER_URL = 'api/v1/order/orders';

export const createOrderAsync = (model: CreateOrderReqModel): Promise<AxiosResponse> => {
    return postAsync(ORDER_URL, model);
};

const _orderSubject = new Subject();
const _orderProducts: OrderProduct[] = [];

export const orderSubject = {
    addProduct: (product: OrderProduct) => {
        if (!_orderProducts.find(p => p.id == product.id)) {
            _orderProducts.push(product);
        } else {
            const index = _orderProducts.findIndex(p => p.id == product.id);
            const p = _orderProducts[index];
            _orderProducts[index].count = product.count + p.count;
        }
        _orderSubject.next(product);
    },
    getProduct: () => _orderSubject.asObservable(),
    getProducts: () => _orderProducts,
    getTotalProducts: () => _orderProducts.map(p => p.count).reduce((a, b) => a + b, 0),
    getTotalPrice: () => {
        const prices = _orderProducts.map(p => p.count * p.price);
        return prices.reduce((a, b) => a + b, 0)
    }
};
