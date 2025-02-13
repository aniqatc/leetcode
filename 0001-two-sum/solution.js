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
}
