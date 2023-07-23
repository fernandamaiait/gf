import React from 'react';
import Button from '../../../design-system/Button/Button';
import Input from '../../../design-system/Input/Input';

interface ISearchBarProps {
  searchTerm: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSearch: any;
}

function SearchBar({ searchTerm, onChange, onSearch }: ISearchBarProps) {
  return (
    <div className="flex items-end w-full  mb-4">
      <Input label="Type a beer or style" value={searchTerm} onChange={onChange} />
      <div className="mr-4" />
      <Button onClick={onSearch} text="Search" disabled={searchTerm === ''} />
    </div>
  );
}

export default React.memo(SearchBar);
