interface BasePagingResModel<T> {
    items: T[];
    page: number;
    pageSize: number;
    total: number;
    totalPage: number;
}

export default BasePagingResModel;

