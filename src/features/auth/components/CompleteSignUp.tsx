"use client";
import React, { useEffect, useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import { validateToken } from "../api/validateToken";
import CompleteRegistrationForm from "./CompleteRegistrationForm";
import Link from "next/link";

const CompleteSignUp: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      validateToken(token)
        .then((response) => {
          if (response.valid) {
            console.log(response);
            setUserId(response.userId);
            setIsValid(true);
          } else {
            setError("トークンの有効期限が切れています");
          }
        })
        .catch(() => {
          setError("トークンの有効期限が切れています");
        });
    } else {
      setError("トークンが見つかりません");
    }
  }, []);

  return (
    <div className={cStyle.wrapForm}>
      {error && (
        <div>
          <p>{error}</p>
          <Link href={"/sign-up"}>
            <p className={cStyle.link}>
              こちらのリンクから再度メールを送信してください
            </p>
          </Link>
        </div>
      )}
      {isValid && userId !== null && (
        <CompleteRegistrationForm userId={userId} />
      )}
    </div>
  );
};

export default CompleteSignUp;
