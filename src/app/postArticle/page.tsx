import cStyle from "../../styles/Common.module.css";
import PostArticleForm from "@/features/articles/components/PostArticleForm";

const PostArticlePage: React.FC = () => {
  return (
    <>
      <h3 className={cStyle.pageTitle}>記事投稿</h3>
      <div className={cStyle.wrapContents}>
        <PostArticleForm />
      </div>
    </>
  );
};

export default PostArticlePage;
