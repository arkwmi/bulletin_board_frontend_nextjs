"use client";
import { useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import style from "../../articles/styles/PostArticle.module.css";
import { useRouter } from "next/navigation";
import { login } from "../api/login";

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // 英数字10文字以上
    return /^[a-zA-Z0-9]{10,}/.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("正しいメールアドレスを入力してください");
      return;
    }
    if (!validatePassword(formData.password)) {
      setError("正しいパスワードを入力してください");
      return;
    }
    try {
      setError(null);
      // ログイン処理
      await login(formData);
      // トップページに遷移
      router.push("/");
    } catch (error) {
      console.error("Failed to login:", error);
      setError("ログインに失敗しました");
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
      {error && <div className={cStyle.mt24}>{error}</div>}
      <div className={cStyle.mt24}>
        <button className={cStyle.btn} type="submit">
          ログイン
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
