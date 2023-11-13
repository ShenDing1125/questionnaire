import { post } from "./ajax";

// 提交問卷
export async function postAnswer(answerInfo: any) {
  const url = "/api/answer";
  const data = post(url, answerInfo);
  return data;
}
