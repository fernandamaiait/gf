import { MouseEventHandler } from 'react';

interface Item {
  text: string;
  value: string;
}

export default function GroupButton({
  items,
  selectedValue,
  onClickItem
}: {
  items: Array<Item>;
  selectedValue: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickItem: any;
}) {
  return (
    <div className="inline-flex rounded-md shadow-sm w-full">
      {items.map(({ text, value }) => (
        <GroupButtonItem
          key={value}
          text={text}
          selected={value === selectedValue}
          onClick={() => onClickItem(value)}
        />
      ))}
    </div>
  );
}

function GroupButtonItem({
  text,
  selected,
  onClick
}: {
  text: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type="button"
      className={`${
        selected ? 'bg-yellow-500  text-yellow-900' : ' text-yellow-600'
      } py-3 px-4 grow justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border border-yellow-600 font-medium align-middle focus:z-10  transition-all text-sm`}
      onClick={onClick}>
      {text}
    </button>
    // <button
    //   type="button"
    //   className={`${
    //     selected ? 'bg-yellow' : ''
    //   }inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-500 border-r border-blue-500`}
    //   data-te-ripple-init
    //   data-te-ripple-color="light">
    //   {text}
    // </button>
  );
}
