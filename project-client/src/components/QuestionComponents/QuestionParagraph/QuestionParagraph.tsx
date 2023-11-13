import { FC, CSSProperties } from "react";

type QuestionParagraphProps = {
  text: string;
  isCenter?: boolean;
};

const QuestionParagraph: FC<QuestionParagraphProps> = ({ text, isCenter }) => {
  const style: CSSProperties = {};
  if (isCenter) style.textAlign = "center";

  const textList = text.split("\n");

  return (
    <p>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </p>
  );
};

export default QuestionParagraph;
