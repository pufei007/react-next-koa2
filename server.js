const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log("koa server on 3000");
  });
});

// server.use(async (ctx, next) => {
//   ctx.body = "<span>2222222222222222222222</span>";
//   await next();
// });
// server.use(async (ctx, next) => {
//   ctx.body = "<span>2222222222288</span>";
//   // await next
// });
// server.listen(3002, () => {
//   console.log("koa server on 3000");
// });
