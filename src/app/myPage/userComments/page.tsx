import UserCommentList from "@/features/comments/components/UserCommentList";
import style from "../../../styles/MyPage.module.css";
import SideMenu from "@/components/SideMenu/SideMenu";
import { getCommentsAndArticlesByUserId } from "@/features/comments/api/getCommentsAndArticlesByUserId";
const UserArticlesPage: React.FC = async () => {
  // TODO: userIdはログイン時のセッションから取得
  const userId = 1;
  const userComments = await getCommentsAndArticlesByUserId({
    userId,
  });

  return (
    <>
      <div className={style.wrapMyPage}>
        <SideMenu />
        <div className={style.myPageMain}>
          <div className={style.myPageLayout}>
            <h2>コメント一覧</h2>
            <div className={style.pageContent}>
              <UserCommentList userComments={userComments}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserArticlesPage;
