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

export interface CommentDetail {
  id: number;
  comment: string;
  createdAt: string;
  articleId: number;
  userId: number;
  article: Article;
}

export interface Article {
  title: string;
  content: string;
  createdAt: string;
}

export type MenuPageKey = "nickname" | "password" | "articles" | "comments";