/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    value: string;
    defaultValue?: string;
    language: string;
    theme?: string;
    options?: any;
    context?: any;
    editorDidMount?: (editor: any, monaco: any) => any;
    editorWillMount?: (monaco: any) => any;
    onChange?: (value: string, event: any) => any;
    requireConfig?: any;
}
declare class MonacoEditor extends React.Component<IProps, any> {
    constructor(props: IProps);
    __current_value: any;
    __prevent_trigger_change_event: any;
    editor: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IProps): void;
    editorWillMount(monaco: any): void;
    editorDidMount(editor: any, monaco: any): void;
    afterViewInit(): void;
    initMonaco(): void;
    destroyMonaco(): void;
    render(): JSX.Element;
}
export default MonacoEditor;
