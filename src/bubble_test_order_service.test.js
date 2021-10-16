const {createOrderRequest} = require('./bubble_tea_order_service');
const bubbleTeaType = require('./bubble_tea_type');
const sendBubbleTeaOrderRequestEmail = require('./bubble_tea_messenger');
jest.mock('./bubble_tea_messenger');

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

afterEach(() => {
  jest.clearAllMocks();
});

test('test successful bubble tea order request', () => {
  // Arrange
  const bubbleTeaRequest = {
    paymentDetails: dummyPaymentDetails,
    bubbleTea: {
      type: bubbleTeaType.MATCHAMILKTEA,
    },
  };

  // Act
  const orderRequest = createOrderRequest(bubbleTeaRequest);

  // Assert
  expect(orderRequest.name).toBe(dummyPaymentDetails.name);
  expect(orderRequest.digits).toBe(dummyPaymentDetails.debitCard.digits);
  expect(sendBubbleTeaOrderRequestEmail).toHaveBeenCalledWith(orderRequest);
  expect(sendBubbleTeaOrderRequestEmail).toHaveBeenCalledTimes(1);
});
