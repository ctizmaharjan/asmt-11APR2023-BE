import {cloneElement, useMemo} from 'react';
import {useRoutes} from 'react-router-dom';
import RouteGuard from './RouteGuard';
import {routes} from './routes';

export default function useAppRouters() {
  const route = useRoutes(routes.map((route) => route));

  // Render route with layout
  return useMemo(() => {
    const {layout, to, revertAuthCheck, isProtected} =
      route?.props?.match?.route;
    const routeWithMappedLayout = layout
      ? cloneElement(layout, {children: route})
      : route;
    return cloneElement(<RouteGuard />, {
      children: routeWithMappedLayout,
      to,
      revertAuthCheck,
      isProtected,
    });
  }, [route]);
}
