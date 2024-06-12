import { getArticleIdDetail } from "@/features/getArticleIdDetail/api/getArticleIdDetail";
import ArticleIdDetail from "@/features/getArticleIdDetail/components/ArticleIdDetail";
import React from "react";

interface ArticlePageProps {
  params: { id: string };
}

const ArticleDetailPage: React.FC<ArticlePageProps> = async ({ params }) => {
  const id = params.id;
  const articleIdDetail = await getArticleIdDetail(Number(id));

  return (
    <div>
      {id && <ArticleIdDetail articleId={Number(id)} articleIdDetail={articleIdDetail} />}
    </div>
  );
};

export default ArticleDetailPage;
