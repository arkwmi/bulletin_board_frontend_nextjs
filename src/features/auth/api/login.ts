import { LoginFormData } from "../components/LoginForm";

export async function login(formData: LoginFormData) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to login");
    }

    const data = await response.json();
    const { accessToken } = data;

    // トークンをCookieに保存
  document.cookie = `accessToken=${accessToken}; path=/;`;
  } catch (error) {
    console.error("Failed to login:", error);
    throw new Error("ログインに失敗しました");
  }
}
