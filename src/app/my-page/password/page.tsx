import UpdatePasswordForm from "@/features/users/components/UpdatePasswordForm";
import style from "../../../styles/MyPage.module.css";
const NicknamePage: React.FC = () => {
  return (
    <div className={style.myPageLayout}>
      <h2>パスワード変更</h2>
      <div className={style.pageContent}>
        <UpdatePasswordForm />
      </div>
    </div>
  );
};

export default NicknamePage;
