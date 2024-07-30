import { cookies } from 'next/headers';
import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "./Header.module.css";

const Header = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');

  const isLoggedIn = !!accessToken;

  // ナビゲーションメニューを表示
  const renderNavigationMenu = () => {
    if (isLoggedIn) {
      return (
        <li>
          <Link href="/my-page/nickname">マイページ</Link>
        </li>
      );
    } else {
      return (
        <li>
          <Link href="/login">ログイン</Link>
        </li>
      );
    }
  };

  return (
    <div className={style.header}>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={150} height={100} />
        </Link>
      </div>
      <div className={style.headerMenu}>
        <ul>{renderNavigationMenu()}</ul>
      </div>
    </div>
  );
};

export default Header;
