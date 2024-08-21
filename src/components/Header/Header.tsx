import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={150} height={100} />
        </Link>
      </div>
      <div className={style.flex}>
        <SearchBar />
        <div className={style.headerMenu}>
          <ul>
            <li>
              <Link href="/login">ログイン</Link>
            </li>
            <li>
              <Link href="/my-page/nickname">マイページ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
