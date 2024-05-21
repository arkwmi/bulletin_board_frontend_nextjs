"use client";
import React, { useEffect, useState } from "react";
import { getAllArticles } from "../api/getAllArticles";
import style from "../styles/AllArticleList.module.css";
import Link from "next/link";

export interface Article {
  id: number;
  title: string;
}

const AllArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getAllArticles();
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  return (
    <div className={style.wrapArticleList}>
      <ul className={style.articleList}>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/${article.id}`}>
              <p className="title">{article.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllArticleList;
