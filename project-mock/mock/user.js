const Mock = require("mockjs");
const Random = Mock.Random;

module.exports = [
  {
    // 獲取用戶信息
    url: "/api/user/info",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          username: Random.title(),
          nickname: Random.cname(),
        },
      };
    },
  },
  {
    // 註冊
    url: "/api/user/register",
    method: "post",
    response() {
      return {
        errno: 0,
      };
    },
  },
  {
    // 登入
    url: "/api/user/login",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          token: Random.word(20),
        },
      };
    },
  },
];
