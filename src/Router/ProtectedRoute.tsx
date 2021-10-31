import { Redirect, Route, RouteProps, useLocation } from 'react-router';
import { useSessionContext } from './SessionContext';

export type ProtectedRouteProps = RouteProps;

export const ProtectedRoute: React.VFC<ProtectedRouteProps> = ({ path, ...routeProps }) => {
  const currentLocation = useLocation();
  const [sessionContext, updateSessionContext] = useSessionContext();

  const { redirectPath, isAuthenticated } = sessionContext;

  // useEffect(() => {
  //   if (isAuthenticated && path !== currentLocation.pathname && path) {
  //     setRedirectPath(path.toString());
  //   }
  // }, [isAuthenticated]);

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  }

  return <Redirect to={{ pathname: redirectPath }} />;
};
