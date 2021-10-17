const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');

test('should generate random bubble tea', () => {
  // Arrange
  // Spy and control Math.random calls
  jest.spyOn(global.Math, 'random').mockReturnValue(0.2);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe('JASMINEMILKTEA');

  // Reset random to default status
  jest.spyOn(global.Math, 'random').mockRestore();
});
