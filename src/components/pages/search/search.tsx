import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

import ProductItem from "../../shared/product-item/product-item";
import { compose } from "recompose";


import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import "./search.scss";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";
interface Props extends RouteComponentProps {
  hasResult: boolean,
  query: string;
}

type States = {
  hasResult: boolean,
  queryTag: string
};

class Search extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasResult: false,
      queryTag: ""
    };
  }

  componentDidMount() {
    let param = this.props.history.location.state;
    this.setState({ queryTag: param.query });
    this.setState({ hasResult: true });
  }

  componentDidUpdate(prevProps: Props, prevState: any) {
    let param = this.props.history.location.state;

    if (param.query != prevState.queryTag) {
      this.setState({ queryTag: param.query });
      this.setState({ hasResult: true });
    }
  }

  //Function
  removeQueryTag(e: any) {
    this.setState({ hasResult: false });
    this.setState({ queryTag: "" })
  }

  render() {
    return (
      <div className="container breadcrumb-container">
        <div className="wrapper">
          <div className="content">
            <button hidden={this.state.queryTag == ""} className="btn hash-tag ng-star-inserted" onClick={this.removeQueryTag.bind(this)}>
              <i className="fa fa-close" />
              <span>{this.state.queryTag}</span>
            </button>
            <div className="text-center" hidden={this.state.hasResult != false}>
              <p>Xin lỗi, chúng tôi không thể tìm thấy sản phẩm</p>
            </div>

            <div hidden={this.state.hasResult == false} className="grid-container">
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

              </div>
            </div>



          </div>
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
