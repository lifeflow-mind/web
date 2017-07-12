import * as React from 'react';
import Engine from 'lifeflow-engine/dist/engine';
import { Document } from 'lifeflow-react/dist/main';
import spawner from 'lifeflow-engine/dist/runtime/eval-spawner';
import Editor from 'screens/content/editor';
import Search from 'screens/search';

const engine = new Engine(spawner);

class Root extends React.Component<any, any> {
  state: any = {
    text: `...the we can access them using its name in another document.

\`\`\`javascript
// settings: play
module.exports = require('demomodule').then(([demo]) => {
  return demo.calculate(demo.a, demo.b);
});
\`\`\`

\`\`\`latex
\frac{a \times b}{a}
\`\`\``,
  };

  update(value: string, evt: any) {
    this.setState({
      text: value,
    }, async () => {
      const module = await engine.parse(value);
      console.log(module);
      this.setState({
        module,
      });
    });

  }

  render() {
    return (
      <div style={{height: '100%', display: 'flex'}}>
        <Search />
        <Editor
          value={this.state.text}
          onChanged={this.update.bind(this)}
        />
        <div style={{flex: 1}}>
          { this.state.module && <Document blocks={this.state.module.blocks} /> }
        </div>
      </div>
    )
  }
}

export default Root;
