import TempRegistrationForm from "@/features/auth/components/TempRegistrationForm";
import cStyle from "../../styles/Common.module.css";

const SignUpPage = () => {
  return (
    <>
      <h1 className={cStyle.pageTitle}>仮会員登録</h1>
      <TempRegistrationForm />
    </>
  );
};

export default SignUpPage;
