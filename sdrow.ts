export const capWord = (word: string): string => {
	return word.charAt(0).toUpperCase()
	+ word.slice(1).toLowerCase()
}

export const upperWord = (word: string): string => {
	return word.toUpperCase()
}

export const lowerWord = (word: string): string => {
	return word.toLowerCase()
}

export const jiggleWord = (word: string): string => {
	let result: string = ''
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

export const wiggleWord = (word: string): string => {
	let result: string = ''
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

export const removeSpaces = (sentence: string): string => {
	// replace any number of spaces with an empty string.
	// `/\s+` selects consecutive occurences of whitespace.
	// `/g` stands for a global search.
	return sentence.replace(/\s+/g, '')
}

export const trimSpaces = (sentence: string): string => {
	// replace any number of spaces with a single space.
	// then, trim extra spaces before/after the sentence.
	// `/\s+` selects consecutive occurences of whitespace.
	// `/g` stands for a global search.
	return sentence.replace(/\s+/g, ' ').trim()
}

// ==TODO==
// determine what `type` that a function is;
// it is passed in as a parameter!
export const caseCase = (sentence: string, lambda: any): string => {
	let result: string = ''
	const words: string[] = sentence.split(' ')
	for (let word of words) {
		word = lambda(word)
		result = result.concat(word, ' ')
	}
	return result
}

export const capCase = (sentence: string): string => {
	return caseCase(sentence, capWord)
}

export const upperCase = (sentence: string): string => {
	return caseCase(sentence, upperWord)
}

export const lowerCase = (sentence: string): string => {
	return caseCase(sentence, lowerWord)
}

export const kababCase = (sentence: string): string => {
	let result: string = trimSpaces(lowerCase(sentence))
	// replace all spaces with hyphens.
	// `/\s` selects one whitespace character unit.
	// `/g` stands for a global search.
	return result.replace(/\s/g, '-')
}

export const snakeCase = (sentence: string): string => {
	let result: string = trimSpaces(lowerCase(sentence))
	// replace all spaces with underscores.
	// `/\s` selects one whitespace character unit.
	// `/g` stands for a global search.
	return result.replace(/\s/g, '_')
}

export const camelCase = (sentence: string): string => {
	let result: string = removeSpaces(capCase(sentence))
	result = result.charAt(0).toLowerCase()
	+ result.slice(1)
	return result
}

export const pascelCase = (sentence: string): string => {
	return removeSpaces(capCase(sentence))
}
