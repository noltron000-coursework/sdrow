// PROBLEM 1
const capWord = (word: string): string => {
	return word.charAt(0).toUpperCase()
	+ word.slice(1).toLowerCase()
}

const uncapWord = (word: string): string => {
	return word.toLowerCase()
}

const upperWord = (word: string): string => {
	return word.toUpperCase()
}

const lowerWord = (word: string): string => {
	return word.toLowerCase()
}

// PROBLEM 2
const capCase = (sentence: string): string => {
	// // get a list of all words and seperators
	// const {words, seperators} = deconstruct(sentence)
	let result = ''
	const words: string[] = sentence.split(' ')
	for (let word of words) {
		word = capWord(word)
		result = result.concat(word, ' ')
	}
	return result
}

const uncapCase = (sentence: string): string => {
	// // get a list of all words and seperators
	// const {words, seperators} = deconstruct(sentence)
	let result = ''
	const words: string[] = sentence.split(' ')
	for (let word of words) {
		word = uncapWord(word)
		result = result.concat(word, ' ')
	}
	return result
}

const upperCase = (sentence: string): string => {
	// // get a list of all words and seperators
	// const {words, seperators} = deconstruct(sentence)
	let result = ''
	const words: string[] = sentence.split(' ')
	for (let word of words) {
		word = upperWord(word)
		result = result.concat(word, ' ')
	}
	return result
}

const lowerCase = (sentence: string): string => {
	// // get a list of all words and seperators
	// const {words, seperators} = deconstruct(sentence)
	let result = ''
	const words: string[] = sentence.split(' ')
	for (let word of words) {
		word = lowerWord(word)
		result = result.concat(word, ' ')
	}
	return result
}

// PROBLEM 3
const jiggleWord = (word: string): string => {
	let result = ''
	Array.from(word).forEach((letter, index) => {
		if (index % 2 === 0) {
			letter = letter.toUpperCase()
		} else {
			letter = letter.toLowerCase()
		}
		result += letter
	})
	return result
}

const wiggleWord = (word: string): string => {
	let result = ''
	Array.from(word).forEach((letter, index) => {
		if (index % 2 === 1) {
			letter = letter.toUpperCase()
		} else {
			letter = letter.toLowerCase()
		}
		result += letter
	})
	return result
}

/*
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
