import { CommentDetail } from "@/types/types";

export const getCommentsAndArticlesByUserId = async (data: { userId: number }): Promise<CommentDetail[]> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/comments/user-comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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
  