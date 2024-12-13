import { MethodAction, Volume } from "./types";

const URL = import.meta.env.VITE_BOOKS_API_SERVER;

const pingApiServer = async () => {
  const result = await executeFetch<string>(`${URL}/ping`, "GET");

  return result;
};

const getBookSearch = async (searchTerm: string) => {
  const result = await executeFetch<Volume[]>(`${URL}/api/search/${searchTerm}`, "GET");

  return result;
};

const executeFetch = async <T>(url: string, method: MethodAction): Promise<T> => {
  try {
    const response = await fetch(url, { method });
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
};

export { pingApiServer, getBookSearch };
