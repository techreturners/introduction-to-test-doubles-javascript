const bubbleTeaType = require('./bubble_tea_type');
const randomSize = Object.keys(bubbleTeaType).length;

const getRandomBubbleTeaType = (randomInt) => {
  return Object.keys(bubbleTeaType)[Math.floor(randomInt * randomSize)];
};

module.exports = getRandomBubbleTeaType;
