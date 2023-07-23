import { X } from 'lucide-react';
import React, { MouseEventHandler } from 'react';

interface IErrorStripeProps {
  text: string;
  onPressCloseButton: MouseEventHandler<HTMLButtonElement>;
}

export default function ErrorStripe({ text, onPressCloseButton }: IErrorStripeProps) {
  return (
    <div className="bg-red-500 flex-col rounded text-slate-50 absolute p-4 m-4  flex justify-between text-sm w-3/4">
      <button className="ml-xs self-end" onClick={onPressCloseButton}>
        <X size={16} />
      </button>
      <div className="pr-8">{text}</div>
    </div>
  );
}
