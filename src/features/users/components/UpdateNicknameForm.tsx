"use client";
import React, { useState } from "react";
import { updateNickname } from "../api/updateNickname";
import cStyle from "../../../styles/Common.module.css";

const UpdateNicknameForm: React.FC = () => {
  const [nickname, setNickname] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // バリデーションチェック
  const validateNickname = (nickname: string): boolean => {
    const regex = /^[a-zA-Z0-9]{8,}$/; // 英数字8文字以上
    return regex.test(nickname);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateNickname(nickname)) {
      setError("ニックネームは英数字で8文字以上にしてください");
      return;
    }

    try {
      // TOD0: 認証ガードで躓いているため、ユーザーIDを一時的に設定しています🙇
      const userId = 1;
      await updateNickname(userId, nickname);
      setSuccess("ニックネームが変更されました。");
    } catch (err) {
      setError("ニックネームの変更に失敗しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cStyle.wrapForm}>
      <div>
        <label htmlFor="nickname">新しいニックネーム:</label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
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

export default UpdateNicknameForm;
