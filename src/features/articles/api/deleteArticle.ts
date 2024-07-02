export const deleteArticle = async (id: number): Promise<void> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete article");
    }
  } catch (error) {
    console.error("Error deleting article:", error);
  }
};
