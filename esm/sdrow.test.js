import * as sdrow from './sdrow';
test('sanity check', () => { });
// *BELOW ARE ALL WORD-BASED FUNCTIONS* //
test('capWord():\n\tcapitalize a word', () => {
    const before = 'capitalize';
    const after = sdrow.capWord(before);
    expect(before).toBe('capitalize');
    expect(after).toBe('Capitalize');
});
test('upperWord():\n\tcapitalize entire word', () => {
    const before = 'uppercase';
    const after = sdrow.upperWord(before);
    expect(before).toBe('uppercase');
    expect(after).toBe('UPPERCASE');
});
test('lowerWord():\n\tdecapitalize entire word', () => {
    const before = 'LOWERCASE';
    const after = sdrow.lowerWord(before);
    expect(before).toBe('LOWERCASE');
    expect(after).toBe('lowercase');
});
test('jiggleWord():\n\tJiGlIfY A WoRd! WoAh!', () => {
    const before = 'jiggLY';
    const after = sdrow.jiggleWord(before);
    expect(before).toBe('jiggLY');
    expect(after).toBe('JiGgLy');
});
test('wiggleWord():\n\twIgGlIfY a wOrD. nUtSo!', () => {
    const before = 'WIggly';
    const after = sdrow.wiggleWord(before);
    expect(before).toBe('WIggly');
    expect(after).toBe('wIgGlY');
});
// *THESE TWO ARE SPACE-ORIENTED HELPER FUNCTIONS* //
test('removeSpaces():\n\tspaces...begone!', () => {
    const before = '   this string  is full of space';
    const after = sdrow.removeSpaces(before);
    expect(before).toBe('   this string  is full of space');
    expect(after).toBe('thisstringisfullofspace');
});
test('trimSpaces():\n\t(extra) spaces...begone!', () => {
    const before = '   this string  is full of space';
    const after = sdrow.trimSpaces(before);
    expect(before).toBe('   this string  is full of space');
    expect(after).toBe('this string is full of space');
});
// *BELOW ARE ALL SENTENCE-BASED FUNCTIONS* //
test('upperCase():\n\tcapitalize all letters', () => {
    const before = 'I am a MOSTLY lowercase sentence.';
    const after = sdrow.upperCase(before);
    expect(before).toBe('I am a MOSTLY lowercase sentence.');
    expect(after).toBe('I AM A MOSTLY LOWERCASE SENTENCE.');
});
test('lowerCase():\n\tdecapitalize all letters', () => {
    const before = 'I am a MOSTLY lowercase sentence.';
    const after = sdrow.lowerCase(before);
    expect(before).toBe('I am a MOSTLY lowercase sentence.');
    expect(after).toBe('i am a mostly lowercase sentence.');
});
test('jiggleCase():\n\tjiggle it up', () => {
    const before = 'I am a MOSTLY lowercase sentence.';
    const after = sdrow.jiggleCase(before);
    expect(before).toBe('I am a MOSTLY lowercase sentence.');
    expect(after).toBe('I Am A MoStLy LoWeRcAsE SeNtEnCe.');
});
test('wiggleCase():\n\twiggle it up', () => {
    const before = 'I am a MOSTLY lowercase sentence.';
    const after = sdrow.wiggleCase(before);
    expect(before).toBe('I am a MOSTLY lowercase sentence.');
    expect(after).toBe('i aM a mOsTlY lOwErCaSe sEnTeNcE.');
});
test('kababCase():\n\t', () => {
    const before = 'I am a MOSTLY lowercase sentence.';
    const after = sdrow.kababCase(before);
    expect(before).toBe('I am a MOSTLY lowercase sentence.');
    expect(after).toBe('i-am-a-mostly-lowercase-sentence');
});
test('snakeCase():\n\t', () => {
    const before = 'I am a MOSTLY lowercase sentence.';
    const after = sdrow.snakeCase(before);
    expect(before).toBe('I am a MOSTLY lowercase sentence.');
    expect(after).toBe('i_am_a_mostly_lowercase_sentence');
});
test('camelCase():\n\t', () => {
    const before = 'I am a MOSTLY lowercase sentence.';
    const after = sdrow.camelCase(before);
    expect(before).toBe('I am a MOSTLY lowercase sentence.');
    expect(after).toBe('iAmAMostlyLowercaseSentence');
});
test('pascelCase():\n\t', () => {
    const before = 'I am a MOSTLY lowercase sentence.';
    const after = sdrow.pascalCase(before);
    expect(before).toBe('I am a MOSTLY lowercase sentence.');
    expect(after).toBe('IAmAMostlyLowercaseSentence');
});
