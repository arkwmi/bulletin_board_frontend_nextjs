import React from "react";
import style from "../MyPage/MyPage.module.css";

interface MyPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<MyPageLayoutProps> = ({ title, children }) => {
  return (
    <div className={style.myPageLayout}>
      <h2>{title}</h2>
      <div className={style.pageContent}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;