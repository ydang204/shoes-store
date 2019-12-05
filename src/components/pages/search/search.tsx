import React, { Component, Fragment } from "react";
import qs from "qs";
import {
  withRouter,
  RouteComponentProps,
  RouteChildrenProps
} from "react-router";
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
    const params = qs.parse(this.props.history.location.search, {
      ignoreQueryPrefix: true
    });
    this.setState({ queryTag: params.query });
  }

  componentDidUpdate(prevProps: Props, prevState: any) {
    const params = qs.parse(this.props.history.location.search, {
      ignoreQueryPrefix: true
    });

    if (params.query != prevState.queryTag) {
      this.setState({ queryTag: params.query });
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
          <div className="grid-container">
            <div className="row"></div>
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
