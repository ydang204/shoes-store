import React from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./menu-dropdown.scss";
import CategoryResModel, {
  ChildCategoryResModel
} from "../../../../_models/product-api/res-model/category-res-model";

interface Props {
  category: CategoryResModel;
  handleCategoryMenuClick: (
    catgory: CategoryResModel | ChildCategoryResModel
  ) => void;
}

const CategoryMenuDropdown: React.FC<Props> = props => {
  const { category, handleCategoryMenuClick } = props;

  const childCategories = category.childCategories.map(c => (
    <DropdownItem onClick={() => handleCategoryMenuClick(c)}>
      {c.name}
    </DropdownItem>
  ));

  return (
    <UncontrolledDropdown>
      <DropdownToggle className="menu" color="default">
        {category.name}
      </DropdownToggle>
      <DropdownMenu>{childCategories}</DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default CategoryMenuDropdown;
