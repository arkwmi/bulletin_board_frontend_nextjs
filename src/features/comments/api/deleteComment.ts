export const deleteComment = async (id: number): Promise<void> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/comments/${id}`,
        {
          method: "DELETE",
          credentials: "include", // cookieはバックエンドで取得
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }
      
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };
  