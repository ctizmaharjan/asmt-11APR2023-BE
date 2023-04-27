import {Loader} from 'atom/Loader/Loader';
import React, {memo} from 'react';
import {Navigate} from 'react-router-dom';
import {routePaths} from './routePaths';
import useLocalStorage from 'utils/hooks/useLocalStore';

type RouteGuardProps = {
  revertAuthCheck?: boolean;
  children?: React.ReactNode;
  to?: string;
  isProtected?: boolean;
};

const RouteGuard = ({
  revertAuthCheck = false,
  children,
  to = routePaths.login.path,
  isProtected = false,
}: RouteGuardProps) => {
  const [user] = useLocalStorage<any>('user');

  console.log(user, '==>>>');

  if (!!!user?.UserId && isProtected) {
    return <Navigate to={routePaths.login.path} replace />;
  }
  return <>{children}</>;
};
export default memo(RouteGuard);
