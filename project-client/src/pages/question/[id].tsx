import PageWrapper from "@/components/PageWrapper";
import { getQuestionById } from "@/services/question";
import { getComponent } from "@/components/QuestionComponents";
import styles from "@/styles/Question.module.scss";

type QuestionProps = {
  errno: number;
  data?: {
    id: string;
    title: string;
    desc?: string;
    js?: string;
    css?: string;
    isPublished: boolean;
    isDeleted: boolean;
    componentList: Array<any>;
  };
  msg?: string;
};

export default function Question(props: QuestionProps) {
  const { errno, data, msg = "" } = props;

  // 數據錯誤
  if (errno !== 0) {
    return (
      <PageWrapper title="錯誤">
        <h1>錯誤</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  const {
    id,
    title = "",
    desc = "",
    isDeleted,
    isPublished,
    componentList = [],
  } = data || {};

  // 已經被刪除的，提示錯誤
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>該問卷已經被刪除</p>
      </PageWrapper>
    );
  }

  // 尚未發佈的，提示錯誤
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>該問卷尚未發佈</p>
      </PageWrapper>
    );
  }

  const ComponentListElem = (
    <>
      {componentList.map((c) => {
        const ComponentElem = getComponent(c);
        return (
          <div key={c.fe_id} className={styles.componentWrapper}>
            {ComponentElem}
          </div>
        );
      })}
    </>
  );

  return (
    <PageWrapper title={title} desc={desc}>
      <form method="post" action="/api/answer">
        <input type="hidden" name="questionId" value={id} />

        {ComponentListElem}

        <div className={styles.submitBtnContainer}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
  );
}

// SSR 動態獲取數據
export async function getServerSideProps(context: any) {
  const { id = "" } = context.params;

  // 根據 id 獲取問卷數據
  const data = await getQuestionById(id);

  return {
    props: data,
  };
}
