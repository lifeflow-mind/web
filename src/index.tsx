import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import Root from 'root';
import test from 'test';
import spawner from 'lifeflow-engine/dist/runtime/eval-spawner';
import { Provider } from 'lifeflow-react/dist/main';
import Engine from 'lifeflow-engine/dist/engine';

const engine = new Engine(spawner);
engine.documents.filter(a => a);
engine.documents.upsert({
  id: '1',
  title: 'title 1',
  content: 'body 1',
});

engine.documents.upsert({
  id: '2',
  title: 'title 2',
  content: 'body 2',
});

engine.documents.select('2');

const root = document.createElement('div');
document.body.appendChild(root);

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider engine={engine}>
        <Component />
      </Provider>
    </AppContainer>,
    root,
  );
}

render(Root);

const anyModule = module as any;
console.log(anyModule);
if (anyModule.hot) {
  anyModule.hot.accept('root', () => {
    const NextRootContainer = require('./root.tsx');
    render(NextRootContainer);
  });
}
