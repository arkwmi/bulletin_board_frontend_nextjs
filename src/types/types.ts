export interface ArticleDetail {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  comments: Comment[];
}

export interface Comment {
  comment: string;
  createdAt: string;
  nickname: string;
}