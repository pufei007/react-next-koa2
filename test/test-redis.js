async function test() {
  const Redis = require("ioredis");

  const redis = new Redis({
    port: 6379
  });

  const keys = await redis.keys("*");
  await redis.set("ccc", 123123);

  console.log(keys);
  console.log(await redis.get("ccc"));
}
test();
