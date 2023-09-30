import {ManType} from "./Desatructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Pawel",
        age: 37,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: 'react'}],
        address: {
            street: {
                title: "Lenina street"
            }
        }
    }
})

test('', () => {
    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props
    const {age: a, lessons: l} = props
    const {title} = props.address.street

    // const a = props.age
    // const l = props.lessons

    expect(age).toBe(37)
    expect(lessons.length).toBe(3)

    expect(a).toBe(37)
    expect(l.length).toBe(3)
    expect(title).toBe("Lenina street")

})

test('', () => {
    const l1 = props.lessons[0]
    // const l2 = props.lessons[1]


    const [, l2, ...restLessons] = props.lessons
    // const [,,l3] = props.lessons

    // const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    // expect(l3.title).toBe('3')


    expect(restLessons[0]).toStrictEqual({title: "3", name: 'react'})
})