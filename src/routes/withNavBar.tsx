import React from 'react';
import { NavBar } from 'src/components';

const withNavBar =
  (RouteComponent: React.ComponentType<any>) =>
  ({ children, ...props }: { children: any; props: any }) => {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <RouteComponent {...props}>{children}</RouteComponent>
      </React.Fragment>
    );
  };

export default withNavBar;
