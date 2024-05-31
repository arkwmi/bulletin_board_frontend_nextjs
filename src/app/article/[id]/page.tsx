"use client";
import Header from "@/components/Header/Header";
import ArticleIdDetail from "@/features/getArticleIdDetail/components/ArticleIdDetail";
import { postComment } from "@/features/postComment/api/postComment";
import PostCommentForm from "@/features/postComment/components/PostCommentForm";
import React from "react";

interface ArticlePageProps {
  params: { id: string };
}

const ArticleDetailPage: React.FC<ArticlePageProps> = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <Header />
      {id && <ArticleIdDetail articleId={Number(id)} />}
    </div>
  );
};

export default ArticleDetailPage;