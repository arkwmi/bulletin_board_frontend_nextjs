'use server';
import { revalidatePath } from "next/cache";

export const deleteComment = async (id: number): Promise<void> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/comments/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }
      // キャッシュされた投稿を更新する
      revalidatePath(`/comments/${id}`);
      
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };
  