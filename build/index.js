const interval = setInterval(() => {
  console.log("Hi");
}, 1000);

async function gracefulStop() {
  clearInterval(interval);
  for (let i = 20; i > 0; i--) {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(`Stopping ${i}`);
  }
  console.log("Bye");
  process.exit(0);
}

process.on("SIGTERM", gracefulStop);
process.on("SIGINT", gracefulStop);
