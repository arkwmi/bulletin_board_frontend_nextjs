export const postArticle = async (data: {
  title: string;
  content: string;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include", // cookieはバックエンドで取得
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '何か問題が発生しました');
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
