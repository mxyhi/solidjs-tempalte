import {
  Outlet,
  useResolvedPath,
  useIsRouting,
  useLocation,
} from '@solidjs/router';
import { Component } from 'solid-js';
import Title from '../components/Title';

export const title = 'app1';

const App: Component = () => {
  return (
    <div>
      <Title>111</Title>
      <Outlet />
      <h1>app1</h1>
    </div>
  );
};

export default App;
