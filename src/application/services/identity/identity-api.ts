import { env } from "@/application/config/t3-env.config";

export const refreshTokenAPI = async (
  refresh_token: string
): Promise<string | null> => {
  const tokenAPi = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/auth/oauth/token",
    {
      method: "POST",
      body: JSON.stringify({
        refresh_token,
        grant_type: "refresh_token",
        appId: process.env.IDENTITY_APP_ID,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Origin: "http://localhost:3000",
      },
    }
  );
  const tokenResponse = await tokenAPi.json();
  if (tokenAPi.status !== 201 || !tokenResponse.accessToken) {
    return null;
  }
  return tokenResponse.accessToken;
};

/**
 * Get access token and refresh token from auth server
 * @param email - email
 * @param password - password
 * @returns
 */
export const accessTokenAPI = async (
  email: string,
  password: string
): Promise<{
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
} | null> => {
  const api = await fetch(env.IDENTITY_SERVER_HOST + "/auth/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      grant_type: "password",
      appId: env.IDENTITY_APPID,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Origin: env.IDENTITY_ORIGIN,
    },
  });
  const response = await api.json();

  if (api.status !== 201) {
    console.log(response.error);
    throw new Error(response.error);
  }
  return response;
};
