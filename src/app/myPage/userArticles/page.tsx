"use client";
import UserArticleList from "@/features/articles/components/UserArticleList";
import style from "../../../styles/MyPage.module.css";
import SideMenu from "@/components/SideMenu/SideMenu";
const UserArticlesPage: React.FC = () => {
  return (
    <>
      <div className={style.wrapMyPage}>
        <SideMenu />
        <div className={style.myPageMain}>
          <div className={style.myPageLayout}>
            <h2>投稿記事一覧</h2>
            <div className={style.pageContent}>
              <UserArticleList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserArticlesPage;
