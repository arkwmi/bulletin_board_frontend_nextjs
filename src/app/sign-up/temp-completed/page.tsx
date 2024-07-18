import cStyle from "../../../styles/Common.module.css";

const TempCompletedPage = () => {
  return (
    <div className={cStyle.pageSubTitle}>
      <p>仮会員登録が完了しました。</p>
      <p>
        メールを送信しましたのでURLから本登録にお進みください。
      </p>
    </div>
  );
};

export default TempCompletedPage;
