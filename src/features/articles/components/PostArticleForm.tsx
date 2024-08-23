"use client";
import React, { useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import style from "../styles/PostArticle.module.css";
import { postArticle } from "../api/postArticle";
import { useRouter } from "next/navigation";

interface FormData {
  title: string;
  content: string;
}

const PostArticleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postArticle(formData);
      setMessage("投稿しました");
    } catch (error) {
      if (error instanceof Error) {
        setMessage('ログインし直してください');
      } else {
        setMessage("An unknown error occurred");
      }
      console.error("Failed to post article:", error);
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
      {message && (
        <div className={cStyle.mt24}>
          <p>{message}</p>
        </div>
      )}
    </form>
  );
};

export default PostArticleForm;
