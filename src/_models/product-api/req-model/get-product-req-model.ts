import BasePagingReqModel from "../../shared/base-paging-req-model";

export default interface GetProductsReqModel extends BasePagingReqModel {
    categoryId?: number;
    brandId?: number;
    name: string;
}

