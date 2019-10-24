// PROBLEM 1
const capWord = (word: string): string => {
	return word.charAt(0).toUpperCase()
	+ word.slice(1).toLowerCase()
}

String.prototype.lowerFirst = function(): string {
	return this.charAt(0).toLowerCase() + this.slice(1)
}

/*
// PROBLEM 2
String.prototype.upperWord = function(): string {
	const wordList: string[] = this.split(' ')
	let finalString: string = ''
	wordList.forEach((word: string) => {
		const result = word.upperFirst()
		finalString = finalString.concat(result, ' ')
	})
	return finalString.slice(0, -1)
}

// PROBLEM 3
String.prototype.upperWiggle = function(): string {
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
String.prototype.removeSpaces = function(): string {
	return this.replace(/\s/g, '')
}

// PROBLEM 5
String.prototype.trimSpaces = function(): string {
	return this.split(/\s+/)
		.join(' ')
		.trim()
}

// PROBLEM 6
String.prototype.allCaps = function(): string {
	return this.toUpperCase()
}

// PROBLEM 7
String.prototype.kababCase = function(): string {
	return this.toLowerCase()
		.split(/\s+/)
		.join(' ')
		.trim()
		.replace(/\s+/g, '-')
}

// PROBLEM 8
String.prototype.snakeCase = function(): string {
	return this.toLowerCase()
		.split(/\s+/)
		.join(' ')
		.trim()
		.replace(/\s+/g, '_')
}

// PROBLEM 9
String.prototype.camelCase = function(): string {
	return this.trimSpaces()
		.upperWord()
		.removeSpaces()
		.lowerFirst()
}
*/
