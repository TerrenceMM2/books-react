import { FC, SyntheticEvent } from "react";
import { Button, Input } from "../elements";
import StarRating from "./StarRating";

type ReviewFormProps = {
  starRating: number;
  onChange: (e: SyntheticEvent) => void;
  onSubmit: () => void;
};

const ReviewForm: FC<ReviewFormProps> = ({ starRating, onChange, onSubmit }) => {
  return (
    <form className="flex flex-col items-start mb-4">
      <Input name="reviewText" onChange={onChange} />
      <StarRating id="new-review" onChange={onChange} rating={starRating} disabled={false} />
      <Button label={"Submit"} onClick={onSubmit} />
    </form>
  );
};

export default ReviewForm;
