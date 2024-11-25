import {getColorMappedToIndex} from './getColor';

describe('color utils - get color', () => {
  describe('getColorMappedToIndex', () => {
    const testMatrix = [
      {index: 0, isPastel: true, expected: '#A0C4FF'},
      {index: 5, isPastel: true, expected: '#FDFFB6'},
      {index: 42, isPastel: true, expected: '#CAFFBF'},
      {index: 127, isPastel: true, expected: '#9BF6FF'},
      {index: undefined, isPastel: true, expected: '#aaa'},
      {index: 0, isPastel: false, expected: '#000080'},
      {index: 5, isPastel: false, expected: '#A52A2A'},
      {index: 42, isPastel: false, expected: '#5C4033'},
      {index: 127, isPastel: false, expected: '#008000'},
      {index: undefined, isPastel: false, expected: '#000'},
      {index: 0, isPastel: undefined, expected: '#000080'},
      {index: 5, isPastel: undefined, expected: '#A52A2A'},
      {index: 42, isPastel: undefined, expected: '#5C4033'},
      {index: 127, isPastel: undefined, expected: '#008000'},
      {index: undefined, isPastel: undefined, expected: '#000'},
    ];

    describe.each(testMatrix)(
      'with index=$index and isPastel=$isPastel',
      ({index, isPastel, expected}) => {
        it(`should return "${expected}"`, () => {
          expect(getColorMappedToIndex(index, isPastel)).toBe(expected);
        });
      },
    );
  });
});
