import React from "react";

import "./menu-nav.scss";
import { Link } from "react-router-dom";
import CategoryMenuDropdown from "../menu-dropdown/category-menu-dropdown";
import CategoryResModel, {
  ChildCategoryResModel
} from "../../../../_models/product-api/res-model/category-res-model";
import BrandResModel from "../../../../_models/product-api/res-model/brand-res-model";
import { withRouter, RouteComponentProps } from "react-router";
import BrandMenuDropdown from "../menu-dropdown/brand-menu-dropdown";

interface Props extends RouteComponentProps {
  categories: CategoryResModel[];
  brands: BrandResModel[];
}

const MenuNav: React.FC<Props> = props => {
  const { categories, brands, history } = props;

  const handleCategoryMenuClick = (
    category: CategoryResModel | ChildCategoryResModel
  ) => {
    history.push(`products?category=${category.slugName}-${category.id}`);
  };

  const handleBrandMenuClick = (
    category: CategoryResModel | ChildCategoryResModel
  ) => {
    history.push(`products?brand=${category.slugName}-${category.id}`);
  };

  const categoriesMenu = categories.map(c => {
    if (c.childCategories != null && c.childCategories.length > 0) {
      return (
        <button className="btn menu-item" key={c.id}>
          <CategoryMenuDropdown
            category={c}
            handleCategoryMenuClick={handleCategoryMenuClick}
          />
        </button>
      );
    }
    return (
      <button
        className="btn menu-item"
        key={c.id}
        onClick={() => handleCategoryMenuClick(c)}
      >
        {c.name}
      </button>
    );
  });

  return (
    <div className="menu-nav">
      <Link to="/">
        <button className="btn menu-item">Trang chủ</button>
      </Link>
      <button className="btn menu-item">
        <BrandMenuDropdown
          brands={brands}
          handleBrandMenuClick={handleBrandMenuClick}
        />
      </button>
      {categoriesMenu}
    </div>
  );
};

export default withRouter(MenuNav);
