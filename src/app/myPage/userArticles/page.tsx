"use client";
import UserArticleList from "@/features/articles/components/UserArticleList";
import style from "../../../styles/MyPage.module.css";
const UserArticlesPage: React.FC = () => {
  return (
    <div className={style.myPageLayout}>
      <h2>投稿記事一覧</h2>
      <div className={style.pageContent}>
        <UserArticleList />
      </div>
    </div>
  );
};

export default UserArticlesPage;
