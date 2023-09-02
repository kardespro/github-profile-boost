const { workerData, parentPort } = require("worker_threads");
const axios = require("axios")

async function channelChaos() {
  //const { owner, repo, path } = workerData;

  const darkRandomNumber = Math.floor(Math.random() * 666);

  try {
    
   const w = await axios.get(`https://camo.githubusercontent.com/30ba7a445a34d8a9d20e62fff8355857420ee40d8b79a0904a385e9c95145056/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6b617264657370726f266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174`)
    
   // await fs.unlink(logFilePath);
    parentPort.postMessage({ status: "done", workerId: workerData.workerId });
  } catch (hiddenError) {
    //console.log(hiddenError)
    parentPort.postMessage({ status: "error", workerId: workerData.workerId  });
    
  }
}

channelChaos();
