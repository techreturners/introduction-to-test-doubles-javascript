const bubbleTeaType = require('./bubble_tea_type');
const randomSize = Object.keys(bubbleTeaType).length;

const getRandomBubbleTeaType = () => {
  // Random val just created for readers to
  // observe how that is controlled with a stub
  const randomVal = Math.random();
  return Object.keys(bubbleTeaType)[Math.floor(randomVal * randomSize)];
};

module.exports = getRandomBubbleTeaType;
