const BASE_URL = "https://blogora.lokendra.workers.dev/";

export const apiClient = async <T>(
  endpoint: string,
  token: string | null,
  options: RequestInit = {},
): Promise<T & { status: number }> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}, status: ${response.status}`);
  }

  const responseData: T = await response.json();

  return {
    ...responseData,
    status: response.status,
  };
};
