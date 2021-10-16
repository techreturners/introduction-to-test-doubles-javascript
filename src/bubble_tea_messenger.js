const logMessage = require("./simple_logger");

function sendBubbleTeaOrderRequestEmail(bubbleTeaOrderRequest) {
    //Do something fancy here/use another service/method to send an email over SMTP
    logMessage(`Yay! I just sent the Order Request email for the following Bubble Tea Order Request: ${JSON.stringfy(bubbleTeaOrderRequest)}`);
}

module.exports = sendBubbleTeaOrderRequestEmail;