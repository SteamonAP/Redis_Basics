const client = require('./client');

const init =async () => {
    // await client.lpush("message",1)
    // await client.lpush("message",2)
    // await client.lpush("message",3)
    // await client.lpush("message",4)
    const result = await client.blpop("message",20);
    console.log(result)
}
init()