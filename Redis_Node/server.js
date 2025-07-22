const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (error) =>
  console.log("Redis client error appeared!", error)
);

const connectionTest = async () => {
  try {
    await client.connect();
    console.log("Client connected");
    // await client.set("Key","Amogh");
    // const name = await client.get("Key");
    // console.log(name);
    // const del = await client.del("Key");
    // console.log(del);

    // await client.sAdd("user:grp", ["Amogh", "Sumant", "Nisarg", "Arjun"]);
    // const extract = await client.sMembers("user:grp");
    // console.log(extract);

    // await client.sRem('user:grp','Amogh');
    // const updated = await client.sMembers('user:grp');
    // console.log(updated);

    //sorted set
    //ZADD,ZREM,ZRANGE,ZRANK
    // await client.zAdd('cart',[
    //   {
    //     score : 100, value : 'Item 1'
    //   },
    //   {
    //     score : 75, value : 'Item 2'
    //   },
    //   {
    //     score: 150, value : 'Item 3'
    //   }
    // ])
    // const topCart = await client.zRangeWithScores('cart', 0,-1);
    // console.log(topCart);

    // const c2 = await client.zRankWithScore('cart','Item 2');
    // console.log(c2);

    //Hashes
    //HSET,HGET,HGETALL ,HDEL

    await client.hSet('product:1', {
      name : 'prod 1',
      desc : 'THe is prod 1',
      rating : '4.75',
    });
    const getAll = await client.hGetAll('product:1');
    const getr = await client.hGet('product:1','rating');
    console.log(getAll);
    console.log(getr);
    
    
  } catch (error) {
    console.error(error);
  } finally {
    await client.quit();
  }
};
connectionTest();
