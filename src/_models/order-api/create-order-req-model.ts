export interface CreateOrderReqModel {
    deliveryAddress: string;
    phoneNumber: string;
    email: string;
    note: string;
    paymentMethod: string;
    total: number;
    products: OrderProduct[];
}

export interface OrderProduct {
    id: number;
    count: number;
    price: number;
}