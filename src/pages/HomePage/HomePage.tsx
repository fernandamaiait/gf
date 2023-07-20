import { SetStateAction, useState } from 'react';
import Button from '../../design-system/Button/Button';
import Input from '../../design-system/Input/Input';
import { api } from '../../api/api';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputOnChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      api('get', '/beers');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-red-400  mt-10 w-full justify-center p-10">
      <div className="flex items-end bg-green-200  w-full max-w-[568px]">
        <Input
          label="Type a beer or style"
          value={searchTerm}
          onChange={handleSearchInputOnChange}
        />
        <div className="mr-4" />
        <Button onClick={handleSearchOnClick} text="Search" />
      </div>
    </div>
  );
}
