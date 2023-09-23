const ages = [18, 20, 22, 1, 100, 90, 14]

export const predicate = (age: number) => age > 90

const oldAges = [100]

export type CourseType = {
    title: string
    price: number
}

const courses: CourseType[] = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150},
]

export const cheapPredicate = (course: CourseType) => course.price < 160

const cheapCourse: CourseType[] = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 150}
]