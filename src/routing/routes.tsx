import {Loader} from 'atom/Loader/Loader';
import {AppLayout} from 'organish/AppLayout/AppLayout';
import {Suspense} from 'react';
import {RouteObject} from 'react-router-dom';
import RouteGuard from './RouteGuard';

import {Dashboard, Login, ResourceNotFound} from './RoutePath';
import {routePaths} from './routePaths';

type Route = {
  path: string;
  name: string;
  isProtected?: boolean;
  children?: Route[];
  layout?: JSX.Element;
  to?: string;
  revertAuthCheck?: boolean;
};

export type RouteT = Route & RouteObject;

function suspenseRoute(component: JSX.Element) {
  return <Suspense fallback={<Loader />}>{component}</Suspense>;
}

export const routes: RouteT[] = [
  {
    ...routePaths.login,
    element: suspenseRoute(
      <RouteGuard revertAuthCheck to={routePaths.dashboard.path}>
        <Login />
      </RouteGuard>
    ),
    layout: <AppLayout />,
  },

  {
    ...routePaths.dashboard,
    element: suspenseRoute(
      <RouteGuard to={routePaths.login.path} isProtected={true}>
        <Dashboard />
      </RouteGuard>
    ),

    layout: <AppLayout />,
  },

  {
    ...routePaths.resourceNotFound,
    element: suspenseRoute(<ResourceNotFound />),
    isProtected: false,
  },
];
