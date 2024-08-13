"use client";
import UsersExportAllButton from "@/features/admin/components/UsersExportAllButton";
import cStyle from "../../../styles/Common.module.css";
import UsersExportByDateRangeButton from "@/features/admin/components/UsersExportByDateRangeButton";
import UsersImportButton from "@/features/admin/components/UsersImportButton";
import CreateDummyUsersDataButton from "@/features/admin/components/CreateDummyUsersDataButton";
import PostsExportAllButton from "@/features/admin/components/PostsExportAllButton";
import PostsExportByDateRangeButton from "@/features/admin/components/PostsExportByDateRangeButton";
import PostsImportButton from "@/features/admin/components/PostsImportButton";
import CreateDummyPostsDataButton from "@/features/admin/components/CreateDummyPostsDataButton";

const UserDataPage = () => {
  return (
    <>
      <h1 className={cStyle.pageTitle}>投稿データ管理</h1>
      <div className={cStyle.wrapMenuBox}>
        <ul>
          <li className={cStyle.wrapMenu}>
            <span>投稿データエクスポート（全データ）：</span>
            <PostsExportAllButton />
          </li>
          <li className={cStyle.wrapMenu}>
            <PostsExportByDateRangeButton />
          </li>
          <li className={cStyle.wrapMenu}>
            <PostsImportButton />
          </li>
          <li className={cStyle.wrapMenu}>
            <CreateDummyPostsDataButton />
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDataPage;
