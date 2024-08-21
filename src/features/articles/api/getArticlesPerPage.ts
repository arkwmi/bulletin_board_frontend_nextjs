import { PaginatedArticles } from "@/types/types";

export const getArticlesPerPage = async (page: number, limit: number): Promise<PaginatedArticles> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/articles?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData: PaginatedArticles = await response.json();
    console.log('responseData:', responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    return {
      data: [],
      meta: {
        currentPage: 0,
        itemsPerPage: 0,
        totalItems: 0,
        totalPages: 0,
      },
      links: {
        current: "",
        next: "",
        last: "",
      },
    };
  }
};
