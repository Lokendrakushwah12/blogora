const BASE_URL = "https://blogora.lokendra.workers.dev/";

export const apiClient = async <T>(
  endpoint: string,
  token: string | null,
  options: RequestInit = {},
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  const responseData = await response.json();

  return {
    ...responseData,
    status: response.status,
  };
};
