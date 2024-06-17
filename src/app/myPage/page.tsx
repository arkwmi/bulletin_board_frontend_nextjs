"use client";
import React, { useState } from "react";
import style from "../../components/MyPage/MyPage.module.css";
import cStyle from "../../styles/Common.module.css";
import MenuPage from "@/components/MyPage/MenuPage";
import { MenuPageKey } from "@/types/types";

const MyPage: React.FC = () => {
  const [currentMenuPage, setCurrentMenuPage] = useState<MenuPageKey >("nickname");

  const handleChangePage = (action: MenuPageKey) => {
    setCurrentMenuPage(action);
  };

  return (
    <>
      <div className={style.wrapMyPage}>
        <div className={style.myPageSideMenu}>
          <ul>
            <li className={cStyle.pointer}>
              <a onClick={() => handleChangePage("nickname")}>
                ニックネーム変更
              </a>
            </li>
            <li className={cStyle.pointer}>
              <a onClick={() => handleChangePage("password")}>
                パスワード変更
              </a>
            </li>
            <li className={cStyle.pointer}>
              <a onClick={() => handleChangePage("articles")}>
                投稿記事一覧
              </a>
            </li>
            <li className={cStyle.pointer}>
              <a onClick={() => handleChangePage("comments")}>
                投稿コメント一覧
              </a>
            </li>
          </ul>
        </div>
        <div className={style.myPageMain}>
          <MenuPage currentMenuPage={currentMenuPage} />
        </div>
      </div>
    </>
  );
};

export default MyPage;
