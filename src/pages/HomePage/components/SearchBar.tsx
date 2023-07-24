/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import Button from '../../../design-system/Button/Button';
import Input from '../../../design-system/Input/Input';

interface ISearchBarProps {
  searchTerm: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSearch: MouseEventHandler<HTMLButtonElement>;
}

function SearchBar({ searchTerm, onChange, onSearch }: ISearchBarProps) {
  return (
    <div className="flex items-end w-full  mb-4">
      <Input label="Find a beer" value={searchTerm} onChange={onChange} />
      <div className="mr-4" />
      <Button onClick={onSearch} text="Search" disabled={searchTerm === ''} />
    </div>
  );
}

export default React.memo(SearchBar);
