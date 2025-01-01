import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./apiClient";

interface userDetailsResponse {
  name: string;
  email: string;
  status: number;
  token: string;
}

const userDetailsApi = async (
  token: string | null,
): Promise<userDetailsResponse> => {
  const response = await apiClient<userDetailsResponse>(
    "api/v1/user/me",
    token,
    {
      method: "GET",
    },
  );

  return response;
};

export const useUserDetails = (token: string | null) => {
  return useQuery({
    queryKey: ["userDetails", token],
    queryFn: () => userDetailsApi(token),
    enabled: !!token,
    retry: 1,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60 * 24 * 365,
  });
};
