"use client";
import style from "../../../styles/MyPage.module.css";
import SideMenu from "@/components/SideMenu/SideMenu";
const NicknamePage: React.FC = () => {
  return (
    <>
      <div className={style.wrapMyPage}>
        <SideMenu />
        <div className={style.myPageMain}>
          <div className={style.myPageLayout}>
            <h2>パスワード変更</h2>
            <div className={style.pageContent}>内容</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NicknamePage;
