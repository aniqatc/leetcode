/**
 * @param {Function[]} functions
 * @return {Function}
 */

function compose(functions) {
	functions.reverse();

	return function (x) {
		let result = x;
		for (let i = 0; i < functions.length; i++) {
			result = functions[i](result);
		}
		return result;
	};
}

const fn = compose([x => x + 1, x => 2 * x]);
fn(4); // 9
