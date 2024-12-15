type Volume = {
  id: string;
  title: string;
  authors: string[];
  publisher: string;
  description: string;
  imageLink: string;
  infoLink: string;
};

type Review = {
  id: string;
  volumeId: string;
  reviewText: string;
  starRating: number;
};

type NewReview = Omit<Review, "id">;

type MethodAction = "GET" | "POST";

export type { Volume, NewReview, Review, MethodAction };
