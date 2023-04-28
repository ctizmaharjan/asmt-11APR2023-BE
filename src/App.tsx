import React from 'react';
import {useAppRouters} from 'routing';

const App = () => {
  const route = useAppRouters();
  return <>{route}</>;
};

export default App;
