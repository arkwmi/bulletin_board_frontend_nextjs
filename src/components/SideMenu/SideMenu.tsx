import React from "react";
import Link from "next/link";
import style from "./SideMenu.module.css";
import cStyle from "../../styles/Common.module.css";

const SideMenu: React.FC = () => {
  return (
    <div className={style.myPageSideMenu}>
      <ul>
        <li className={cStyle.pointer}>
          <Link href={"/myPage/nickname"}>
            <p className={style.title}>ニックネーム変更</p>
          </Link>
        </li>
        <li className={cStyle.pointer}>
          <Link href={"/myPage/password"}>
            <p className={style.title}>パスワード変更</p>
          </Link>
        </li>
        <li className={cStyle.pointer}>
          <Link href={"/myPage/userArticles"}>
            <p className={style.title}>投稿記事一覧</p>
          </Link>
        </li>
        <li className={cStyle.pointer}>
          <Link href={"/myPage/userComments"}>
            <p className={style.title}>投稿コメント一覧</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
