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
  bookId: string;
  reviewText: string;
  starRating: number;
};

type MethodAction = "GET" | "POST";

export type { Volume, Review, MethodAction };
