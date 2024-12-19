import { useState } from "react";
import type { SyntheticEvent } from "react";
import { useParams } from "@tanstack/react-router";

import { ReviewForm } from "../modules";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBookReview } from "../../api";

type ReviewFormValues = {
  volumeId: string;
  reviewText: string;
  starRating: number;
};

const ReviewFormContainer = () => {
  const queryClient = useQueryClient();
  const { volumeId } = useParams({ strict: false });
  const [formData, setFormData] = useState<ReviewFormValues>({
    volumeId: volumeId ?? "",
    reviewText: "",
    starRating: 0,
  });

  const { mutate } = useMutation({
    mutationKey: [volumeId, "new-review"],
    mutationFn: (formData: ReviewFormValues) => postBookReview(formData),
    onMutate: async (newReview) => {
      await queryClient.cancelQueries({ queryKey: [`${volumeId}-reviews`] });

      const previousReviews = queryClient.getQueryData([`${volumeId}-reviews`]);

      queryClient.setQueryData<ReviewFormValues[]>([`${volumeId}-reviews`], (old) => {
        return [...(old || []), newReview];
      });

      return { previousReviews };
    },
    onError: (_err, _newReview, context) => {
      queryClient.setQueryData([`${volumeId}-reviews`], context?.previousReviews);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [`${volumeId}-reviews`] });
    },
  });

  const handleOnChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.name === "starRating" ? parseInt(target.value) : target.value });
  };

  const handleOnSubmit = () => {
    mutate(formData);
    setFormData({
      volumeId: volumeId ?? "",
      reviewText: "",
      starRating: 0,
    });
  };

  return <ReviewForm starRating={formData.starRating} onChange={handleOnChange} onSubmit={handleOnSubmit} />;
};

export default ReviewFormContainer;
