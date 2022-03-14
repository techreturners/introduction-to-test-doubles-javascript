const {createOrderRequest} = require('./bubble_tea_order_service');
const bubbleTeaType = require('./bubble_tea_type');
const bubbleTeaMessenger = require('./bubble_tea_messenger');
jest.mock('./bubble_tea_messenger');
jest.mock('./simple_logger');

afterEach(() => {
  jest.clearAllMocks();
});

test.each([
  {dummyPaymentDetails: {
    name: 'John',
    address: '123 Earls Court',
    debitCard: {digits: '123456'}
  }, bubbleTeaType: bubbleTeaType.MATCHAMILKTEA},
  {dummyPaymentDetails: {
    name: 'Mars',
    address: '12B Wimbeldon Road',
    debitCard: {digits: '123400'}
  }, bubbleTeaType: bubbleTeaType.PEACHICETEA},
  {dummyPaymentDetails: {
    name: 'Lillie',
    address: '50 Oxford Street',
    debitCard: {digits: '343400'}
  }, bubbleTeaType: bubbleTeaType.JASMINEMILKTEA},
])('test successful bubble tea order request',
    ({dummyPaymentDetails, bubbleTeaType}) => {
      const bubbleTeaRequest = {
        paymentDetails: dummyPaymentDetails,
        bubbleTea: {
          type: bubbleTeaType,
        },
      };
      const orderRequest = createOrderRequest(bubbleTeaRequest);
      expect(orderRequest.name).toBe(dummyPaymentDetails.name);
      expect(orderRequest.digits).toBe(dummyPaymentDetails.debitCard.digits);
      expect(bubbleTeaMessenger.sendBubbleTeaOrderRequestEmail)
          .toHaveBeenCalledWith(orderRequest);
      expect(bubbleTeaMessenger.sendBubbleTeaOrderRequestEmail)
          .toHaveBeenCalledTimes(1);
    },
);
