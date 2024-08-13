import React from 'react';
import { usersExportAll } from '../api/usersExportAll';
import cStyle from "../../../styles/Common.module.css";

const UsersExportAllButton: React.FC = () => {
  const handleExport = async () => {
    try {
      await usersExportAll();
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

export default UsersExportAllButton;
