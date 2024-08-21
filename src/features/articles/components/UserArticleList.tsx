"use client";
import { useEffect, useState } from "react";
import { getArticlesByUserId } from "../api/getArticlesByUserId";
import { ArticleDetail } from "@/types/types";
import Link from "next/link";
import style from "../styles/AllArticleList.module.css";
import Modal from "@/components/Modal/Modal";
import { deleteArticle } from "../api/deleteArticle";

const UserArticleList: React.FC = () => {
  const [articles, setArticles] = useState<ArticleDetail[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticlesByUserId();
        setArticles(fetchedArticles || []);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      }
    };
    fetchArticles();
  }, []);

  const renderContent = () => {
    if (articles.length > 0) {
      return <ArticleList articles={articles} />;
    } else {
      return <p>投稿記事はありません</p>;
    }
  };

  const handleDeleteClick = (articleId: number) => {
    setSelectedArticleId(articleId);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedArticleId !== null) {
      await deleteArticle(selectedArticleId);
      setArticles((prevArticles) =>
        prevArticles.filter((article) => article.id !== selectedArticleId)
      );
      setShowModal(false);
      setSelectedArticleId(null);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedArticleId(null);
  };

  const ArticleList: React.FC<{ articles: ArticleDetail[] }> = ({
    articles,
  }) => (
    <ul className={style.articleList}>
      {articles.map((article) => (
        <li key={article.id} className={style.articleItem}>
          <Link href={`/article/${article.id}`}>
            <p className={style.title}>{article.title}</p>
          </Link>
          <div className={style.buttons}>
            <Link href={`/my-page/user-articles/edit-article/${article.id}`}>
              <button className={style.editButton}>編集</button>
            </Link>
            <button
              className={style.editButton}
              onClick={() => handleDeleteClick(article.id)}
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

export default UserArticleList;
