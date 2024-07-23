import cStyle from "../../styles/Common.module.css";
import CompleteSignUp from "@/features/auth/components/CompleteSignUp";

const CompleteSignUpPage = () => {
  return (
    <>
      <h1 className={cStyle.pageTitle}>本会員登録</h1>
      <CompleteSignUp />
    </>
  );
};

export default CompleteSignUpPage;
