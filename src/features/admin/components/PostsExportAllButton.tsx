import React from 'react';
import cStyle from "../../../styles/Common.module.css";
import { postsExportAll } from '../api/postsExportAll';

const PostsExportAllButton: React.FC = () => {
  const handleExport = async () => {
    try {
      await postsExportAll();
    } catch (error) {
      console.error('エクスポートエラー:', error);
    }
  };

  return (
    <button onClick={handleExport} className={cStyle.btn}>
      エクスポート
    </button>
  );
};

export default PostsExportAllButton;
