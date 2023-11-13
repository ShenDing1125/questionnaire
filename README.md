### Side-Project: 我的問卷

#### 專案介紹:

該專案使用 React 18 + TypeScript + An tDesign 構建完整的問卷系統，由"問卷發佈者"發佈問卷後將會獲取一個答卷網址，該網址將會導向答卷網頁，提供"答卷者"進行問卷填寫，收集完所有該答卷資訊後，"發佈者"可以觀看該份問卷的統計訊息。

- project-frontend: 
  - 提供"問卷發佈者"使用
  - 此服務端可以進行問卷的發布、修改、以及觀看數據統計等操作
- project-client:
  - 提供"答卷者"使用
  - 此服務端經由發卷者提供的網址，進行線上的答卷
- project-mock:
  - 提供"問卷發布"及"答卷"兩端的數據
  - 此服務端將返回隨機生成的數據

#### 展示影片
https://drive.google.com/file/d/1cpbpu_qnJubQFCe9eK1ZIVlm4HCwd-U9/view?usp=sharing

#### 流程介紹:  

<注意: 數據皆是隨機生成僅供參考，以下為展示問卷主要的功能>

1. 帳戶註冊:

   - 帳密規則限制
   - 密碼重複校驗
   ![註冊](https://github.com/ShenDing1125/questionnaire/blob/main/%E9%9D%9C%E6%85%8B%E8%B3%87%E6%BA%90/pictures/register.png)


2. 登入:

   ![登入](https://github.com/ShenDing1125/questionnaire/blob/main/%E9%9D%9C%E6%85%8B%E8%B3%87%E6%BA%90/pictures/login.png)

3. Token:
   ![Token](https://github.com/ShenDing1125/questionnaire/blob/main/%E9%9D%9C%E6%85%8B%E8%B3%87%E6%BA%90/pictures/token.png)

4. 問卷主頁:

   - 呈現Mock提供的隨機數據

   ![問卷主頁](https://github.com/ShenDing1125/questionnaire/blob/main/%E9%9D%9C%E6%85%8B%E8%B3%87%E6%BA%90/pictures/questionList.png)

5. 問卷編輯:

   - 拖動功能
   - 自動編輯保存
   - 撤銷、取消撤銷
   - 隱藏、刪除、複製等編輯功能

   ![問卷編輯](https://github.com/ShenDing1125/questionnaire/blob/main/%E9%9D%9C%E6%85%8B%E8%B3%87%E6%BA%90/pictures/questionEdit.png)

6. 問卷統計:

   - 生成答卷的"網址"及"QRcode"
   - 觀看統計數據

   ![問卷統計](https://github.com/ShenDing1125/questionnaire/blob/main/%E9%9D%9C%E6%85%8B%E8%B3%87%E6%BA%90/pictures/questionStat.png)

7. 答卷:
   ![答卷](https://github.com/ShenDing1125/questionnaire/blob/main/%E9%9D%9C%E6%85%8B%E8%B3%87%E6%BA%90/pictures/questionAnswer.png)









