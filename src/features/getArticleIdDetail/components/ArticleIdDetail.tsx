import style from "../styles/ArticleIdDetail.module.css";
import cStyle from "../../../styles/Common.module.css";
import { ArticleDetail } from "@/types/types";
import PostCommentForm from "@/features/postComment/components/PostCommentForm";

interface ArticleDetailProps {
  articleId: number;
  articleIdDetail: ArticleDetail;
}

const ArticleIdDetail: React.FC<ArticleDetailProps> = async ({ articleId, articleIdDetail }) => {
  
  if (!articleIdDetail) {
    return (
      <div className={style.postArticleForm}>
        <p>記事が見つかりません</p>
      </div>
    );
  }

  return (
    <>
      <div className={style.postArticleForm}>
        <h3>記事詳細</h3>
        <h4>{articleIdDetail.title}</h4>
        <p>{articleIdDetail.content}</p>
        <p>{articleIdDetail.createdAt}</p>
        <PostCommentForm articleId={articleId} />
      </div>
      <div className={style.commentList}>
        <ul>
          {articleIdDetail.comments && articleIdDetail.comments.length > 0 ? (
            articleIdDetail.comments.map((comment, index) => (
              <li
                className={style.commentItem}
                key={index}
                id={`comment${index + 1}`}
              >
                <p>
                  {index + 1}.&nbsp;{comment.nickname}&nbsp;{comment.createdAt}
                </p>
                <div className={`${cStyle.mt8} ${cStyle.ml16}`}>{comment.comment}</div>
              </li>
            ))
          ) : (
            <li className={cStyle.wrapForm}>コメントはありません</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default ArticleIdDetail;
