﻿import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
<<<<<<< HEAD
import ProductItem from "../../shared/product-item/product-item";
=======
import { compose } from "recompose";
>>>>>>> ca8376e0085bda6ef44cb4e72c0d9f579ffdf18c

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import "./search.scss";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";
interface Props extends RouteComponentProps {
  hasResult: boolean;
  query: string;
}

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

  render() {
    let result = null;
    if (!this.props.hasResult) {
      result = (
        <p className="text-center">
          Xin lỗi, chúng tôi không thể tìm thấy sản phẩm
        </p>
      );
    }

<<<<<<< HEAD
    render() {

        let result = null;
        if (!this.props.hasResult) {
            result = <p className="text-center">Xin lỗi, chúng tôi không thể tìm thấy sản phẩm</p>
        }

      return (
          <main className="parent-container">
              <div className="sub-container">
                  <div className="wrapper">
                      <div className="header">
                          
                      </div>
                      <div className="content">
                        <div className="search">
                            <button className="btn hash-tag ng-star-inserted">
                                <i className="fa fa-close" style={{fontSize:'24px',marginLeft:'5px'}}/>
                                    <span>{this.state.queryTag}</span>
                            </button>
                            <div className="container">
                                <div className="row">
                                <div className="col-md-3 col-sm-4">
                                    <ProductItem />
                                </div>
                                </div>
                            </div>
                            {result}
                            
                          </div>
        
                          <div className="grid-container"></div>
                      </div>
                  </div>
              </div>
          </main>
      );
=======
    return (
      <main className="parent-container">
        <div className="sub-container">
          <div className="wrapper">
            <div className="header">
              <button className="btn hash-tag">
                <span>{this.state.queryTag}</span>
                <FontAwesomeIcon icon={faWindowClose} />
              </button>
            </div>
            <div className="content">
              {result}
              <div className="grid-container"></div>
            </div>
          </div>
        </div>
      </main>
    );
>>>>>>> ca8376e0085bda6ef44cb4e72c0d9f579ffdf18c
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Tìm kiếm" }];

export default compose<Props, {}>(
  withRouter,
  withBreadcrumb(breadcrumbItems)
)(Search);
