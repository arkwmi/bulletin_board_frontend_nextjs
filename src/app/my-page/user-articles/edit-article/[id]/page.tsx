import { getArticleIdDetail } from "@/features/articles/api/getArticleIdDetail";
import style from "../../../../../styles/MyPage.module.css";
import EditArticleForm from "@/features/articles/components/EditArticleForm";

interface ArticlePageProps {
  params: { id: number };
}

const EditArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const id = params.id;
  const initialData = await getArticleIdDetail(id);

  if (!initialData) return <p>読み込み中...</p>;

  return (
    <div className={style.myPageLayout}>
      <h2>記事編集</h2>
      <div className={style.pageContent}>
        <EditArticleForm initialData={initialData} />
      </div>
    </div>
  );
};

export default EditArticlePage;
