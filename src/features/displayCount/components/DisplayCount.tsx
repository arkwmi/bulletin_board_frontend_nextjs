"use client";
import React, { useEffect, useState } from "react";
import { getUserCount } from "../api/getUserCount";
import { getArticleCount } from "../api/getArticleCount";
import cStyle from "../../../styles/Common.module.css";

const DisplayCount: React.FC = () => {
  const [userCount, setUserCount] = useState<number>();
  const [articleCount, setArticleCount] = useState<number>();

  useEffect(() => {
    const fetchUserCount = async () => {
      const fetchedUsers = await getUserCount();
      setUserCount(fetchedUsers);
    };
    fetchUserCount();

    const fetchArticleCount = async () => {
        const fetchedArticles = await getArticleCount();
        setArticleCount(fetchedArticles);
      };
      fetchArticleCount();
  }, []);

  return (
    <div className={cStyle.wrapForm}>
      <p>会員登録数：{userCount}</p>
      <p>累計投稿数：{articleCount}</p>
    </div>
  );
};

export default DisplayCount;
