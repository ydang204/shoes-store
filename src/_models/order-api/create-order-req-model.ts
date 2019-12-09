export interface CreateOrderReqModel {
    deliveryAddress: string;
    phoneNumber: string;
    email: string;
    note: string;
    paymentMethod: string;
    total: number;
    products: OrderProduct[];
}

interface OrderProduct {
    id: number;
    count: number;
}