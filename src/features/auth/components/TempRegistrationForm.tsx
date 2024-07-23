"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import cStyle from "../../../styles/Common.module.css";
import style from "../../articles/styles/PostArticle.module.css";
import { tempRegister } from "@/features/auth/api/tempRegister";

interface FormData {
  email: string;
}

const TempRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("無効なメールアドレスです。");
      return;
    }
    try {
      setError(null);
      // ユーザー登録および更新、トークン生成、メール送信
      await tempRegister(formData);
      // 仮登録完了ページに遷移
      router.push("/sign-up/temp-completed");
    } catch (error) {
      console.error("Failed to post email:", error);
      setError("メールの送信に失敗しました。");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className={cStyle.wrapForm} onSubmit={handleSubmit}>
      <div className={cStyle.mt24}>
        <label>メールアドレス:</label>
        <input
          className={style.inputTitle}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {error && <div className={cStyle.mt24}>{error}</div>}
      <div className={cStyle.mt24}>
        <button className={cStyle.btn} type="submit">
          仮登録
        </button>
      </div>
    </form>
  );
};

export default TempRegistrationForm;
