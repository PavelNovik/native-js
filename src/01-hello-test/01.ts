const sentence = "Hello my friend!"


export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentence: string) {
    const words = sentence.toLowerCase().split(" ")
        return words.filter(s => s !== '' && s !== '-').map(str => str.replace("!", "").replace(".", ''))
}