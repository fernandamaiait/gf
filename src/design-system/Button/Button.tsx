import { MouseEventHandler } from 'react';

interface IButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, onClick }: IButtonProps) {
  return (
    <div>
      <button
        className="block py-2 px-4 bg-blue-950 rounded text-slate-50 w-full"
        onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
