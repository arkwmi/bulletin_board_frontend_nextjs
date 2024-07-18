import style from "../../../../../styles/MyPage.module.css";
import EditCommentForm from "@/features/comments/components/EditCommentForm";
import { getCommentById } from "@/features/comments/api/getCommentById";
import { CommentDetail } from "@/types/types";

interface EditCommentPageProps {
  params: { id: number };
}

const EditCommentPage: React.FC<EditCommentPageProps> = async ({ params }) => {
  const id = params.id;
  const commentDetail: CommentDetail[] | null = await getCommentById(id);

  if (!commentDetail) return <p>読み込み中...</p>;

  // formData用に整形
  const initialData = {
    id: commentDetail[0].id,
    comment: commentDetail[0].comment,
  };

  return (
    <div className={style.myPageLayout}>
      <h2>コメント編集</h2>
      <div className={style.pageContent}>
        <EditCommentForm initialData={initialData} />
      </div>
    </div>
  );
};

export default EditCommentPage;
