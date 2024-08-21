import React, { useState } from 'react';
import cStyle from "../../../styles/Common.module.css";
import { usersExportByDateRange } from '../api/usersExportByDateRange';

const UsersExportByDateRangeButton: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleExport = async () => {
    try {
      const formattedStartDate = `${startDate.substring(0, 4)}-${startDate.substring(4, 6)}-${startDate.substring(6, 8)}T00:00:00Z`;

      const formattedEndDate = `${endDate.substring(0, 4)}-${endDate.substring(4, 6)}-${endDate.substring(6, 8)}T23:59:59Z`;
      
      await usersExportByDateRange(formattedStartDate, formattedEndDate);
    } catch (error) {
      console.error('エクスポートエラー:', error);
    }
  };

  return (
    <div>
      <span>ユーザーデータエクスポート（期間指定）：</span>
      <input
        type="text"
        name="start_date"
        placeholder="開始日（例:20240101）"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="text"
        name="end_date"
        placeholder="終了日（例:20241231）"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleExport} className={cStyle.btn}>
        エクスポート
      </button>
    </div>
  );
};

export default UsersExportByDateRangeButton;
