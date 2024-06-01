"use client";
import Header from "@/components/Header/Header";
import cStyle from "../../styles/Common.module.css";
import PostArticleForm from "@/features/postArticle/components/PostArticleForm";
import { postArticle } from "@/features/postArticle/api/postArticle";

const PostArticlePage: React.FC = () => {
  const handleSubmit = async (data: { userId: number,title: string; content: string }) => {
    console.log(data);
    await postArticle(data);
  };

  return (
    <>
      <Header />
      <h3 className={cStyle.pageTitle}>記事投稿</h3>
      <div className={cStyle.wrapContents}>
        <PostArticleForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default PostArticlePage;
