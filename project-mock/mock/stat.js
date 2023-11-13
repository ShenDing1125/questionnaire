const Mock = require("mockjs");
const getStatList = require("./data/getStatList");
const Random = Mock.Random;

module.exports = [
  // 答卷列表
  {
    url: "/api/stat/:questionId",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          total: 100, // 分頁
          list: getStatList(),
        },
      };
    },
  },
  // 獲取單個組件的統計數據彙總
  {
    url: "/api/stat/:questionId/:componentId",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          stat: [
            { name: "選項1", count: 20 },
            { name: "選項2", count: 10 },
            { name: "選項3", count: 25 },
          ],
        },
      };
    },
  },
];
