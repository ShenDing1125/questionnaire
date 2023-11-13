import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";
import QuestionParagraph from "./QuestionParagraph";
import QuestionInfo from "./QuestionInfo";
import QuestionTextarea from "./QuestionTextarea";
import QuestionCheckbox from "./QuestionCheckbox";

type ComponentInfoProps = {
  fe_id: string;
  type: string;
  isHidden: string;
  props: any;
};

export const getComponent = (comp: ComponentInfoProps) => {
  const { fe_id, type, isHidden, props = {} } = comp;

  if (isHidden) return null;

  switch (type) {
    case "questionInput": {
      return <QuestionInput fe_id={fe_id} props={props} />;
    }

    case "questionRadio": {
      return <QuestionRadio fe_id={fe_id} props={props} />;
    }

    case "questionTitle": {
      return <QuestionTitle {...props} />;
    }

    case "questionParagraph": {
      return <QuestionParagraph {...props} />;
    }

    case "questionInfo": {
      return <QuestionInfo {...props} />;
    }

    case "questionTextarea": {
      return <QuestionTextarea fe_id={fe_id} props={props} />;
    }

    case "questionCheckbox": {
      return <QuestionCheckbox fe_id={fe_id} props={props} />;
    }

    default: {
      return null;
    }
  }
};
