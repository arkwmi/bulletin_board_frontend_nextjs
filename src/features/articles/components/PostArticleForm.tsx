"use client";
import React, { useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import style from "../styles/PostArticle.module.css";
import { postArticle } from "../api/postArticle";

interface FormData {
  userId: number;
  title: string;
  content: string;
}

const PostArticleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    // TODO:userIdはログイン時のセッションから取得
    userId: 1,
    title: "",
    content: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postArticle(formData);
      setSuccessMessage("投稿しました");
    } catch (error) {
      console.error("Failed to update article:", error);
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
        <label>記事タイトル:</label>
        <input
          className={style.inputTitle}
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className={cStyle.mt24}>
        <label>記事内容:</label>
        <textarea
          className={style.textarea}
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={cStyle.mt24}>
        <button className={cStyle.btn} type="submit">
          記事投稿
        </button>
      </div>
      {successMessage && (
        <div className={cStyle.mt24}>
          <p>{successMessage}</p>
        </div>
      )}
    </form>
  );
};

export default PostArticleForm;
