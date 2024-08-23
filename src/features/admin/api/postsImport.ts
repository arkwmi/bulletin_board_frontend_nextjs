export const postsImport = async (batch: any[]) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/articles/import`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ batch }),
      }
    );

    if (!response.ok) {
      throw new Error("バッチインポートに失敗しました");
    }
  } catch (error) {
    console.error("バッチインポートエラー:", error);
    alert("インポート中にエラーが発生しました");
  }
};
