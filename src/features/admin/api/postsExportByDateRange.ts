export const postsExportByDateRange = async (startDate: string, endDate: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/articles/exportByDateRange?start_date=${startDate}&end_date=${endDate}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error('バックエンドとの通信に失敗しました');
      }
  
      const csvData = await response.text();
  
      // CSVファイルのダウンロード
      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'posts_by_date_range.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
  
    } catch (error) {
      console.error("エクスポートエラー:", error);
    }
  };
  