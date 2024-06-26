"use strict";
// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
async function fetchGreeting() {
    return setTimeout(() => {
        console.log("Hello How are You");
    }, 2000);
}
fetchGreeting();
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
async function simulateTask() {
    const wait = await fetchGreeting();
    console.log("Task Started");
    return setTimeout(() => {
        console.log("Task Completed");
    }, 1000);
}
simulateTask();
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
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
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.floor(Math.random() * 10) < 5) {
                res("Data Fetch Successfull");
            }
            else {
                rej("Data Fetch Failed");
            }
        }, 1000);
    });
}
async function Datafetching() {
    try {
        const dataFetch = await fetchWithError();
        console.log("Resolve:", dataFetch);
    }
    catch (Failed) {
        console.log("Reject:", Failed);
    }
}
Datafetching();
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called
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
    }
    catch (givingError) {
        console.log("Error", givingError);
    }
}
executeSequentially();
