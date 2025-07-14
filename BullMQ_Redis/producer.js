const { Queue, tryCatch } = require("bullmq");

const connection = {
  host: "127.0.0.1",
  port: 6379,
};

const notificationQueue = new Queue("email-queue",{});

const addToQueue = async () => {
  try {
    const result = await notificationQueue.add("email to amogh4", {
      email: "amoghpitale7@gmail.com",
      subject: "Welcome Message4",
      body: "Hey Amogh.., Welcome to the CLub_4",
    });
    console.log("✅ Job added to queue:", result.id);
  } catch (error) {
    console.error("❌ Failed to add job:", err);
  }
};

addToQueue();
