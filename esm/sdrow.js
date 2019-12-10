const capWord = (word) => {
    return word.charAt(0).toUpperCase()
        + word.slice(1).toLowerCase();
};
const upperWord = (word) => {
    return word.toUpperCase();
};
const lowerWord = (word) => {
    return word.toLowerCase();
};
const jiggleWord = (word) => {
    let result = '';
    Array.from(word).forEach((letter, index) => {
        if (index % 2 === 0) {
            letter = letter.toUpperCase();
        }
        else {
            letter = letter.toLowerCase();
        }
        result += letter;
    });
    return result;
};
const wiggleWord = (word) => {
    let result = '';
    Array.from(word).forEach((letter, index) => {
        if (index % 2 === 1) {
            letter = letter.toUpperCase();
        }
        else {
            letter = letter.toLowerCase();
        }
        result += letter;
    });
    return result;
};
const removeSpaces = (sentence) => {
    // replace any number of spaces with an empty string.
    // `/\s+` selects consecutive occurences of whitespace.
    // `/g` stands for a global search.
    return sentence.replace(/\s+/g, '');
};
const trimSpaces = (sentence) => {
    // replace any number of spaces with a single space.
    // then, trim extra spaces before/after the sentence.
    // `/\s+` selects consecutive occurences of whitespace.
    // `/g` stands for a global search.
    return sentence.replace(/\s+/g, ' ').trim();
};
const removeNonAlpha = (sentence) => {
    // delete non-alpha characters, keeping spaces
    // `[]` states characters can match these.
    // `^` is the not-operator.
    // `|` is the or-operator.
    // `\w` selects alpha characters.
    // `\s` selects space characters.
    // `\d` selects digit characters.
    // `/g` stands for a global search.
    return sentence.replace(/[^\w\s]|\d/g, '');
};
// ==TODO==
// determine what `type` that a function is;
// it is passed in as a parameter!
const caseCase = (sentence, lambda) => {
    let result = '';
    const words = sentence.split(' ');
    for (let word of words) {
        word = lambda(word);
        result = result.concat(word, ' ');
    }
    return result.trim();
};
const capCase = (sentence) => {
    return caseCase(sentence, capWord);
};
const upperCase = (sentence) => {
    return caseCase(sentence, upperWord);
};
const lowerCase = (sentence) => {
    return caseCase(sentence, lowerWord);
};
const jiggleCase = (sentence) => {
    return caseCase(sentence, jiggleWord);
};
const wiggleCase = (sentence) => {
    return caseCase(sentence, wiggleWord);
};
const kababCase = (sentence) => {
    let result = sentence;
    result = lowerCase(result);
    result = trimSpaces(result);
    result = removeNonAlpha(result);
    result = result.replace(/\s/g, '-');
    // replace all spaces with hyphens.
    // `/\s` selects one whitespace character unit.
    // `/g` stands for a global search.
    return result;
};
const snakeCase = (sentence) => {
    let result = sentence;
    result = lowerCase(result);
    result = trimSpaces(result);
    result = removeNonAlpha(result);
    result = result.replace(/\s/g, '_');
    // replace all spaces with underscores.
    // `/\s` selects one whitespace character unit.
    // `/g` stands for a global search.
    return result;
};
const camelCase = (sentence) => {
    let result = sentence;
    result = capCase(result);
    result = removeSpaces(result);
    result = removeNonAlpha(result);
    result = result.charAt(0).toLowerCase()
        + result.slice(1);
    return result;
};
const pascalCase = (sentence) => {
    let result = sentence;
    result = capCase(result);
    result = removeSpaces(result);
    result = removeNonAlpha(result);
    return result;
};

export { camelCase, capWord, caseCase, jiggleCase, jiggleWord, kababCase, lowerCase, lowerWord, pascalCase, removeNonAlpha, removeSpaces, snakeCase, trimSpaces, upperCase, upperWord, wiggleCase, wiggleWord };
