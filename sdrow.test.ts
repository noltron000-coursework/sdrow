/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const problems = require('./problems.js')

test('sanity check', () => {})

test('Upper- & Lower-first-word', () => {
	const bfr = 'this is upper Word first'
	const aft = 'This is upper Word first'
	expect(bfr.upperFirst()).toBe(aft)
	expect(aft.lowerFirst()).toBe(bfr)
})

test('Upper- every words', () => {
	const bfr = 'this is upper EVERY word'
	const aft = 'This Is Upper EVERY Word'
	expect(bfr.upperWord()).toBe(aft)
})

test('Wiggly words', () => {
	const bfr = 'This is WIGGLY'
	const aft = 'ThIs iS WiGgLy'
	expect(bfr.upperWiggle()).toBe(aft)
})

test('no more spaces :D', () => {
	const bfr = '   hello  world    '
	const aft = 'helloworld'
	expect(bfr.removeSpaces()).toBe(aft)
})

test('trim extra spaces', () => {
	const bfr = '   hello  world   again   '
	const aft = 'hello world again'
	expect(bfr.trimSpaces()).toBe(aft)
})

test('lets get all caps', () => {
	const bfr = ' asdf cappy!'
	const aft = ' ASDF CAPPY!'
	expect(bfr.allCaps()).toBe(aft)
})

test('kabab case', () => {
	const bfr = ' Kabab Case '
	const aft = 'kabab-case'
	expect(bfr.kababCase()).toBe(aft)
})

test('snake_case', () => {
	const bfr = 'HELLO WORLD WOAH THIS WORKS '
	const aft = 'hello_world_woah_this_works'
	expect(bfr.snakeCase()).toBe(aft)
})

test('camelCase', () => {
	const bfr = 'I am a mysterious camel'
	const aft = 'iAmAMysteriousCamel'
	expect(bfr.camelCase()).toBe(aft)
})
