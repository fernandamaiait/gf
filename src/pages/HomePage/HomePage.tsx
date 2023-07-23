import React, { SetStateAction, useState, useContext, useEffect } from 'react';
import { api } from '../../api/api';
import GroupButton from '../../design-system/GroupButton/GroupButton';
import SearchBar from './components/SearchBar';
import { GlobalContext } from '../../context/GlobalContext';
import ScreenStatus from '../../context/ScreenStatus';

const SEARCH_OPTIONS = [
  { text: 'Name', value: 'beer_name' },
  { text: 'Yeast', value: 'yeast' },
  { text: 'Hop', value: 'hops' },
  { text: 'Malt', value: 'malt' },
  { text: 'Food pairing', value: 'food' }
];

const BeerList = React.lazy(() => import('./components/BeerList'));

export default function HomePage() {
  const { setGlobalState, ...rest } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSearchOption, setSelectedSearchOption] = useState('beer_name');
  const [beers, setBeers] = useState([]);
  const [resultMessage, setResultMessage] = useState('');
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    setPageIndex(1);
    setBeers([]);
    setResultMessage('');
  }, [searchTerm, selectedSearchOption]);

  const handleSearchOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPageIndex(1);
    setBeers([]);
    fetchData(1);
  };

  const fetchData = async (_pageIndex?: number | undefined) => {
    try {
      setGlobalState({ ...rest, screenStatus: ScreenStatus.loading });
      const pi = _pageIndex ?? pageIndex;
      const response = await api(
        'get',
        `/beers?${selectedSearchOption}=${searchTerm}&page=${pi}&per_page=5`
      );
      setGlobalState({ ...rest, screenStatus: ScreenStatus.idle });

      setPageIndex((prevState) => prevState + 1);
      setBeers((prevState) => prevState.concat(response.data));
      if (response.data.length === 0) {
        if (pi == 1) {
          setResultMessage('No beers found with this term =(');
          return;
        }
        setResultMessage('No more beers with this term =(');
        return;
      }
      setResultMessage('');
    } catch (error: unknown) {
      setGlobalState({
        ...rest,
        screenStatus: ScreenStatus.error,
        errorMessage: (error as Error).message
      });
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col mt-10 w-full items-center p-4 small:p-10 max-w-[568px]">
        <SearchBar
          searchTerm={searchTerm}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setSearchTerm(e.target.value)
          }
          onSearch={handleSearchOnClick}
        />
        <GroupButton
          items={SEARCH_OPTIONS}
          selectedValue={selectedSearchOption}
          onClickItem={(value: SetStateAction<string>) => setSelectedSearchOption(value)}
        />
        {beers.length > 0 && <BeerList beers={beers} fetchData={() => fetchData()} />}
        <div className="m-4">{resultMessage}</div>
      </div>
    </div>
  );
}
