declare global {
	interface String {
		upperFirst(): String
		lowerFirst(): String
		upperWord(): String
		upperWiggle(): String
		removeSpaces(): String
		trimSpaces(): String
		allCaps(): String
		kababCase(): String
		snakeCase(): String
		camelCase(): String
	}
}

// PROBLEM 1
String.prototype.upperFirst = function() {
	return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.lowerFirst = function() {
	return this.charAt(0).toLowerCase() + this.slice(1)
}

// PROBLEM 2
String.prototype.upperWord = function() {
	const wordList = this.split(' ')
	let finalString = ''
	wordList.forEach((word) => {
		const result = word.upperFirst()
		finalString = finalString.concat(result, ' ')
	})
	return finalString.slice(0, -1)
}

// PROBLEM 3
String.prototype.upperWiggle = function() {
	let finalString = ''
	Array.from(this).forEach((letter, index) => {
		if (index % 2 === 0) {
			letter = letter.toUpperCase()
		} else {
			letter = letter.toLowerCase()
		}
		finalString = finalString.concat(letter)
	})
	return finalString
}

// PROBLEM 4
String.prototype.removeSpaces = function() {
	return this.replace(/\s/g, '')
}

// PROBLEM 5
String.prototype.trimSpaces = function() {
	return this.split(/\s+/)
		.join(' ')
		.trim()
}

// PROBLEM 6
String.prototype.allCaps = function() {
	return this.toUpperCase()
}

// PROBLEM 7
String.prototype.kababCase = function() {
	return this.toLowerCase()
		.split(/\s+/)
		.join(' ')
		.trim()
		.replace(/\s+/g, '-')
}

// PROBLEM 8
String.prototype.snakeCase = function() {
	return this.toLowerCase()
		.split(/\s+/)
		.join(' ')
		.trim()
		.replace(/\s+/g, '_')
}

// PROBLEM 9
String.prototype.camelCase = function() {
	return this.trimSpaces()
		.upperWord()
		.removeSpaces()
		.lowerFirst()
}
