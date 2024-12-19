import type { SyntheticEvent } from "react";
import StarIcon from "./StarIcon";

interface StarInputProps {
  filled: boolean;
  disabled: boolean;
  onChange?: (e: SyntheticEvent) => void;
  value: number;
}

const StarInput: React.FC<StarInputProps> = ({ disabled, filled, onChange, value }) => {
  return (
    <label>
      <input
        className="hidden border-none p-0 bg-transparent"
        type="radio"
        name="starRating"
        onChange={onChange}
        value={value}
      />
      <StarIcon disabled={disabled} filled={filled} />
    </label>
  );
};

export default StarInput;
