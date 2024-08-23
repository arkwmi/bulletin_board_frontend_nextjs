export const updateComment = async (data: {
    id: number;
    comment: string;
  }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/comments/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include", // cookieはバックエンドで取得
        }
      );
      const responseData = await response.json();
      console.log(responseData);

    } catch (error) {
      console.error("Error:", error);
    }
  };
  