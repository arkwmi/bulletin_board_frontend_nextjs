'use server';
import { revalidatePath } from "next/cache";

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
        }
      );
      const responseData = await response.json();
      console.log(responseData);

      // キャッシュされた投稿を更新する
      revalidatePath(`/comments/${data.id}`);

    } catch (error) {
      console.error("Error:", error);
    }
  };
  