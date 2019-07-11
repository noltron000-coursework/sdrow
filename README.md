![](https://img.shields.io/github/issues/noltron000/library-challenge.svg)
![](https://img.shields.io/github/forks/noltron000/library-challenge.svg)
![](https://img.shields.io/github/stars/noltron000/library-challenge.svg)
![](https://img.shields.io/github/license/noltron000/library-challenge.svg)
![](https://img.shields.io/twitter/url/https/github.com%2Fnoltron000%2Flibrary-challenge.svg)

## check it out on [`npm`](https://www.npmjs.com/package/cool-text-package!)

### Features
1. `String.prototype.upperFirst` A function that uppercases the first character of string
1. `String.prototype.lowerFirst` A function that lowercases the first character of string
1. `String.prototype.upperWord` A function that uppercases the first letter of each word in a string
1. `String.prototype.upperWiggle` A function that uppercases every other letter
1. `String.prototype.removeSpaces` A function that removes all whitespace from a given string
1. `String.prototype.trimSpaces` A function that removes only the extra whitespace from a given string (example: `“ a        b ” → “a b”`)
1. `String.prototype.allCaps` A function that makes all characters uppercase. (this is the same as `.toUppercase()`)
1. `String.prototype.kababCase` A function that removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
1. `String.prototype.snakeCase` Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
1. `String.prototype.camelCase` Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.

See [Homework 1](https://github.com/Make-School-Courses/FEW-2.1-Writing-JavaScript-Libraries/blob/master/Assignments/assignment-1-string-lib.md)

### Usage
Just connect any of those functions to a string and see magic! Note, none of these functions take in a parameter.

Example:
```js
let superString = 'wow! this project is    soooooooooooo   cool. Just amazing.    '
console.log(superString.snakeCase())
```
