import style from "../../../styles/MyPage.module.css";
const NicknamePage: React.FC = () => {
  return (
    <div className={style.myPageLayout}>
      <h2>ニックネーム変更</h2>
      <div className={style.pageContent}>内容</div>
    </div>
  );
};

export default NicknamePage;
