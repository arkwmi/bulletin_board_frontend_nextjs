export const updatePassword = async (userId: number, password: string): Promise<void> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
      });
  
      if (!response.ok) {
        throw new Error('パスワードの更新に失敗しました。');
      }
    } catch (error) {
      console.error('パスワードの更新エラー:', error);
      throw new Error('パスワードの更新に失敗しました。');
    }
  };
  