import React from 'react';
import Card from '../../../design-system/Card/Card';
import Button from '../../../design-system/Button/Button';

interface Beer {
  id: string;
  name: string;
  image_url: string;
  tagline: string;
  description: string;
  abv: string;
  ibu: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BeerList({ beers, fetchData }: { beers: Array<Beer>; fetchData: any }) {
  console.log(fetchData);
  return (
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
      <Button text="Give me more" onClick={fetchData} />
    </div>
  );
}

export default React.memo(BeerList);
