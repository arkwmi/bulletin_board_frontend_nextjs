"use client";
import { postArticle } from "@/features/articles/api/postArticle";
import cStyle from "../../styles/Common.module.css";
import PostArticleForm from "@/features/articles/components/PostArticleForm";

const PostArticlePage: React.FC = () => {
  const handleSubmit = async (data: { userId: number,title: string; content: string }) => {
    console.log(data);
    await postArticle(data);
  };

  return (
    <>
      <h3 className={cStyle.pageTitle}>記事投稿</h3>
      <div className={cStyle.wrapContents}>
        <PostArticleForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default PostArticlePage;
