import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/services/answer";

function genAnswerInfo(req: any) {
  const answerList: any[] = [];

  Object.keys(req).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentId: key,
      value: req[key],
    });
  });

  return {
    questionId: req.questionId || "",
    answerList,
  };
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(200).json({ errno: -1, msg: "Method 請求錯誤" });
  }

  const answerInfo = genAnswerInfo(req.body);

  // 查看後台打印的數據
  console.log(req.body);

  try {
    const resData = await postAnswer(answerInfo);
    if (resData.errno === 0) {
      res.redirect("/success");
    } else {
      res.redirect("/fail");
    }
  } catch (error) {
    res.redirect("/fail");
  }
}

export default handler;
