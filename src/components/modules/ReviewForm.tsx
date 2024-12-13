import { useState } from "react";
import type { SyntheticEvent } from "react";
import { Button, Input } from "../elements";
import StarRating from "./StarRating";
import { useParams } from "@tanstack/react-router";

interface ReviewFormValues {
  volumeId: string;
  reviewText: string;
  starRating: number;
}

const ReviewForm = () => {
  const { volumeId } = useParams({ strict: false });
  const [formData, setFormData] = useState<ReviewFormValues>({
    volumeId: volumeId ?? "",
    reviewText: "",
    starRating: 0,
  });

  const handleOnChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.name === "starRating" ? parseInt(target.value) : target.value });
  };

  const handleOnSubmit = () => {
    console.log("%c SUBMIT %O", "background:seagreen;color:white;", formData);
  };

  return (
    <form className="flex flex-col items-start pb-4">
      <Input name="reviewText" onChange={handleOnChange} label="New Review" />
      <StarRating id="new-review" onChange={handleOnChange} rating={formData.starRating} disabled={false} />
      <Button label={"Submit"} onClick={handleOnSubmit} />
    </form>
  );
};

export default ReviewForm;
