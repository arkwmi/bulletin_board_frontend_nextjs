import Link from "next/link";
import cStyle from "../../styles/Common.module.css";

const AdminTopPage = () => {
  return (
    <>
      <h1 className={cStyle.pageTitle}>管理画面トップ</h1>
      <div className={cStyle.wrapMenuBox}>
        <ul>
          <li className={`${cStyle.pointer} ${cStyle.wrapMenu}`}>
            <Link href={"/admin/user-data"}>
              <p>ユーザーデータ管理</p>
            </Link>
          </li>
          <li className={`${cStyle.pointer} ${cStyle.wrapMenu}`}>
            <Link href={"/admin/post-data"}>
              <p>投稿データ管理</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminTopPage;
