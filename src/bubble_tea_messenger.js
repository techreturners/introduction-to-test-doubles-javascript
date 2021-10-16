const logMessage = require('./simple_logger');

/**
 * Emails bubble tea order request
 * @param {Object} bubbleTeaOrderRequest JSON representing order request
 */
const sendBubbleTeaOrderRequestEmail = function(bubbleTeaOrderRequest) {
  // Do something fancy here/use another service/method
  // to send an email over SMTP
  logMessage(`Yay! I just sent the Order Request email for the following `+
  `Bubble Tea Order Request: ${JSON.stringify(bubbleTeaOrderRequest)}`);
}

module.exports = {
  sendBubbleTeaOrderRequestEmail,
};
