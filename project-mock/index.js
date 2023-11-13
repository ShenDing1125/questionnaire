const Koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock/index");
var chineseConv = require("chinese-conv");

const app = new Koa();
const router = new Router();

// 模擬網絡請求的加載狀態，延遲1s
async function getRes(fn, ctx) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn(ctx);
      resolve(res);
    }, 1000);
  });
}

// 將 mock 隨機產生的"簡體字"轉成"繁體字"
function languageTransform(data) {
  const _data = chineseConv.tify(JSON.stringify(data));
  return JSON.parse(_data);
}

// 註冊 mock 路由
mockList.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    // const res = response()
    const res = await getRes(response, ctx);
    ctx.body = languageTransform(res);
  });
});

app.use(router.routes());
app.listen(3001); // port 端口
