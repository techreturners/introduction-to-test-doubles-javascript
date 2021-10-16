const {createOrderRequest} = require('./bubble_tea_order_service');
const bubbleTeaType = require('./bubble_tea_type');
const bubbleTeaMessenger = require('./bubble_tea_messenger');
const sendEmailSpy = jest.spyOn(bubbleTeaMessenger, 'sendBubbleTeaOrderRequestEmail');

let dummyPaymentDetails;

beforeEach(() => {
  dummyPaymentDetails = {
    name: 'Another person',
    address: '123 Some Street',
    debitCard: {
      digits: '777777',
    },
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

test('test successful bubble tea order request when using a spy', () => {
  // Arrange
  const bubbleTeaRequest = {
    paymentDetails: dummyPaymentDetails,
    bubbleTea: {
      type: bubbleTeaType.PEACHICETEA,
    },
  };

  // Act
  const orderRequest = createOrderRequest(bubbleTeaRequest);

  // Assert
  expect(orderRequest.name).toBe(dummyPaymentDetails.name);
  expect(orderRequest.digits).toBe(dummyPaymentDetails.debitCard.digits);
  expect(sendEmailSpy).toHaveBeenCalledWith(orderRequest);
  expect(sendEmailSpy).toHaveBeenCalledTimes(1);
});
