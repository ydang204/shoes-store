import React, { Fragment } from "react";
import Breadcrumb from "./breadcrumb";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";

const withBreadcrumb = (breadcrumbItems: BreadcrumbItem[]) => <
  P extends object
>(
  Component: React.ComponentType<P>
) =>
  class WithBreadcrumb extends React.Component<P> {
    render() {
      const { ...props } = this.props;

      return (
        <Fragment>
          <Breadcrumb items={breadcrumbItems} />
          <Component {...(props as P)} />
        </Fragment>
      );
    }
  };

export default withBreadcrumb;
