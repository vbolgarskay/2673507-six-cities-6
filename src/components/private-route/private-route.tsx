import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(
    (state: RootState) => state.authorizationStatus
  );

  if (authorizationStatus === 'Unknown') {
    return <Navigate to="/login" />;
  }

  const isAuthorized = authorizationStatus === 'Auth';

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
