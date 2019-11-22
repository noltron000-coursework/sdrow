# FEW 2.1 Assignment 1 - String Lib
The goal of this assignment is to create a JavaScript Library of String functions.

## Writing your first library
In your repo create a file named: `index.js`.
You'll add code to this file that solves the problems below.

## What code to write
The goal of this first library is to make write utilities that work with Strings.
Strings are one of the most common data types that you work on a regular basis.
There are very few programs that don't make use of Strings in one form or another.

JavaScript has a built in String Object/Class that has many methods built into it.
These do a lot but often you want to more.

JavaScript provides many methods to manipulate strings already but it doesn't do some of the things that we might want to do.
It's your job to write functions that solve the problems below.

- **Challenge 1** `capitalize()` - makes the first character of a given string uppercase.
	- Example: hello world -> Hello world
	- Strategies:
		- Use
			[`str.substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
			to get the first character and
			[`str.toUppercase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
			to convert that character to an uppercase character.
			Then concatenate the uppcase first character with the the original string starting from the second character.
		- Use
			[`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
			to convert the string into an array of characters, upper case the first element of the array with
			[`str.toUppercase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
			, and then join the array with
			[`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
		- (Advanced) Use a regular expression.
- **Challenge 2** `allCaps()` - makes all characters uppercase.
		(this is the same as
		[`str.toUppercase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
		)
	- Example: `foo bar` -> `FOO BAR`
	- Strategy: Make a new function that uses `str.toUpperCase()`.
		You can make an alias with a shorter easier to remember name.

- **Challenge 3** `capitalizeWords()` - makes the first character of each word uppercase.
	Imagine that each word is separated by a space.
	- Example: `do all the things` -> `Do All The Things`
		- Advanced: `capitalizeHeadline()` - capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from
			- Example: `the most foo in bar` -> `The Most Foo in Bar`
	- Strategies:
		- Use [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
			and split on a ' ' space.
			Use your `capitalize()`, loop through all of the elements (you can use `array.map()` here) and use your `capitalize()` function from challenge 1 on each element, last [`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) all of the elements into a single string.
		- (advanced) Use a regular expression.
- **Challenge 4** `removeExtraSpaces()` - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
	If more than one space appears in the middle of a string it is replaced by a single space.
	- Example: `"   Hello    world!   "` -> `"Hello world!"`
	- Strategies:
		- [`string.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
			will remove white space from the beginning and ending of a string.
			If you
			[`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
			on the ' ' (space) you can trim each of these strings and then
			[`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
			with a ' '.
- **Challenge 5** `kabobCase()` - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
	- Example: `"   Hello    world   "` -> `"hello-world"`
		- Advanced: Remove special characters from the string.
			For example: `"Hello World!"` -> `"hello-world"` (notice the ! is removed)
	- Strategies:
		- You need to remove all of the white space follow the challenge above.
			If you use
			[`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
			you shopuld have an array of strings you use
			[`str.toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
			and
			[`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
			with a '-'.
		- (Advanced) use
			[`str.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
			to remove special characters (~!@#$% etc.) from the string before joining.
- **Challenge 6** `snakeCase()` - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
	- Example:` "  what the    heck   "` -> `"what_the_heck"`
	- Strategies:
		- Follow the example above and use the '_' instead of the '-'.
- **Challenge 7** `camelCase()` - Lowercases the first character of the first word.
	Then uppercases the first character of all other words, and removes all spaces.
	- Example: `Camel Case` -> `camelCase`
	- Strategies:
		- Use the ideas from `capitalizeWords()` function you wrote earlier.
			[`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
			the string on the ' ' to get and array of words.
			Then loop starting on index 1 (you could use `array.map()`) and capitalize each word (use your function for this) then
			[`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
			 on the '' (empty string).

These functions should all take a string as input and return a string as output.

## Deliverable
Your completed work is your Github repo and the files in it.
Post the link to your work in the progress tracker.