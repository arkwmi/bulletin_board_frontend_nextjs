
import cStyle from "../styles/Common.module.css";
import Link from "next/link";
import AllArticleList from "@/features/getAllArticles/components/AllArticleList";
import DisplayCount from "@/features/displayCount/components/DisplayCount";

export default function Home() {
  return (
    <>
      <h1 className={cStyle.pageTitle}>掲示板トップ</h1>
      <DisplayCount/>
      <div className={`${cStyle.btn} ${cStyle.wrapForm}`}>
        <Link href="/postArticle">記事投稿</Link>
      </div>
      <h3 className={cStyle.pageSubTitle}>記事一覧</h3>
      <AllArticleList />
    </>
  );
}
