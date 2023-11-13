import { FC } from "react";
import styles from "./QuestionRadio.module.scss";

type QuestionRadioProps = {
  fe_id: string;
  props: {
    title: string;
    options: Array<{
      value: string;
      text: string;
    }>;
    value: string;
    isVertical: boolean;
  };
};

const QuestionRadio: FC<QuestionRadioProps> = ({ fe_id, props }) => {
  const { title, options = [], value, isVertical } = props;

  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
        {options.map((opt) => {
          const { value: val, text } = opt;

          let listClassName = "";
          if (isVertical) listClassName = styles.verticalItem;
          else listClassName = styles.horizontalItem;

          return (
            <li key={val} className={listClassName}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionRadio;
