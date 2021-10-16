const {createOrderRequest} = require('./bubble_tea_order_service');
const bubbleTeaType = require('./bubble_tea_type');

let dummyPaymentDetails;

beforeEach(() => {
  dummyPaymentDetails = {
    name: 'Some person',
    address: '123 Some Street',
    debitCard: {
      digits: '123456',
    },
  };
});

test('test successful bubble tea order request', () => {
  // Arrange
  const bubbleTeaRequest = {
    paymentDetails: dummyPaymentDetails,
    bubbleTea: {
      type: bubbleTeaType.MATCHAMILKTEA,
    },
  };

  createOrderRequest(bubbleTeaRequest);
});
