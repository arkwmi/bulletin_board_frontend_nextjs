"use client";
import React, { useEffect, useState } from "react";
import cStyle from "../../../styles/Common.module.css";
import { validateToken } from "../api/validateToken";
import TempRegistrationForm from "./TempRegistrationForm";

const CompleteSignUp: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      validateToken(token)
        .then((response) => {
          if (response.valid) {
            console.log(response);
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
      {error && <div>{error}</div>}
      {isValid && <TempRegistrationForm />}
    </div>
  );
};

export default CompleteSignUp;
