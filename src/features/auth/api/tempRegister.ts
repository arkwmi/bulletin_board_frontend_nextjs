export const tempRegister = async (data: {
  email: string;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
};