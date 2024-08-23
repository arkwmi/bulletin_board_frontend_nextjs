"use client";
import UsersExportAllButton from "@/features/admin/components/UsersExportAllButton";
import cStyle from "../../../styles/Common.module.css";
import UsersExportByDateRangeButton from "@/features/admin/components/UsersExportByDateRangeButton";
import UsersImportButton from "@/features/admin/components/UsersImportButton";
import CreateDummyUsersDataButton from "@/features/admin/components/CreateDummyUsersDataButton";

const UserDataPage = () => {
  return (
    <>
      <h1 className={cStyle.pageTitle}>ユーザーデータ管理</h1>
      <div className={cStyle.wrapMenuBox}>
        <ul>
          <li className={cStyle.wrapMenu}>
            <span>ユーザーデータエクスポート（全データ）：</span>
            <UsersExportAllButton />
          </li>
          <li className={cStyle.wrapMenu}>
            <UsersExportByDateRangeButton />
          </li>
          <li className={cStyle.wrapMenu}>
            <UsersImportButton />
          </li>
          <li className={cStyle.wrapMenu}>
            <CreateDummyUsersDataButton />
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDataPage;
