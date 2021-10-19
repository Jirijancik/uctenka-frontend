import { useEffect } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
} & RouteProps;

export const ProtectedRoute: React.VFC<ProtectedRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  redirectPath,
  setRedirectPath,
  path,
  ...routeProps
}) => {
  const currentLocation = useLocation();

  useEffect(() => {
    if (isAuthenticated && path !== currentLocation.pathname && path) {
      setRedirectPath(path.toString());
    }
  }, [currentLocation.pathname, isAuthenticated, path, setRedirectPath]);

  if (isAuthenticated && redirectPath !== currentLocation.pathname) {
    return <Route {...routeProps} />;
  }

  return <Redirect to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }} />;
};
