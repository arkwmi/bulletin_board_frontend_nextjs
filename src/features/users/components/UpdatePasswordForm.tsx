"use client";
import React, { useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import { updatePassword } from "../api/updatePassword";

const UpdatePasswordForm: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // バリデーションチェック
  const validatePassword = (password: string): boolean => {
    const regex = /^[a-zA-Z0-9]{10,}$/; // 英数字10文字以上
    return regex.test(password);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validatePassword(password)) {
      setError("パスワードは英数字で10文字以上にしてください");
      return;
    }

    try {
      await updatePassword(password);
      setSuccess("パスワードが変更されました。");
    } catch (err) {
      setError("パスワードの変更に失敗しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cStyle.wrapForm}>
      <div>
        <label htmlFor="password">新しいパスワード:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className={`${cStyle.btn} ${cStyle.mt16}`} type="submit">
        変更
      </button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default UpdatePasswordForm;
