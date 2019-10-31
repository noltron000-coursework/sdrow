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
// ==TODO==
// determine what `type` that a function is;
// it is passed in as a parameter!
const caseCase = (sentence: string, lambda: any): string => {
	let result: string = ''
	const words: string[] = sentence.split(' ')
	for (let word of words) {
		word = lambda(word)
		result = result.concat(word, ' ')
	}
	return result
}

const capCase = (sentence: string): string => {
	return caseCase(sentence, capWord)
}

const uncapCase = (sentence: string): string => {
	return caseCase(sentence, uncapWord)
}

const upperCase = (sentence: string): string => {
	return caseCase(sentence, upperWord)
}

const lowerCase = (sentence: string): string => {
	return caseCase(sentence, lowerWord)
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

// PROBLEM 4
const removeSpaces = (word: string): string => {
	// /\s+ selects any consecutive occurence of whitespace
	// /g stands for a global search
	// replace it with empty string
	return word.replace(/\s+/g, '')
}

// PROBLEM 5
const trimSpaces = (word: string): string => {
	// /\s+ selects any consecutive occurence of whitespace
	// /g stands for a global search
	// replace it with a single space
	// trim removes whitespace before/after other characters
	return word.replace(/\s+/g, ' ').trim()
}

/*
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
