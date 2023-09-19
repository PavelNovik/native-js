import {StudentType} from "../02-test/02";
import {addSkill, doesStudentLiveIn, makeStudentInActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Pawel",
        age: 37,
        isActive: true,
        address: {
            city: {
                title: "Sluck",
                country: "Belarus",
            },
            street: "Lenina",
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id: 2, title: "CSS"},
            {id: 3, title: "JS"},
            {id: 4, title: "React"},
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(4)
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("JS")
    expect(student.technologies[4].id).toBeDefined()
})

test("student should be active", () => {
    expect(student.isActive).toBe(true)
    makeStudentInActive(student)
    expect(student.isActive).toBe(false)
})

test("does student live in city?", () => {
    let result1 = doesStudentLiveIn(student, "New York")
    let result2 = doesStudentLiveIn(student, "Sluck")

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})