function dosomething() {
    throw new Error("Something went wrong!");
}
function init() {
    try {
        dosomething();
    } catch (e) {
        console.error("Caught an error: " + e.message);
    }
    console.log("After successful error handling...");
}
init();