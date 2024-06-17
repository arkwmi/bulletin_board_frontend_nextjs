"use client";
import { useEffect, useState } from "react";
import { CommentDetail } from "@/types/types";
import Link from "next/link";
import style from "../../articles/styles/AllArticleList.module.css";
import { getCommentsAndArticlesByUserId } from "../api/getCommentsAndArticlesByUserId";

const UserCommentList: React.FC = () => {
  const [comments, setComments] = useState<CommentDetail[]>([]);

  // TODO: userIdはログイン時のセッションから取得
  const userId = 1;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getCommentsAndArticlesByUserId({
          userId,
        });
        setComments(fetchedComments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
        setComments([]);
      }
    };
    fetchComments();
  }, [userId]);

  const renderContent = () => {
    if (comments.length > 0) {
      return <CommentList comments={comments} />;
    } else {
      return <p>投稿コメントはありません</p>;
    }
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
            <button className={style.editButton}>編集</button>
            <button className={style.editButton}>削除</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return <div className={style.wrapArticleList}>{renderContent()}</div>;
};

export default UserCommentList;
