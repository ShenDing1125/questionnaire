import { get } from "./ajax";

// 獲取問卷
export async function getQuestionById(id: string) {
  const url = `/api/question/${id}`;
  const data = await get(url);
  return data;
}
