import UserCommentList from "@/features/comments/components/UserCommentList";
import style from "../../../styles/MyPage.module.css";

const UserCommentsPage: React.FC = () => {
  return (
    <div className={style.myPageLayout}>
      <h2>コメント一覧</h2>
      <div className={style.pageContent}>
        <UserCommentList />
      </div>
    </div>
  );
};

export default UserCommentsPage;
