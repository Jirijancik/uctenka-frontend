import { useEffect } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
} & RouteProps;

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  redirectPath,
  setRedirectPath,
  path,
  ...routeProps
}: ProtectedRouteProps) {
  const currentLocation = useLocation();

  useEffect(() => {
    if (isAuthenticated && path !== currentLocation.pathname) {
      const x: any = path;
      setRedirectPath(x);
    }
  }, [isAuthenticated, path]);

  if (isAuthenticated && redirectPath !== currentLocation.pathname) {
    console.log('WENT FUCKING HJERE', routeProps, path);

    return <Route {...routeProps} />;
  }
  console.log('WHAAAT FUCKING HJERE');
  return <Redirect to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }} />;
}
