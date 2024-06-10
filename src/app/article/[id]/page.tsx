"use client";
import ArticleIdDetail from "@/features/getArticleIdDetail/components/ArticleIdDetail";
import React from "react";

interface ArticlePageProps {
  params: { id: string };
}

const ArticleDetailPage: React.FC<ArticlePageProps> = ({ params }) => {
  const id = params.id;

  return (
    <div>
      {id && <ArticleIdDetail articleId={Number(id)} />}
    </div>
  );
};

export default ArticleDetailPage;