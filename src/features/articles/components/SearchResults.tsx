"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "../styles/AllArticleList.module.css";
import Link from "next/link";
import { ArticleDetail } from "@/types/types";
import { searchArticles } from "../api/searchArticles";

const SearchResults: React.FC = () => {
  const [articles, setArticles] = useState<ArticleDetail[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      const fetchArticles = async () => {
        const fetchedArticles = await searchArticles(query);
        setArticles(fetchedArticles);
      };
      fetchArticles();
    }
  }, [query]);

  const renderContent = () => {
    if (articles.length > 0) {
      return <ArticleList articles={articles} />;
    } else {
      return <p>そんな記事は存在しません</p>;
    }
  };

  const ArticleList: React.FC<{ articles: ArticleDetail[] }> = ({
    articles,
  }) => (
    <ul className={style.articleList}>
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`/article/${article.id}`}>
            <p className="title">{article.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className={style.wrapArticleList}>
        {renderContent()}
      </div>
    </>
  );
};

export default SearchResults;
