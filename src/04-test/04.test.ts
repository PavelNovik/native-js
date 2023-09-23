import {cheapPredicate, CourseType, predicate} from "./04";

test("Should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    // const oldAges = ages.filter(predicate)
    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("Should take courses cheapest then 160$", () => {
    const courses: CourseType[] = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150},
    ]

    // const cheapCourse: CourseType[] = courses.filter(cheapPredicate)
    const cheapCourse: CourseType[] = courses.filter(course => course.price < 160)

    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse[0].title).toBe("CSS")
    expect(cheapCourse[1].title).toBe("REACT")
})

test("Get only completed tasks", () => {
   const tasks = [
       {id: 1, title: "Bread", isDone: false},
       {id: 2, title: "Milk", isDone: true},
       {id: 3, title: "Salt", isDone: false},
       {id: 4, title: "Sugar", isDone: true},
   ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})
test("Get only uncompleted tasks", () => {
   const tasks = [
       {id: 1, title: "Bread", isDone: false},
       {id: 2, title: "Milk", isDone: true},
       {id: 3, title: "Salt", isDone: false},
       {id: 4, title: "Sugar", isDone: true},
   ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)

})