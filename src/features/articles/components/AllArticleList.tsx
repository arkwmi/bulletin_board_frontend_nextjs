"use client";
import React, { useEffect, useState } from "react";
import { getAllArticles } from "../api/getAllArticles";
import style from "../styles/AllArticleList.module.css";
import Link from "next/link";
import { ArticleDetail } from "@/types/types";

const AllArticleList: React.FC = () => {
  const [articles, setArticles] = useState<ArticleDetail[]>([]);

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
            <Link href={`/article/${article.id}`}>
              <p className="title">{article.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllArticleList;
