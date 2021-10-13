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

  console.log({
    isAuthenticated,
    authenticationPath,
    redirectPath,
  });
  console.log('went OUT', path, currentLocation.pathname);
  useEffect(() => {
    console.log('went inXXXX', currentLocation.pathname);
    if (isAuthenticated && path) {
      console.log('went in', currentLocation.pathname, path);
      const x: any = path;
      setRedirectPath(x);
    }
  }, [isAuthenticated, path]);

  console.log(
    isAuthenticated && redirectPath === currentLocation.pathname,
    redirectPath === currentLocation.pathname,
    redirectPath,
    currentLocation.pathname,
    routeProps,
  );

  if (isAuthenticated && redirectPath === currentLocation.pathname) {
    console.log('WENT FUCKING HJERE', routeProps, path);

    return <Route {...routeProps} />;
  }
  console.log('WHAAAT FUCKING HJERE');
  return <Redirect to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }} />;
}
