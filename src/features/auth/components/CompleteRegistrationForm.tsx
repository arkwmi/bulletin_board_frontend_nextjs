"use client";
import { useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import style from "../../articles/styles/PostArticle.module.css";
import { completeRegister } from "../api/completeRegister";
import { useRouter } from "next/navigation";

export interface UserFormData {
  nickname: string;
  password: string;
  confirmPassword: string;
}

interface CompleteRegistrationFormProps {
  userId: number;
}

const CompleteRegistrationForm: React.FC<CompleteRegistrationFormProps> = ({ userId }) => {
  const [formData, setFormData] = useState<UserFormData>({
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validateNickname = (nickname: string): boolean => {
    // 英数字8文字以上
    return /^[a-zA-Z0-9]{8,}/.test(nickname);
  };

  const validatePassword = (password: string): boolean => {
    // 英数字10文字以上
    return /^[a-zA-Z0-9]{10,}/.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateNickname(formData.nickname)) {
      setError("ニックネームは英数8文字以上で入力してください");
      return;
    }
    if (!validatePassword(formData.password)) {
      setError("パスワードは英数10文字以上で入力してください");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("パスワードが一致しません");
      return;
    }
    try {
      setError(null);
      // ユーザー情報更新
      completeRegister(userId, formData);
      // 本登録完了ページに遷移
      router.push("/sign-up/temp-completed");
      window.location.href = "/complete-sign-up/completed";
    } catch (error) {
      console.error("Failed to update user:", error);
      setError("ユーザー情報更新失敗しました");
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
        <label>ニックネーム:</label>
        <input
          className={style.inputTitle}
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          required
        />
      </div>
      <div className={cStyle.mt24}>
        <label>パスワード:</label>
        <input
          className={style.inputTitle}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={cStyle.mt24}>
        <label>パスワード確認:</label>
        <input
          className={style.inputTitle}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      {error && <div className={cStyle.mt24}>{error}</div>}
      <div className={cStyle.mt24}>
        <button className={cStyle.btn} type="submit">
          本登録
        </button>
      </div>
    </form>
  );
};

export default CompleteRegistrationForm;

