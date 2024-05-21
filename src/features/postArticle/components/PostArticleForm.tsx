"use client";
import React, { useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import style from "../styles/PostArticle.module.css";

interface FormData {
  userId: number;
  title: string;
  content: string;
}

interface PostArticleFormProps {
  onSubmit: (data: FormData) => void;
}

const PostArticleForm: React.FC<PostArticleFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    // TODO:userIdはログイン時のセッションから取得
    userId: 68,
    title: "",
    content: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setSuccessMessage("投稿しました");
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
