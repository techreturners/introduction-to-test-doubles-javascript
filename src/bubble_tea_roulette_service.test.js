const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');

test.each`
    input          |         expectedResult 
    ${0.0}         |       ${'OOLONGMILKTEA'}
    ${0.2}         |       ${'JASMINEMILKTEA'}
    ${0.6}         |       ${'PEACHICETEA'}
    ${0.8}         |       ${'LYCHEEICETEA'}
  `('gets randomBubbleTeaType $input expects $expectedResult',
    ({input, expectedResult}) => {
      jest.spyOn(global.Math, 'random').mockReturnValue(input);
      expect(getRandomBubbleTeaType()).toBe(expectedResult);
    });
