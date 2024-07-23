import Link from "next/link";
import cStyle from "../../styles/Common.module.css";

const LoginPage = () => {
  return (
    <>
      <h1 className={cStyle.pageTitle}>ログイン</h1>
      <div className={cStyle.pageSubTitle}>
        <Link href="/sign-up">会員登録がお済みでない方はこちら</Link>
      </div>
    </>
  );
};

export default LoginPage;
