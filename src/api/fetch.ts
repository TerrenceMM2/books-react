import { MethodAction, NewReview, Review, Volume } from "./types";

const URL = import.meta.env.VITE_BOOKS_API_SERVER;

const pingApiServer = async () => {
  const result = await executeFetch<string>(`${URL}/ping`, "GET");

  return result;
};

const getBooksSearch = async (searchTerm: string, page: number = 1, pageSize: number = 10) => {
  if (!searchTerm) {
    throw new Error("Input cannot be empty.");
  }

  const result = await executeFetch<Volume[], null>(
    `${URL}/api/search/?query=${searchTerm}&page=${page}&pageSize=${pageSize}`,
    "GET",
  );

  return result;
};

const getBookSearch = async (volumeId: string) => {
  if (!volumeId) {
    throw new Error("Id cannot be empty.");
  }

  const result = await executeFetch<Volume, null>(`${URL}/api/search/volume/${volumeId}`, "GET");

  return result;
};

const getBookReviews = async (volumeId: string) => {
  const result = await executeFetch<Review[], null>(`${URL}/api/reviews/${volumeId}`, "GET");

  return result;
};

const postBookReview = async (review: NewReview) => {
  const result = await executeFetch<Review, NewReview>(`${URL}/api/reviews`, "POST", review);

  return result;
};

function executeFetch<T extends object | string>(url: string, method: MethodAction): Promise<T>;
function executeFetch<T extends object | string, U>(url: string, method: MethodAction, body?: U): Promise<T>;
async function executeFetch<T extends object | string, U>(url: string, method: MethodAction, body?: U): Promise<T> {
  try {
    const fetchOptions: RequestInit = {
      method,
      ...(body && { body: JSON.stringify(body), headers: { "Content-Type": "application/json" } }),
    };
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    let result;
    if (contentType?.includes("text/plain")) {
      result = await response.text();
    } else {
      result = await response.json();
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("An unknown error occurred");
  }
}

export { pingApiServer, getBooksSearch, getBookSearch, getBookReviews, postBookReview };
