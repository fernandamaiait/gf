import { ChangeEventHandler } from 'react';

export default function Input({
  label,
  placeholder,
  id,
  type = 'text',
  value,
  onChange
}: IInputProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-sm text-slate-900 font-bold">
        {label}
      </label>
      <input
        className="border rounded py-2 px-2 mt-2"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

interface IInputProps {
  label: string;
  placeholder?: string;
  id?: string;
  type?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
