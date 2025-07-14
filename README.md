# 🔴 Redis_Basics

A beginner-friendly exploration into Redis fundamentals using the CLI, Node.js, Docker, and BullMQ.

---

## 🧠 What This Repo Covers

This repository is a hands-on journal of my journey into learning Redis, including:

### 🔹 Redis Setup
- Spun up a Redis server using Docker:
  ```bash
  docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
Accessed RedisInsight UI at http://localhost:8001

Verified Redis server with:

bash
Copy
Edit
docker exec -it redis-stack redis-cli ping
🔹 Redis CLI Practice
Explored Redis through the command line using:

bash
Copy
Edit
docker exec -it redis-stack redis-cli
Practiced with basic data structures like:

SET, GET (strings)

HSET, HGET, HMGET (hashes)

INCR, DECR, DEL

KEYS, EXISTS

Tried out and replaced data using Redis commands interactively (not all committed)

⚙️ Node.js Integration
📁 client.js
Connected Node.js to Redis using ioredis

Set up a reusable Redis client for all scripts

📁 index.js
Used Redis commands via JavaScript

Stored and retrieved hash data:

js
Copy
Edit
await client.hset('bike:1', { model: 'hc900', brand: 'Audi', ... });
await client.hget('bike:1', 'model');
Incremented values using hincrby

Logged data dynamically with async/await

📬 Email Queue with BullMQ
✅ worker.js
Set up a Redis-backed job queue with bullmq

Created a worker to simulate sending emails using async jobs

Logged job lifecycle events (received → processing → complete)

Configured maxRetriesPerRequest: null for BullMQ compatibility

Gracefully handled shutdown with SIGINT

✅ producer.js
Created a queue producer that adds email jobs to the queue

Defined payloads with email, subject, and body

Successfully triggered jobs for the worker to process

🚀 How to Run
1. Start Redis (via Docker):
bash
Copy
Edit
docker start redis-stack
2. Run the Worker:
bash
Copy
Edit
node worker.js
3. Trigger a Job:
bash
Copy
Edit
node producer.js
🔮 Next Goals (Coming Soon?)
 RedisJSON & RediSearch exploration

 Using redis-om for object modeling

 Building a leaderboard using ZADD / ZRANGE

 Exploring Redis Streams or Pub/Sub

🧰 Tech Stack
Tool	Usage
Redis	In-memory DB + queue
Docker	Running Redis easily
ioredis	Node.js Redis client
BullMQ	Queue system w/ Redis
Node.js	Application logic

📁 Repo Structure
bash
Copy
Edit
Redis_Basics/
├── client.js       # ioredis connection
├── index.js        # basic Redis commands
├── producer.js     # BullMQ job producer
├── worker.js       # BullMQ worker for email jobs
└── README.md       # you’re reading it 😉
🧑‍💻 Author
Built with curiosity by @SteamonAP

