"use client";
import React, { useState, useEffect } from "react";
import cStyle from "../../styles/Common.module.css";
import style from "../../features/articles/styles/PostArticle.module.css";
import { updateArticle } from "@/features/articles/api/updateArticle";

interface FormData {
  id: number;
  title: string;
  content: string;
}

interface EditArticleFormProps {
  initialData: FormData;
}

const EditArticleForm: React.FC<EditArticleFormProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateArticle(formData);
      setSuccessMessage("記事を更新しました");
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
          記事更新
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

export default EditArticleForm;
