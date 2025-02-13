/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
	const newArray = [];

	for (let i = 0; i < arr.length; i++) {
		const newValue = fn(arr[i], i);
		newArray.push(newValue);
	}

	return newArray;
};
