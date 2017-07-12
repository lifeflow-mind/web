import * as React from 'react';
import MonacoEditor from './monaco';

export interface IProps {
  language?: string,
  options?: any,
  onChanged: (value: string, event: any) => any,
  document: any,
  setDocument: any,
}

export class Editor extends React.Component<IProps, any> {
  static defaultProps: any = {
    language: 'markdown',
    options: {
      selectOnLineNumbers: true,
      wrappingColumn: 0,
      wrappingIndent: 'indent',
    }
  }

  resizeHandler: any;

  componentWillUnmount() {
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  setEditor(editor: any) {
    editor.getModel().updateOptions({
      tabSize: 2,
    });

    this.resizeHandler = (() => {
      editor.layout();
    });

    window.addEventListener('resize', this.resizeHandler);
  }

  onChanged(value: string) {
    const { setDocument, document } = this.props;
    setDocument({
      ...document,
      content: value,
    })
  }

  render() {
    const {
      language,
      options,
      onChanged,
      document,
    } = this.props;

    return (
      <MonacoEditor
        className="test"
        theme="vs-dark"
        editorDidMount={this.setEditor.bind(this)}
        onChange={this.onChanged.bind(this)}
        value={ (document && document.content) || '' }
        language={language || 'markdown'}
        options={options}
      />
    );
  }
}

export default Editor;
