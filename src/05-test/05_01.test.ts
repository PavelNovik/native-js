import {createGreetingMessage, ManType} from "./05_01";

let people: ManType[]

beforeEach(() => {
    people = [
        {name: "Andrew Ivanow", age: 33},
        {name: "Alexander Petrow", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ]
})

test("should get array with greeting messages", () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-INCUBATOR!")
    expect(messages[1]).toBe("Hello Alexander. Welcome to IT-INCUBATOR!")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-INCUBATOR!")
})