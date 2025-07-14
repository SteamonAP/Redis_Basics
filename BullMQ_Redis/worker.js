const { Worker } = require("bullmq");

const IORedis = require("ioredis");

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
});

const sendEmail = ({email, subject}) => {
    return new Promise((res) => {
        console.log(` Sending email to ${email} | Subject: ${subject}`);
        setTimeout(() => {
            console.log(` Email sent to ${email}`);
            res();
        }, 5000);
    })
}

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Message Recieved id: ${job.id} `);
    console.log(`Processing Message...`);
    console.log(`Sending Email to ${job.data.email}`);
    await sendEmail();
    console.log("Email Send");
  },
  { connection }
);

worker.on("error", (err) => {
  console.error("Worker error: ", err);
});

process.on("SIGINT", async () => {
  console.log(" Gracefully shutting down worker...");
  await worker.close();
  await connection.quit();
  process.exit(0);
});
