import {lazy} from 'react';

const Login = lazy(() =>
  import('screens/Auth/LoginScreen').then((module) => ({
    default: module.LoginScreen,
  }))
);

const Dashboard = lazy(() =>
  import('screens/Dashboard/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

const ResourceNotFound = lazy(() =>
  import('screens/NotFound/ResourceNotFound').then((module) => ({
    default: module.ResourceNotFount,
  }))
);

export {Login, ResourceNotFound, Dashboard};
