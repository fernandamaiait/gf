import { X } from 'lucide-react';
import React, { MouseEventHandler } from 'react';

interface IErrorStripeProps {
  text: string;
  onPressCloseButton: MouseEventHandler<HTMLButtonElement>;
}

export default function ErrorStripe({ text, onPressCloseButton }: IErrorStripeProps) {
  return (
    <div className="bg-error-500 text-surface-0 absolute left-sm right-sm top-sm flex justify-between  rounded-small p-xs text-body1 large:left-1/2 large:translate-x-xs">
      {text}
      <button className="ml-xs" onClick={onPressCloseButton}>
        <X />
      </button>
    </div>
  );
}
