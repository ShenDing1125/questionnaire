import { FC } from "react";
import styles from "./QuestionTextarea.module.scss";

type QuestionTextareaProps = {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
};

const QuestionTextarea: FC<QuestionTextareaProps> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props;

  return (
    <>
      <p>{title}</p>
      <div className={styles.textAreaWrapper}>
        <textarea name={fe_id} placeholder={placeholder} rows={5} />
      </div>
    </>
  );
};

export default QuestionTextarea;
