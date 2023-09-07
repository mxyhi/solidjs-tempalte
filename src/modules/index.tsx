import {
  Outlet,
  useResolvedPath,
  useIsRouting,
  useLocation,
  A,
} from '@solidjs/router';
import { Component, createSignal } from 'solid-js';
import Title from '../components/Title';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <Title>index{count()}</Title>
      <A href="/app">index</A>
      <h1 class="bg-red" bg="amber">
        index
      </h1>
      
      <div class="logo" />
      <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
      <button
        onClick={() => {
          setCount(count() + 1);
          console.log(count());
        }}
      >
        add
      </button>
    </div>
  );
};

export default App;
