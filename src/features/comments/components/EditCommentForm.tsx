"use client";
import React, { useState, useEffect } from "react";
import cStyle from "../../../styles/Common.module.css";
import style from "../../../features/articles/styles/PostArticle.module.css";
import { updateComment } from "../api/updateComment";

interface FormData {
  id: number;
  comment: string;
}

interface CommentFormProps {
  initialData: FormData;
}

const EditCommentForm: React.FC<CommentFormProps> = ({ initialData }) => {
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
      await updateComment(formData);
      setSuccessMessage("コメントを更新しました");
    } catch (error) {
      console.error("Failed to update comment:", error);
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
        <label>コメント内容:</label>
        <textarea
          className={style.textarea}
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={cStyle.mt24}>
        <button className={cStyle.btn} type="submit">
          コメント更新
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

export default EditCommentForm;
