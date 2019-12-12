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
import BrandResModel from "../../../../_models/product-api/res-model/brand-res-model";

interface Props {
  brands: BrandResModel[];
  handleBrandMenuClick: (
    catgory: CategoryResModel | ChildCategoryResModel
  ) => void;
}

const BrandMenuDropdown: React.FC<Props> = props => {
  const { brands, handleBrandMenuClick } = props;

  const childCategories = brands.map(b => (
    <DropdownItem onClick={() => handleBrandMenuClick(b)} key={b.id}>
      {b.name}
    </DropdownItem>
  ));

  return (
    <UncontrolledDropdown>
      <DropdownToggle className="menu" color="default">
        Thương hiệu
      </DropdownToggle>
      <DropdownMenu>{childCategories}</DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default BrandMenuDropdown;
