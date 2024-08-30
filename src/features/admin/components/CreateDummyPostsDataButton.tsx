import React from "react";
import { Parser } from "json2csv";
import cStyle from "../../../styles/Common.module.css";

const CreateDummyPostsDataButton: React.FC = () => {
  const generateDummyData = () => {
    const dummyData = [];
    for (let i = 0; i < 100000; i++) {
      dummyData.push({
        id: i + 1,
        userId: i + 1,
        title: `title${i + 1}`,
        content: `content${i + 1}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
    return dummyData;
  };

  const downloadCSV = (data: any[]) => {
    const fields = [
      "id",
      "userId",
      "title",
      "content",
      "createdAt",
      "updatedAt",
    ];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "dummy_posts.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const dummyData = generateDummyData();
    downloadCSV(dummyData);
  };

  return (
    <>
      <span>10万件の投稿ダミーデータ:</span>
      <form>
        <input
          className={cStyle.btn}
          type="submit"
          value="作成"
          onClick={handleCreateClick}
        />
      </form>
    </>
  );
};

export default CreateDummyPostsDataButton;
