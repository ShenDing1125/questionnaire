import { FC } from "react";
import styles from "./QuestionInput.module.scss";

type QuestionInputProps = {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
};

const QuestionInput: FC<QuestionInputProps> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props;

  return (
    <>
      <p>{title}</p>
      <div className={styles.inputWrapper}>
        <input name={fe_id} placeholder={placeholder} />
      </div>
    </>
  );
};

export default QuestionInput;
