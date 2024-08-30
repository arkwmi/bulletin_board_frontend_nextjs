import React, { useState } from 'react';
import cStyle from "../../../styles/Common.module.css";
import { usersImport } from '../api/usersImport';

const BATCH_SIZE = 1000;

const UsersImportButton: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (!file) {
      alert('ファイルを選択してください');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const csvData = event.target?.result as string;
      const rows = csvData.split('\n').map(row => row.split(','));

      for (let i = 0; i < rows.length; i += BATCH_SIZE) {
        const batch = rows.slice(i, i + BATCH_SIZE);
        console.log(batch);
        await usersImport(batch);
      }

      alert('ファイルが正常にインポートされました');
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <span>ユーザーデータインポート：</span>
      <input type="file" name="fileToImport" onChange={handleFileChange} />
      <button onClick={handleImport} className={cStyle.btn}>インポート</button>
    </div>
  );
};

export default UsersImportButton;
