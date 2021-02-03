const Koa = require("koa")
const Router = require("koa-router")
const koaBody = require("koa-body")
const port = process.env.PORT || 8090
const app = new Koa()
const router = new Router()
const cors = require("koa2-cors")
app.use(cors());
router.get("/book", async (ctx, next) => {
    ctx.set('Set-Cookie','customer=huangxp');
    ctx.response.body = 44223
})
router.get("/book1", async (ctx, next) => {
    ctx.response.body = 1122
})
router.get("/book11", async (ctx, next) => {
    console.log(ctx.req.rawHeaders);
      // 获取jsonp的callback
  let callbackName = ctx.query.callback || 'ss'
  let returnData = {
    success: true,
    data: {
      text: 'this is a jsonp api',
      time: new Date().getTime(),
    }
  }
  // jsonp的script字符串
  let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`
  // 用text/javascript，让请求支持跨域获取
  ctx.type = 'text/javascript'
  // 输出jsonp字符串
  ctx.body = jsonpStr

    // next.end('console.log(332);');
    // ctx.response.body = 'console.log(123);'
})
app.use(router.routes())
app.listen(port, () => {
    console.log(`listen on port: ${port}`)
})
