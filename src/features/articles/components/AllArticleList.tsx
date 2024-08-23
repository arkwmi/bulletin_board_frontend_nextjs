"use client";
import React, { useEffect, useState } from "react";
import { getArticlesPerPage } from "../api/getArticlesPerPage";
import style from "../styles/AllArticleList.module.css";
import Link from "next/link";
import { ArticleDetail } from "@/types/types";
import Pagination from "../../../components/Pagination/Pagination";

const AllArticleList: React.FC = () => {
  const [articles, setArticles] = useState<ArticleDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [loading, setLoading] = useState(true);
  const articlesPerPage = 10;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await getArticlesPerPage(currentPage, articlesPerPage);
        if (response) {
          setArticles(response.data || []);
          setTotalArticles(response.meta.totalItems || 0);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
        setTotalArticles(0);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [currentPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (articles.length > 0) {
      return <ArticleList articles={articles} />;
    } else {
      return <p>記事はありません</p>;
    }
  };

  const ArticleList: React.FC<{ articles: ArticleDetail[] }> = ({ articles }) => (
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
      <div className={style.wrapArticleList}>{renderContent()}</div>
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={totalArticles}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default AllArticleList;
