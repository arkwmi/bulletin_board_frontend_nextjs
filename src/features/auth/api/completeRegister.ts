import { UserFormData } from "../components/CompleteRegistrationForm";

export async function completeRegister(
  userId: number,
  formData: UserFormData
) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: userId,
      nickname: formData.nickname,
      password: formData.password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to complete registration");
  }

  return response.json();
}
