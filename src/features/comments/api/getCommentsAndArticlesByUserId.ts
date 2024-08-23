import { CommentDetail } from "@/types/types";

export const getCommentsAndArticlesByUserId = async (): Promise<CommentDetail[]> => {
    try {
      console.log('コメント一覧');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/comments/user-comments`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // cookieはバックエンドで取得
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };
  