const bubbleTeaType = require('./bubble_tea_type');
const randomSize = Object.keys(bubbleTeaType).length;

const getRandomBubbleTeaType = () => {
  return Object.keys(bubbleTeaType)[Math.floor(Math.random() * randomSize)];
};

module.exports = getRandomBubbleTeaType;
