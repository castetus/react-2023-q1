import React from 'react';
import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export const withRouter = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    return <Component {...(props as Props)} location={useLocation()} />;
  };
};
