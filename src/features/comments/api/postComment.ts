'use server';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postComment = async (data: {
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
        credentials: "include", // cookieはバックエンドで取得
      });
      const responseData = await response.json();
      console.log(responseData);
      
      // キャッシュされた投稿を更新する
      revalidatePath(`/articles/${data.articleId}`);
      // 最新データが取得されたページに遷移
      redirect(`/articles/${data.articleId}`);

    } catch (error) {
      console.error("Error:", error);
    }
  };
  