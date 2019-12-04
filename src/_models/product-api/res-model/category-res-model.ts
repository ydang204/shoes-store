interface ChildCategoryResModel {
    id: number;
    name: string;
    slugName: string;
}


interface CategoryResModel {
    id: number;
    name: string;
    slugName: string;
    childCategories: ChildCategoryResModel[];
}


export default CategoryResModel;