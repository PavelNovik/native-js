type TechType = {
    id: number
    title: string
}
type AddressType = {
    city: LocalCityType
    street: string
}

type LocalCityType = {
    title: string
    country: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>

}

export const user: StudentType = {
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

console.log(user)