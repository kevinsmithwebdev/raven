import {splitMultiLineText} from './splitMultiLineText';

describe('string utils - splitMultiLineText', () => {
  const testMatrix = [
    {text: '', expected: ['']},
    {text: 'line 1', expected: ['line 1']},
    {text: 'line 1\nline 2', expected: ['line 1', 'line 2']},
    {text: 'line 1\nline 2\nline 3', expected: ['line 1', 'line 2', 'line 3']},
  ];

  describe.each(testMatrix)('for text="$text"', ({text, expected}) => {
    it(`should return ${expected}`, () => {
      expect(splitMultiLineText(text)).toStrictEqual(expected);
    });
  });
});
