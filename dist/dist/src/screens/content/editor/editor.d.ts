/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    language?: string;
    options?: any;
    onChanged: (value: string, event: any) => any;
    value: string;
}
export declare class Editor extends React.Component<IProps, any> {
    static defaultProps: any;
    resizeHandler: any;
    componentWillUnmount(): void;
    setEditor(editor: any): void;
    render(): JSX.Element;
}
export default Editor;
