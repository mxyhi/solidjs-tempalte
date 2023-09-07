import { useParams } from '@solidjs/router';
import { Component } from 'solid-js';

export const title = 'App';

const App: Component = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default App;
