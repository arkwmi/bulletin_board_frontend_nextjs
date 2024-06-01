import Header from "@/components/Header/Header";
import cStyle from "../styles/Common.module.css";
import Image from "next/image";
import Link from "next/link";
import AllArticleList from "@/features/getAllArticles/components/AllArticleList";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={cStyle.pageTitle}>掲示板トップ</h1>
      <div className={`${cStyle.btn} ${cStyle.wrapForm}`}>
        <Link href="/postArticle">記事投稿</Link>
      </div>
      <h3 className={cStyle.pageSubTitle}>記事一覧</h3>
      <AllArticleList />
    </>
  );
}
