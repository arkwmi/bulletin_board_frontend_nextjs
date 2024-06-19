"use client";
import { CommentDetail } from "@/types/types";
import Link from "next/link";
import style from "../../articles/styles/AllArticleList.module.css";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { deleteComment } from "../api/deleteComment";

interface CommentDetailProps {
  userComments: CommentDetail[] | null;
}

const UserCommentList: React.FC<CommentDetailProps> = ({ userComments }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(
    null
  );

  const renderContent = () => {
    if (userComments) {
      return <CommentList comments={userComments} />;
    } else {
      return <p>投稿コメントはありません</p>;
    }
  };

  const handleDeleteClick = (commentId: number) => {
    setSelectedCommentId(commentId);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedCommentId !== null) {
      await deleteComment(selectedCommentId);
      setShowModal(false);
      setSelectedCommentId(null);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedCommentId(null);
  };

  const CommentList: React.FC<{ comments: CommentDetail[] }> = ({
    comments,
  }) => (
    <ul className={style.articleList}>
      {comments.map((comment) => (
        <li key={comment.id} className={style.articleItem}>
          <Link href={`/article/${comment.articleId}`}>
            <div className={style.wrapTitleComment}>
              <div className={style.title}>{comment.article.title}</div>
              <div className={style.comment}>{comment.comment}</div>
            </div>
          </Link>
          <div className={style.buttons}>
            <Link href={`/myPage/userComments/editComment/${comment.id}`}>
              <button className={style.editButton}>編集</button>
            </Link>
            <button
              className={style.editButton}
              onClick={() => handleDeleteClick(comment.id)}
            >
              削除
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={style.wrapArticleList}>
      {renderContent()}
      <Modal
        show={showModal}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default UserCommentList;
