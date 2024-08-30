"use client";
import React, { useState } from "react";
import style from "../styles/UploadImageForm.module.css";
import cStyle from "../../../styles/Common.module.css";
import { uploadImage } from "../api/uploadImage";

const UploadImageForm: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (image) {
      try {
        const result = await uploadImage(image);
        console.log(result);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>画像アップロード</h1>
      <input
        className={style.fileInput}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {preview && <img className={style.previewImage} src={preview} />}
      <button className={cStyle.btn} onClick={handleUpload}>
        画像アップロード
      </button>
    </div>
  );
};

export default UploadImageForm;
