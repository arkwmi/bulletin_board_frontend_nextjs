"use client";
import { useEffect, useState } from "react";
import { getArticlesByUserId } from "../api/getArticlesByUserId";
import { ArticleDetail } from "@/types/types";
import Link from "next/link";
import style from "../styles/AllArticleList.module.css";

const UserArticleList: React.FC = () => {
  const [articles, setArticles] = useState<ArticleDetail[]>([]);

  // TODO: userIdはログイン時のセッションから取得
  const userId = 1;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticlesByUserId({ userId });
        setArticles(fetchedArticles || []);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      }
    };
    fetchArticles();
  }, [userId]);

  const renderContent = () => {
    if (articles.length > 0) {
      return <ArticleList articles={articles} />;
    } else {
      return <p>投稿記事はありません</p>;
    }
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
            <button className={style.editButton}>編集</button>
            <button className={style.editButton}>削除</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return <div className={style.wrapArticleList}>{renderContent()}</div>;
};

export default UserArticleList;
