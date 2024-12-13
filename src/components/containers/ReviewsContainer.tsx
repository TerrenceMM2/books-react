import { mockReview } from "../../__mock__";
import Review from "../modules/Review";
import ReviewFormContainer from "./ReviewFormContainer";

const review = mockReview;

const ReviewsContainer = () => {
  // Call GET /reviews HERE

  return (
    <>
      {Array(3)
        .fill(review)
        .map((review, index) => (
          <Review key={`${review.id}-${index}`} review={review} />
        ))}
      <ReviewFormContainer />
    </>
  );
};

export default ReviewsContainer;
