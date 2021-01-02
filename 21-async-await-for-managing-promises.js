function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
async function longRunningOperation() {
    // logic
    return 42;
}
async function run() {
    // logic
    console.log('Start!!')
    promiseTimeout(2000);
    console.log('Stop!!');

    run();
}