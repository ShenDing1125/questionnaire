const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList");
const getComponentList = require("./data/getComponentList");

const Random = Mock.Random;

module.exports = [
  {
    // 獲取單個問卷信息
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: "問卷描述",
          js: "",
          css: "",
          isDeleted: false,
          isPublished: true,
          componentList: getComponentList(),
        },
      };
    },
  },
  {
    // 創建問卷
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // 獲取（查詢）問卷列表
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;
      const pageSize = parseInt(query.pageSize) || 10;

      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isDeleted, isStar }), // 當前頁
          total: 100, // 總數，用於分頁
        },
      };
    },
  },
  {
    // 更新問卷
    url: "/api/question/:id",
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },
  {
    // 複製問卷
    url: "/api/question/duplicate/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // 批量徹底刪除
    url: "/api/question",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
