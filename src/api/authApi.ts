import { signinInput, signupInput } from "@blogora/common";
import { apiClient } from "./apiClient";
import { useAuth } from "@/context/authContext";

type SignInData = (typeof signinInput)["_input"];
type SignUpData = (typeof signupInput)["_input"];

interface SignInResponse {
  message: string;
  token: string;
  status: number;
}

interface SignUpResponse {
  message: string;
  token: string;
  status: number;
}

const signInApi = async (
  data: SignInData,
  token: string | null,
): Promise<SignInResponse> => {
  const response = await apiClient<SignInResponse>(
    "api/v1/user/signin",
    token,
    {
      method: "POST",
      body: JSON.stringify(data),
    },
  );

  if (response.status && response.status === 401) {
    throw new Error("Incorrect email or password.");
  }

  if (response.status && response.status === 403) {
    throw new Error("No user exists with this email.");
  }

  return response;
};

const signUpApi = async (
  data: SignUpData,
  token: string | null,
): Promise<SignUpResponse> => {
  const response = await apiClient<SignUpResponse>(
    "api/v1/user/signup",
    token,
    {
      method: "POST",
      body: JSON.stringify(data),
    },
  );

  if (response.status && response.status === 409) {
    throw new Error("User already exists with this email.");
  }
  if (response.status && response.status === 411) {
    throw new Error("Inavlid input data.");
  }

  return response;
};

export const useSignIn = () => {
  const { token, setToken } = useAuth();

  const signIn = async (data: SignInData) => {
    try {
      const response = await signInApi(data, token);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Error during sign-in",
      );
    }
  };

  return { signIn };
};

export const useSignUp = () => {
  const { token, setToken } = useAuth();
  const signUp = async (data: SignUpData) => {
    try {
      const response = await signUpApi(data, token);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Error during sign-up",
      );
    }
  };

  return { signUp };
};
