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
	const words: string[] = sentence.split(' ')
	sentence = ''
	for (let word of words) {
		word = capWord(word)
		sentence = sentence.concat(word, ' ')
	}
	return sentence
}

const uncapCase = (sentence: string): string => {
	// // get a list of all words and seperators
	// const {words, seperators} = deconstruct(sentence)
	const words: string[] = sentence.split(' ')
	sentence = ''
	for (let word of words) {
		word = uncapWord(word)
		sentence = sentence.concat(word, ' ')
	}
	return sentence
}

const upperCase = (sentence: string): string => {
	// // get a list of all words and seperators
	// const {words, seperators} = deconstruct(sentence)
	const words: string[] = sentence.split(' ')
	sentence = ''
	for (let word of words) {
		word = upperWord(word)
		sentence = sentence.concat(word, ' ')
	}
	return sentence
}

const lowerCase = (sentence: string): string => {
	// // get a list of all words and seperators
	// const {words, seperators} = deconstruct(sentence)
	const words: string[] = sentence.split(' ')
	sentence = ''
	for (let word of words) {
		word = lowerWord(word)
		sentence = sentence.concat(word, ' ')
	}
	return sentence
}


/*
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
