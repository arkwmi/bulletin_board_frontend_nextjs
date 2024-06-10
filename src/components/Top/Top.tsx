import React from "react";
import cStyle from "../../styles/Common.module.css";
import Link from "next/link";
import AllArticleList from "@/features/getAllArticles/components/AllArticleList";
import DisplayCount from "@/features/displayCount/components/DisplayCount";
import { ArticleDetail } from "@/types/types";

interface TopProps {
  userCount: number;
  articleCount: number;
  articles: ArticleDetail[];
}

const Top: React.FC<TopProps> = ({ userCount, articleCount, articles }) => {
  return (
    <>
      <h1 className={cStyle.pageTitle}>掲示板トップ</h1>
      <DisplayCount userCount={userCount} articleCount={articleCount} />
      <div className={`${cStyle.btn} ${cStyle.wrapForm}`}>
        <Link href="/postArticle">記事投稿</Link>
      </div>
      <h3 className={cStyle.pageSubTitle}>記事一覧</h3>
      <AllArticleList  />
    </>
  );
};

export default Top;
