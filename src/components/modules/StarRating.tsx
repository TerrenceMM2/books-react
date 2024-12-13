import type { SyntheticEvent } from "react";
import { StarInput } from "../elements";

interface StarRatingProps {
  id: string;
  rating: number;
  disabled: boolean;
  onChange?: (e: SyntheticEvent) => void;
}

const StarRating = ({ id, rating, disabled, onChange }: StarRatingProps) => {
  const renderStarRating = () =>
    Array.from({ length: 5 }).map((_, index) => (
      <StarInput
        onChange={onChange}
        disabled={disabled}
        key={`${id}-rating-${index}`}
        filled={rating >= index + 1}
        value={index + 1}
      />
    ));

  return <div className="inline-block pr-2">{renderStarRating()}</div>;
};

export default StarRating;
