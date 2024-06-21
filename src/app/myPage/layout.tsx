import "../globals.css";
import SideMenu from "@/components/SideMenu/SideMenu";
import style from "../../styles/MyPage.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={style.wrapMyPage}>
      <SideMenu />
      <div className={style.myPageMain}>{children}</div>
    </div>
  );
}
