
import { useParams } from '@solidjs/router';
import { Component } from 'solid-js';

const App: Component = () => {
    const params=useParams();
    console.log(params.all)

  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default App;
