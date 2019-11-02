import React from 'react';
import { Route } from 'react-router-dom';
import {} from 'react';
import Layout from './layout';

const RouteLayout = ({ component: Component, history, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps}></Component>
        </Layout>
      )}
    />
  );
};

export default RouteLayout;
