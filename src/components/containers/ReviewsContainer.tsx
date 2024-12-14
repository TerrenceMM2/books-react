import { FC } from "react";
import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import Review from "../modules/Review";
import ReviewFormContainer from "./ReviewFormContainer";
import { getBookReviews } from "../../api/fetch";
import type { Review as ReviewType } from "../../api";

const ReviewsContainer: FC = () => {
  const { volumeId = "" } = useParams({ strict: false });

  const {
    data: reviews,
    isSuccess,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`${volumeId}-reviews`],
    queryFn: () => getBookReviews(volumeId),
    enabled: !!volumeId,
  });

  return (
    <>
      {isSuccess &&
        reviews?.map((review: ReviewType, index: number) => <Review key={`${review.id}-${index}`} review={review} />)}
      {isLoading && "...loading"}
      {error && "ERROR"}
      <ReviewFormContainer />
    </>
  );
};

export default ReviewsContainer;
