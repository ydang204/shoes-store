import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.css";
import "./search-box.scss";
import { Nav } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import SearchProductResModel from "../../../../_models/product-api/res-model/search-product-res-model";
import SearchProductReqModel from "../../../../_models/product-api/req-model/search-product-req-model";
import { searchProductsAsync } from "../../../../_services/products-api/product-service";

interface Props extends RouteComponentProps {}

interface States {
  data: [];
  query: string;
  isLoading: boolean;
}

class SearchBox extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      query: ""
    };
  }

  handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      this.props.history.push({
        pathname: "/search",
        search: this.state.query,
        state: { query: this.state.query }
      });
    }
  };

  handleInput = async (queryString: string) => {
    try {
      this.setState({ query: queryString, isLoading: true });

      const reqModel: SearchProductReqModel = {
        name: queryString
      };

      const res = await searchProductsAsync(reqModel);

      this.setState({ data: res.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <Nav navbar className="search-container">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <Typeahead
            labelKey={(option: any) => option.name}
            options={this.state.data}
            placeholder="Tìm kiếm sản phẩm..."
            onInputChange={this.handleInput}
            onKeyDown={this.handleKeyDown}
            id="searchBox"
          />
        </div>
      </Nav>
    );
  }
}

export default withRouter(SearchBox);
