import { useState } from "react";
import type { SyntheticEvent } from "react";
import { useParams } from "@tanstack/react-router";

import { ReviewForm } from "../modules";
import { useMutation } from "@tanstack/react-query";
import { postBookReview } from "../../api";

type ReviewFormValues = {
  volumeId: string;
  reviewText: string;
  starRating: number;
};

const ReviewFormContainer = () => {
  const { volumeId } = useParams({ strict: false });
  const [formData, setFormData] = useState<ReviewFormValues>({
    volumeId: volumeId ?? "",
    reviewText: "",
    starRating: 0,
  });

  const { mutate } = useMutation({
    mutationKey: [volumeId, "new-review"],
    mutationFn: (formData: ReviewFormValues) => postBookReview(formData),
  });

  const handleOnChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.name === "starRating" ? parseInt(target.value) : target.value });
  };

  const handleOnSubmit = () => {
    mutate(formData);
  };

  return <ReviewForm starRating={formData.starRating} onChange={handleOnChange} onSubmit={handleOnSubmit} />;
};

export default ReviewFormContainer;
