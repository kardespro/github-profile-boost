const { Worker, isMainThread, workerData } = require("worker_threads");
const { greenBright, bold, red } = require("colorette");

if (isMainThread) {
  const numWorkers = 10;
  let workersFinished = 0;

  for (let i = 0; i < numWorkers; i++) {
    setInterval(() => {
      const worker = new Worker("./worker.js", {
        workerData: {
          
          workerId: i + 1,
        },
      });

      worker.on("message", (message) => {
        if (message.status === "done") {
          workersFinished++;
          console.log(bold(greenBright(`Worker ${message.workerId} Completed`)));
          if (workersFinished === numWorkers) {
            console.log("All Workers Completed Works");
          }
        } else if (message.status === "error") {
          console.error(bold(red(`Error in : ${message.workerId}`)));
        }
      });
    }, 5000);
  }
} else {
  require("./worker.js");
}
