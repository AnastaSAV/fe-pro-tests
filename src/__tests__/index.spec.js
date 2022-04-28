import {
	changeStringCase,
	sumOfArray,
	divisibleBy,
	addDotsToString,
	objectEntries,
} from '../index';

// changeStringCase() tests
describe('changeStringCase()', () => {
	describe('When the string words are on different register', () => {
		it('Changing string to lowercase', () => {
			const result = changeStringCase('I LOVE JS', 'lowercase');
			expect(result).toEqual('i love js');
			expect(changeStringCase('i Love Js', 'lowercase')).toEqual('i love js');
			expect(changeStringCase('iLoveJs', 'lowercase')).toEqual('ilovejs');
		});
	});
	describe('When the string words are on different register', () => {
		it('Changing string to uppercase', () => {
			const result = changeStringCase('i love js', 'uppercase');
			expect(result).toEqual('I LOVE JS');
			expect(changeStringCase('i Love Js', 'uppercase')).toEqual('I LOVE JS');
			expect(changeStringCase('iLoveJs', 'uppercase')).toEqual('ILOVEJS');
		});
	});
	describe('Looks for empty string and for returned value', () => {
		it ('Returns an empty string', () => {
			expect(changeStringCase('', '')).toEqual('');
			expect(changeStringCase('', 'lowercase')).toEqual('');
			expect(changeStringCase('', 'uppercase')).toEqual('');
		})
	});
});

describe('sumOfArray()', () => {
	describe.each([
		{
			a: 0,
			b: 1,
			result: 1,
		},
		{
			a: 1,
			b: 2,
			result: 3,
		},
		{
			a: 2,
			b: 3,
			result: 5,
		},
		{
			a: 3,
			b: 3,
			result: 6,
		},
		{
			a: 4,
			b: -3,
			result: 1,
		},
		{
			a: 5,
			b: '-12',
			result: 5,
		},
	])('sumOfArray($a, $b)', ({a, b, result}) => {
		it('Returns summary result', () => {
			expect(sumOfArray([a, b])).toEqual(result)
		});
		it('Returns accumulator', () => {
			expect(sumOfArray([a, b])).toEqual(result)
		});
	});
});

// divisibleBy() tests
describe('divisibleBy()', () => {
	describe('Checking a numerical array with even and odd numbers', () => {
		let array = [1, 2, 3, 4, 5, 6, 7, 8];
		it('Returns an array with even numbers, which are divided into two', () => {
			expect(divisibleBy(array, 2)).toEqual([2, 4, 6, 8]);
		});
	});
	describe('Checking a numerical array with even numbers', () => {
		let array = [8, 10, 40, 120, 480, 840];
		it('Returns an array with even numbers, which are divided into two', () => {
			expect(divisibleBy(array, 8)).toEqual([8, 40, 120, 480, 840]);
		});
	});
	describe('Checking a numerical array with odd numbers', () => {
		let array = [13, 23, 47, 125, 381, 1011];
		it('Returns an array with odd numbers, which are divides into three', () => {
			expect(divisibleBy(array, 3)).toEqual([381, 1011]);
		});
	});
	describe('Checking a numerical array with fractional numbers', () => {
		let array = [1.5, 12.4, 18.5];
		it('Returns an empty array', () => {
			expect(divisibleBy(array, 2)).toEqual([]);
		});
	});
	describe('Checking an array of strings', () => {
		let array = ['3', '9', '18', '14', '36', '25'];
		it('Returns array of strings, which values divides into three', () => {
			expect(divisibleBy(array, 3)).toEqual(['3', '9', '18', '36']);
		});
	});
	describe('Checking a numerical array with missing values', () => {
		let array = [3, 9, 18, , 14, 36, , 25];
		it('Returns numerical array without empty values', () => {
			expect(divisibleBy(array, 3)).toEqual([3, 9, 18, 36]);
		});
	});
	describe('Checking an empty array, which trying to devide into 2', () => {
		let array = [];
		it('Returns an empty array', () => {
			expect(divisibleBy(array, 2)).toEqual([]);
		});
	});
});

// AddToString() tests
describe('addDotsToString()', () => {
	describe('Looks for empty string as a first argument', () => {
		it ('Returns an empty value', () => {
			expect(addDotsToString('', -1)).toEqual('...');
			expect(addDotsToString('')).toEqual('');
			expect(addDotsToString('', 12)).toEqual('');
		})
	});
	describe('Looks for missing second argument', () => {
		it ('Returns an original string', () => {
			expect(addDotsToString('some long string')).toEqual('some long string');
		})
	});
	describe('Looks for a number as a first argument', () => {
		it ('Returns an original numerical value', () => {
			expect(addDotsToString(444, -1)).toEqual(444);
			expect(addDotsToString(444, 3)).toEqual(444);
			expect(addDotsToString(444, 10)).toEqual(444);
		})
	});
	describe('Looks for a length as a second argument, which longer then string length', () => {
		it ('Returns an original string', () => {
			expect(addDotsToString('some long string', 45)).toEqual('some long string');
		})
	});
	describe('Looks for a negative value as a second argument', () => {
		it ('Returns correct calculated value', () => {
			expect(addDotsToString('some long string', -1)).toEqual('some long st...');
			expect(addDotsToString('some long string', -13)).toEqual('...');
		})
	});
});

// objectEntries() tests
describe('objectEntries()', () => {
	describe.each([
		{
			a: 0,
			b: 1,
			result: [['a', 0], ['b', 1]],
		},
		{
			a: 'Ivan',
			b: 'Ivanov',
			result: [['a', 'Ivan'], ['b', 'Ivanov']],
		},
		
	])('objectEntries($a, $b)', ({a, b, result}) => {
		it('Returns multidimensional array', () => {
			expect(objectEntries({a, b})).toEqual(result)
		});
	});
});
