import { useAuth } from "@/context/authContext";
import { apiClient } from "./apiClient";

interface UpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

interface UpdatePasswordResponse {
  message: string;
  token: string;
  status: number;
}

const updatePasswordApi = async (
  token: string | null,
  data: UpdatePasswordRequest,
): Promise<UpdatePasswordResponse> => {
  try {
    const response = await apiClient<UpdatePasswordResponse>(
      "api/v1/user/update-password",
      token,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (e) {
    if (e instanceof Error && e.message.includes("401")) {
      throw new Error("Incorrect old password.");
    }
    throw new Error(
      e instanceof Error ? e.message : "An unknown error occurred",
    );
  }
};

export const useUpdatePassword = () => {
  const { token } = useAuth();
  const updatePassword = async (data: UpdatePasswordRequest) => {
    try {
      const response = await updatePasswordApi(token, data);
      return response;
    } catch (e) {
      throw new Error(
        e instanceof Error ? e.message : "An unknown error occurred",
      );
    }
  };

  return { updatePassword };
};
