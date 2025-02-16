/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// function twoSum(nums, target) {
//     for (let x = 0; x < nums.length; x++) {
//         for (let y = x + 1; y < nums.length; y++) {
//             if (nums[x] + nums[y] === target) {
//                 return [x, y];
//             }
//         }
//     }
// }

function twoSum(nums, target) {
	const values = new Map();

	for (let n = 0; n < nums.length; n++) {
		const difference = target - nums[n];

		if (values.has(difference)) {
			return [values.get(difference), n];
		}
		values.set(nums[n], n);
	}
	return [];
}

// Manual Tests
console.log(twoSum([1, 2, 3, 4, 5], 9)); // [3, 4]
console.log(twoSum([0, 0, 1, 1], 1)); // [1, 2]
console.log(twoSum([7, 10, 3, 2, 6, 0, 9, 11], 21)); // [1, 7]
console.log(twoSum([-3, -3], -6)); // [0, 1]

// Edge Cases
console.log(twoSum([0, 9, 8], 10)); // []
console.log(twoSum([1], 10)); // []
console.log(twoSum([], 10)); // []
