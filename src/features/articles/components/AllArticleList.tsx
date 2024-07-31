"use client";
import React, { useEffect, useState } from "react";
import { getAllArticles } from "../api/getAllArticles";
import style from "../styles/AllArticleList.module.css";
import Link from "next/link";
import { ArticleDetail } from "@/types/types";
import Pagination from "../../../components/Pagination/Pagination";

const AllArticleList: React.FC = () => {
  const [articles, setArticles] = useState<ArticleDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getAllArticles();
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderContent = () => {
    if (currentArticles.length > 0) {
      return <ArticleList articles={currentArticles} />;
    } else {
      return <p>記事はありません</p>;
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
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default AllArticleList;
