import LoginForm from "@/features/auth/components/LoginForm";
import cStyle from "../../styles/Common.module.css";

const LoginPage = () => {
  return (
    <>
      <h1 className={cStyle.pageTitle}>ログイン</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;