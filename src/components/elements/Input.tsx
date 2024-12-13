import { FC, ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ name, label, onChange }: InputProps) => {
  return (
    <div className="flex flex-col w-full pb-4">
      <label className="self-start" htmlFor={name}>
        {label}
      </label>
      <input type="text" name={name} onChange={onChange} />
    </div>
  );
};

export default Input;
