import { createSignal, type Component, batch, lazy } from 'solid-js';

import { UserRouter } from './router';
import { initRouteGuard } from './router/guard';

const App: Component = () => {
  initRouteGuard()

  return <UserRouter />;
};

export default App;
