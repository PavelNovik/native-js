import {mult, splitIntoWords, sum} from "./01";

test('Sum should be correct', ()=> {

    // data
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)

})

test('Multiply should be correct', () => {
    // data
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result1 = mult(a, b)
    const result2 = mult(b, c)

    // expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('Splitting into words should be correct', ()=> {
    // data
    const sentence1 = "Hello my friend!";
    const sentence2 = "JS - programming language."
    // action
    const result1 = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);

    // expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)

})