import { ArticleDetail } from "@/types/types";

export const searchArticles = async (
  query: string
): Promise<ArticleDetail[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/articles/search?query=${query}`
  );
  const articles = await response.json();
  return articles;
};
