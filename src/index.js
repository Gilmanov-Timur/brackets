module.exports = function check(str, bracketsConfig) {
	const openBrackets = []
	const closeBrackets = []
	const brackets = []

	bracketsConfig.forEach(bracket => {
		openBrackets.push(bracket[0]);
		closeBrackets.push(bracket[1]);
	})

	for (let i = 0; i < str.length; i++) {
		const openIndex = openBrackets.indexOf(str[i])
		const closeIndex = closeBrackets.indexOf(str[i])

		if (openIndex !== -1 && closeIndex !== -1) {
			if (brackets[brackets.length - 1] === str[i]) {
				brackets.pop()
			} else {
				brackets.push(closeBrackets[openIndex])
			}
		} else if (openIndex !== -1) {
			brackets.push(closeBrackets[openIndex])
		} else if (closeIndex !== -1) {
			if (brackets[brackets.length - 1] === str[i]) {
				brackets.pop()
			} else {
				return false
			}
		} else {
			return false
		}
	}

	return brackets.length === 0
}
