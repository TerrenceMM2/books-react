import { Review as ReviewResponse } from "../../api";
import StarRating from "./StarRating";

interface ReviewProps {
  review: ReviewResponse;
}

const Review = ({ review: { id, reviewText, starRating } }: ReviewProps) => {
  return (
    <div className="text-left pb-4">
      {/* <div className='inline pr-4'>{starRating}</div> */}
      <StarRating id={id} disabled rating={starRating} />
      <div className="inline align-text-top">{reviewText}</div>
    </div>
  );
};

export default Review;
