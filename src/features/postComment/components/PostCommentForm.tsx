import React, { useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import style from "../styles/PostComment.module.css";

interface FormData {
  userId: number;
  articleId: number;
  comment: string;
}

interface PostCommentFormProps {
  articleId: number;
  onSubmit: (data: FormData) => void;
}

const PostCommentForm: React.FC<PostCommentFormProps> = ({
  articleId,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    // TODO:userIdはログイン時のセッションから取得
    userId: 1,
    articleId: articleId,
    comment: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.comment.trim() === "") {
      setMessage("コメントを入力してください");
      return;
    }
    onSubmit(formData);
    setMessage("投稿しました");
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
