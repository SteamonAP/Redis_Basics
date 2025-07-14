const client = require('./client');


const init = async () => {
    await client.set('msg:7','Hey from nodeJS!!')
    await client.expire("msg:7",10)
    const result = await client.get('msg:7');
    console.log("Result:- ",result);
}

init()