"use client";
import style from "../../styles/MyPage.module.css";
import SideMenu from "@/components/SideMenu/SideMenu";

const MyPage: React.FC = () => {
  return (
    <>
      <div className={style.wrapMyPage}>
        <SideMenu/>
        <div className={style.myPageMain}>
        </div>
      </div>
    </>
  );
};

export default MyPage;
