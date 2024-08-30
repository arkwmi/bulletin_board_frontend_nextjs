import UpdateNicknameForm from "@/features/users/components/UpdateNicknameForm";
import style from "../../../styles/MyPage.module.css";
const NicknamePage: React.FC = () => {
  return (
    <div className={style.myPageLayout}>
      <h2>ニックネーム変更</h2>
      <div className={style.pageContent}>
        <UpdateNicknameForm />
      </div>
    </div>
  );
};

export default NicknamePage;
