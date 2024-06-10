import { revalidatePath } from "next/cache";

export const postComment = async (data: {
    userId: number;
    articleId: number;
    comment: string;
  }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);

      // コメント投稿後にデータを再取得する必要なくす
      revalidatePath(`/articles/${data.articleId}`);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };
  