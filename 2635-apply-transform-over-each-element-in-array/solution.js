/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const map = function (arr, fn) {
	const newArray = [];

	for (let i = 0; i < arr.length; i++) {
		const newValue = fn(arr[i], i);
		newArray.push(newValue);
	}

	return newArray;
};
