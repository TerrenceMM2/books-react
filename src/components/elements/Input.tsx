import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ name, children, onChange }) => {
  return (
    <div className="mb-4 md:m-0 md:w-full">
      <input className="p-2 rounded w-full h-10 md:h-full md:m-0" type="text" name={name} onChange={onChange} />
      {children}
    </div>
  );
};

export default Input;
