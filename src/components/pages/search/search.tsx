import React, { Component, Fragment } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

import ProductItem from "../../shared/product-item/product-item";
import { compose } from "recompose";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import "./search.scss";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";

interface Props extends RouteComponentProps {}

type States = {
  queryTag: string;
};

class Search extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      queryTag: ""
    };
  }

  componentDidMount() {
    let param = this.props.history.location.state;
    this.setState({ queryTag: param.query });
  }

  componentDidUpdate(prevProps: Props, prevState: any) {
    let param = this.props.history.location.state;

    if (param.query != prevState.queryTag) {
      this.setState({ queryTag: param.query });
    }
  }

  //Function
  removeQueryTag = () => {
    this.setState({ queryTag: "" });
  };

  render() {
    const displayResult =
      this.state.queryTag === "" ? (
        <div className="text-center">
          Xin lỗi, chúng tôi không thể tìm thấy sản phẩm
        </div>
      ) : (
        <Fragment>
          {/* <button
            hidden={this.state.queryTag == ""}
            className="btn hash-tag ng-star-inserted"
            onClick={this.removeQueryTag}
          >
            <i className="fa fa-close" />
            <span>{this.state.queryTag}</span>
          </button> */}
          <div className="grid-container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-sm-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-sm-6">
                <ProductItem />
              </div>
            </div>
          </div>
        </Fragment>
      );

    return (
      <div className="container breadcrumb-container">
        <div className="wrapper">
          <div className="content">{displayResult}</div>
        </div>
      </div>
    );
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Tìm kiếm" }];

export default compose<Props, {}>(
  withRouter,
  withBreadcrumb(breadcrumbItems)
)(Search);
