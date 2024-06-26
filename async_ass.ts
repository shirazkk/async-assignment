// Question # 1

async function fetchGreeting() {
  return setTimeout(() => {
    console.log("Hello How are You");
  }, 2000);
}
fetchGreeting();
// Question # 2

async function simulateTask() {
  console.log("Task Started");
  return setTimeout(() => {
    console.log("Task Completed");
  }, 1000);
}
simulateTask();

// Question # 3

function fetchdata() {
  setTimeout(() => {
    return new Promise((res, rej) => {
      res("Data Fetched Successfully");
    })
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }, 1000);
}
fetchdata();

// Question # 4

function fetchWithError() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10) < 5) {
        res("Data Fetch Successfull");
      } else {
        rej("Data Fetch Failed");
      }
    }, 1000);
  });
}

async function Datafetching() {
  try {
    const dataFetch = await fetchWithError();
    console.log("Resolve:", dataFetch);
  } catch (Failed) {
    console.log("Reject:", Failed);
  }
}
Datafetching();

// Question # 5

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetch successfull");
    }, 1000);
  });
}
function processData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data process successfull");
    }, 2000);
  });
}

async function executeSequentially() {
  try {
    const fetchingData = await fetchData();
    console.log(fetchingData);

    const processingData = await processData();
    console.log(processingData);
  } catch (givingError) {
    console.log("Error", givingError);
  }
}
executeSequentially();
