import UserArticleList from "@/features/articles/components/UserArticleList";

import UpdateNicknameForm from "@/features/users/components/UpdateNicknameForm";
import UpdatePasswordForm from "@/features/users/components/UpdatePasswordForm";
import React from "react";
import MyPageLayout from "./MyPageLayout";
import { MenuPageKey } from "@/types/types";
import UserCommentList from "@/features/comments/components/UserCommentList";

interface MenuPageInfo {
  title: string;
  component: JSX.Element;
}

interface MenuPageProps {
  currentMenuPage: MenuPageKey;
}

const menuPageInfo: Record<MenuPageKey, MenuPageInfo> = {
  nickname: {
    title: "ニックネーム変更",
    component: <UpdateNicknameForm />,
  },
  password: {
    title: "パスワード変更",
    component: <UpdatePasswordForm />,
  },
  articles: {
    title: "投稿記事一覧",
    component: <UserArticleList />,
  },
  comments: {
    title: "投稿コメント一覧",
    component: <UserCommentList />,
  },
};

const MenuPage: React.FC<MenuPageProps> = ({ currentMenuPage }) => {
  const page = menuPageInfo[currentMenuPage] || menuPageInfo.nickname;

  return (
    <MyPageLayout title={page.title}>
      {page.component}
    </MyPageLayout>
  );
};

export default MenuPage;
