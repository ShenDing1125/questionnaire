# API 設計

## 用戶功能

### 獲取用戶信息

- method `get`
- path `/api/user/info`
- response `{ errno: 0, data: {...} }` 或 `{ errno: 10001, msg: 'xxx' }`

### 註冊

- method `post`
- path `/api/user/register`
- request body `{ username, password, nickName }`
- response `{ errno: 0 }`

### 登錄

- method `post`
- path `/api/user/login`
- request body `{ username, password }`
- response `{ errno: 0, data: { token } }`

## 問卷功能

### 創建問卷

- method `post`
- path `/api/question`
- request body - 無 （點擊按鈕即可創建）
- response `{ errno: 0, data: { id } }`

### 獲取單個問卷

- method `get`
- path `/api/question/:id`
- response `{ errno: 0, data: { id, title ... } }`

### 獲取問卷列表

- method `get`
- path `/api/question`
- response: `{ errno: 0, data: { list: [ ... ], total } }`

### 更新問卷信息

- method `patch`
- path `/api/question/:id`
- request body `{ title, isStar ... }`
- response: `{ errno: 0 }`

### 批量徹底刪除問卷

- method `delete`
- path `/api/question`
- request body `{ ids: [ ... ] }`
- response: `{ errno: 0 }`

### 複製問卷

- method `post`
- path `/api/question/duplicate/:id`
- response: `{ errno: 0, data: { id } }`
