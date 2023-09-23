export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {
        name: "Andrew Ivanow", age: 33
    },
    {
        name: "Alexander Petrow", age: 24
    },
    {
        name: "Dmitry Sidorov", age: 18
    },
]

const dimychTransformator = (man: ManType) => ({
    stack: ["css", "html", "tdd", "js", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
})


const devs = [
    {
        stack: ["css", "html", "tdd", "js", "react"],
        firstName: "Andrew", lastName: "Ivanow"
    },
    {
        stack: ["css", "html", "tdd", "js", "react"],
        firstName: "Alexander", lastName: "Petrow"
    },
    {
        stack: ["css", "html", "tdd", "js", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }
]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])
const devs2 = [d1, d2, d3]

const dev3 = people.map(m => dimychTransformator(m))
const dev4 = people.map(dimychTransformator)
const dev5 = people.map(m => ({
    stack: ["css", "html", "tdd", "js", "react"],
    firstName: m.name.split(" ")[0],
    lastName: m.name.split(" ")[1],
}))
const messages = people.map(m => `Hello ${m.name.split(" ")[0]}. Welcome to IT-INCUBATOR!`)
export const createGreetingMessage = (people: ManType[]) => {
    return people.map(m => `Hello ${m.name.split(" ")[0]}. Welcome to IT-INCUBATOR!`)
}