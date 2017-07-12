import * as React from 'react';

export interface IProps {
  documents: any;
};

const Search = ({ documents }: IProps) => (
  <div>
    {documents.map((d: any) => d.toJSON()).map((item: any) => (
      <div>{item.title}</div>
    ))}
  </div>
);

export default Search;
