// "use client";
import React from "react";
import cStyle from "../../../styles/Common.module.css";

interface DisplayCountProps {
  userCount: number;
  articleCount: number;
}

const DisplayCount: React.FC<DisplayCountProps> = ({ userCount, articleCount }) => {

  return (
    <div className={cStyle.wrapForm}>
      <p>会員登録数：{userCount}</p>
      <p>累計投稿数：{articleCount}</p>
    </div>
  );
};

export default DisplayCount;
