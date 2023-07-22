import { SetStateAction, useState } from 'react';
import Button from '../../design-system/Button/Button';
import Input from '../../design-system/Input/Input';
import { api } from '../../api/api';
import Card from '../../design-system/Card/Card';
import GroupButton from '../../design-system/GroupButton/GroupButton';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSearchOption, setSelectedSearchOption] = useState('beer-name');
  const [beers, setBeers] = useState([]);

  const searchOptions = [
    { text: 'Name', value: 'beer_name' },
    { text: 'Yeast', value: 'yeast' },
    { text: 'Hop', value: 'hops' },
    { text: 'Malt', value: 'malt' },
    { text: 'Food pairing', value: 'food' }
  ];
  const handleSearchInputOnChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchOnClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await api('get', `/beers?${selectedSearchOption}=${searchTerm}`);
      console.log(response.data);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-yellow-50 flex justify-center">
      <div className="flex flex-col bg-red-50  mt-10 w-full items-center p-10 max-w-[568px]">
        <div className="flex items-end bg-green-200  w-full  mb-4">
          <Input
            label="Type a beer or style"
            value={searchTerm}
            onChange={handleSearchInputOnChange}
          />
          <div className="mr-4" />
          <Button onClick={handleSearchOnClick} text="Search" />
        </div>
        <GroupButton
          items={searchOptions}
          selectedValue={selectedSearchOption}
          onClickItem={(value: SetStateAction<string>) => {
            console.log(value);
            setSelectedSearchOption(value);
          }}
        />
        <div className="items-stretch bg-purple-50 w-full">
          {beers.map(({ id, name, image_url, tagline, description, abv, ibu }) => (
            <div key={id} className="my-4">
              <Card>
                <div className="flex cursor-pointer">
                  <div className="basis-1/4 flex justify-center items-center mr-8 ">
                    <img className="w-auto h-auto max-h-[150px] max-w-[150-px]" src={image_url} />
                  </div>
                  <div className="basis-3/4 flex flex-col justify-between">
                    <>
                      <div className="font-bold">{name}</div>
                      <div className="italic text-xs">{tagline}</div>
                      <div className="text-xs mt-4">{description}</div>
                    </>
                    <div className="text-xs font-medium flex justify-between mt-4">
                      <div>{abv}% ABV </div>
                      <div>{ibu} IBU </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
