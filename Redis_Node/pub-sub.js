const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (error) =>
  console.log("Redis client error appeared!", error)
);

const testPubSub = async () => {
  try {
    await client.connect();
    //dummy subscriber
    // const subscriber = client.duplicate()
    // await subscriber.connect();
    // await subscriber.subscribe('test-channel',(message,channel) => {
    //     console.log(`Recieved message : ${message} from channel : ${channel}`);
    // });
    //dummy publisher

    // await client.publish('test-channel','Heyy welcome to AMoghs channel ')
    // await client.publish('test-channel','Heyy welcome to AMoghs channel again! ')

    // await new Promise((resolve)=>setTimeout(resolve,5000));

    // await subscriber.unsubscribe('test-channel')
    // await subscriber.quit()

    //pipelining and Transactions

    // const multi = client.multi();

    // multi.set("Key:trans_1", "val_100");
    // multi.set("Key:trans_2", "val_150");
    // multi.get("Key:trans_1");
    // multi.get("Key:trans_2");

    // const result = await multi.exec();
    // console.log(result);

    // const pipeline = client.multi();
    // multi.set("Key:pipe_1", "val_100");
    // multi.set("Key:pipe_2", "val_150");
    // multi.get("Key:pipe_1");
    // multi.get("Key:pipe_2");

    // const pipelineresult = await multi.exec()
    // console.log(pipelineresult);

    //batch

    // for(let i=0; i<1000; i++){
    //     pipeline.set(`user:${i}:action`,`Action ${i}`)
    // }
    // const result = await pipeline.exec()
    // console.log(result);

    console.time("without pipeline");

    for (let i=0 ; i<1000; i++){
        await client.set(`user${i}`,`user_amt${i}`)
    }
    console.timeEnd("without pipeline");

    console.time("with pipeline");

    const pipeline = client.multi();
    for(let i=0;i<1000;i++){
        pipeline.set(`user_pipe${i}`,`user_pamt${i}`)
    }
    await pipeline.exec();
    console.timeEnd("with pipeline");
    
    
    
  } catch (error) {
    console.error(error);
  } finally {
    await client.quit();
  }
};

testPubSub();
