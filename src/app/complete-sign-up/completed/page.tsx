"use client";
import { useEffect } from "react";
import cStyle from "../../../styles/Common.module.css";
import { useRouter } from "next/navigation";

const CompletedPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 10秒後にページ遷移を行うタイマーを設定
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={cStyle.pageSubTitle}>
      <p>本会員登録が完了しました。</p>
      <p>自動的にTOPに遷移します</p>
    </div>
  );
};

export default CompletedPage;
