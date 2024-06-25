import React from "react";
import cStyle from "../styles/Common.module.css";
import Link from "next/link";
import { getUserCount } from "@/features/top/api/getUserCount";
import { getArticleCount } from "@/features/top/api/getArticleCount";
import DisplayCount from "@/features/top/components/DisplayCount";
import AllArticleList from "@/features/articles/components/AllArticleList";

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
        <Link href="/postArticle">
          <div>記事投稿</div>
        </Link>
      </div>
      <h3 className={cStyle.pageSubTitle}>記事一覧</h3>
      <AllArticleList />
    </>
  );
};

export default TopPage;
