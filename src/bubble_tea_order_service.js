const bubbleTeaMessage = require("./bubble_tea_messenger");
const logMessage = require("./simple_logger");

const createOrderRequest = (bubbleTeaRequest) => {

    logMessage(`Creating an Order Request for the following Bubble Tea Request  ${JSON.stringify(bubbleTeaRequest)}`);
    return 1;
}

createOrderRequest({hello: "there", what: "something"})

module.exports = {
    createOrderRequest
}