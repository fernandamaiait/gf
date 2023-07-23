import { MouseEventHandler } from 'react';

interface IButtonProps {
  text: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, disabled = false, onClick }: IButtonProps) {
  return (
    <div>
      <button
        className={`${
          disabled ? ' bg-slate-300' : 'bg-slate-900'
        } block py-2 px-4 rounded text-slate-50 w-full`}
        onClick={onClick}
        disabled={disabled}>
        {text}
      </button>
    </div>
  );
}
