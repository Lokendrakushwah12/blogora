import { useAuth } from "@/context/authContext";
import { apiClient } from "./apiClient";

interface UpdateDetailsRequest {
  name: string;
  email: string;
  bio: string;
  profilePhoto: string;
}

interface UpdateDetailsResponse {
  message: string;
  user: UpdateDetailsRequest;
  token: string;
  status: number;
}

const updateDetailsApi = async (
  token: string | null,
  data: UpdateDetailsRequest,
): Promise<UpdateDetailsResponse> => {
  if (!token) {
    throw new Error("User is not authenticated.");
  }

  try {
    console.log("Updating user details with data:", data);
    const response = await apiClient<UpdateDetailsResponse>(
      "api/v1/user/update-details",
      token,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response || response.status !== 200) {
      throw new Error("Failed to update user details.");
    }
    console.log("User details updated successfully:", response);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred");
  }
};

export const useUpdateDetails = () => {
  const { token } = useAuth();

  const updateDetails = async (data: UpdateDetailsRequest) => {
    try {
      const response = await updateDetailsApi(token, data);
      return response;
    } catch (e) {
      throw new Error(
        e instanceof Error
          ? e.message
          : "An unknown error occurred while updating details",
      );
    }
  };

  return { updateDetails };
};
