export default interface BasePagingReqModel {
    page?: number;
    pageSize?: number;
    sortNames?: string[];
    sortDirections?: OrderDirection[];
}

export enum OrderDirection {
    OrderBy,
    OrderByDescending
}
