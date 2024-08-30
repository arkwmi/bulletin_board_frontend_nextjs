"use client";
import React, { useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import style from "../styles/PostComment.module.css";
import { postComment } from "../api/postComment";
import error from "next/error";

interface FormData {
  articleId: number;
  comment: string;
}

interface PostCommentFormProps {
  articleId: number;
}

const PostCommentForm: React.FC<PostCommentFormProps> = ({ articleId }) => {
  const [formData, setFormData] = useState<FormData>({
    articleId: articleId,
    comment: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.comment.trim() === "") {
      setMessage("コメントを入力してください");
      return;
    }
    try {
      await postComment(formData);
      setMessage("投稿しました");
      // 現在のページをリロード
      window.location.reload();
    } catch {
      if (error instanceof Error) {
        setMessage("ログインし直してください");
      } else {
        setMessage("An unknown error occurred");
      }
      console.error("Failed to post comment:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const displayMessage = () => {
    return (
      message && (
        <div className={cStyle.mt24}>
          <p>{message}</p>
        </div>
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={cStyle.wrapForm}>
        <label className="label-title" htmlFor="comment">
          コメント:
        </label>
        <input
          type="text"
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </div>
      <div className={cStyle.wrapForm}>
        <input className={style.btn} type="submit" value="コメント" />
      </div>
      {displayMessage()}
    </form>
  );
};

export default PostCommentForm;
