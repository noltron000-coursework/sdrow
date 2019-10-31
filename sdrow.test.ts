import * as sdrow from './sdrow'

test('sanity check', () => {})

// *BELOW ARE ALL WORD-BASED FUNCTIONS* //

test('capWord():\n\tcapitalize a word', () => {
	const before: string = 'capitalize'
	const after: string = sdrow.capWord(before)
	expect(before).toBe('capitalize')
	expect(after).toBe('Capitalize')
})

test('upperWord():\n\tcapitalize entire word', () => {
	const before: string = 'uppercase'
	const after: string = sdrow.upperWord(before)
	expect(before).toBe('uppercase')
	expect(after).toBe('UPPERCASE')
})

test('lowerWord():\n\tdecapitalize entire word', () => {
	const before: string = 'LOWERCASE'
	const after: string = sdrow.lowerWord(before)
	expect(before).toBe('LOWERCASE')
	expect(after).toBe('lowercase')
})

test('jiggleWord():\n\tJiGlIfY A WoRd! WoAh!', () => {
	const before: string = 'jiggLY'
	const after: string = sdrow.jiggleWord(before)
	expect(before).toBe('jiggLY')
	expect(after).toBe('JiGgLy')
})

test('wiggleWord():\n\twIgGlIfY a wOrD. nUtSo!', () => {
	const before: string = 'WIggly'
	const after: string = sdrow.wiggleWord(before)
	expect(before).toBe('WIggly')
	expect(after).toBe('wIgGlY')
})

// *THESE TWO ARE SPACE-ORIENTED HELPER FUNCTIONS* //

test('removeSpaces():\n\tspaces...begone!', () => {
	const before: string = '   this string  is full of space'
	const after: string = sdrow.removeSpaces(before)
	expect(before).toBe('   this string  is full of space')
	expect(after).toBe('thisstringisfullofspace')
})

test('trimSpaces():\n\t(extra) spaces...begone!', () => {
	const before: string = '   this string  is full of space'
	const after: string = sdrow.trimSpaces(before)
	expect(before).toBe('   this string  is full of space')
	expect(after).toBe('this string is full of space')
})

// *BELOW ARE ALL SENTENCE-BASED FUNCTIONS* //
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
*/
