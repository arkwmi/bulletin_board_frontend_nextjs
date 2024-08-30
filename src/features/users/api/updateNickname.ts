export const updateNickname = async (nickname: string): Promise<void> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/nickname`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname }),
        credentials: "include", // cookieはバックエンドで取得
      });
  
      if (!response.ok) {
        throw new Error('ニックネームの更新に失敗しました。');
      }
    } catch (error) {
      console.error('ニックネームの更新エラー:', error);
      throw new Error('ニックネームの更新に失敗しました。');
    }
  };
  