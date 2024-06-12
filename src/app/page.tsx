import React from "react";
import cStyle from "../styles/Common.module.css";
import Link from "next/link";
import AllArticleList from "@/features/getAllArticles/components/AllArticleList";
import DisplayCount from "@/features/displayCount/components/DisplayCount";
import { getUserCount } from "@/features/displayCount/api/getUserCount";
import { getArticleCount } from "@/features/displayCount/api/getArticleCount";

const TopPage = async () => {
  const [userCount, articleCount] = await Promise.all([
    getUserCount(),
    getArticleCount(),
  ]);

  return (
    <>
      <h1 className={cStyle.pageTitle}>掲示板トップ</h1>
      <DisplayCount userCount={userCount} articleCount={articleCount} />
      <div className={`${cStyle.btn} ${cStyle.wrapForm}`}>
        <Link href="/postArticle">記事投稿</Link>
      </div>
      <h3 className={cStyle.pageSubTitle}>記事一覧</h3>
      <AllArticleList />
    </>
  );
};

export default TopPage;
