import {StudentType} from "../02-test/02";
import {CityType, GovermentBuildingsType, HousesType} from "../02-test/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

const res = sum(3, 4);

const res2 = sum(sum(1, 2), sum(3, 4))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}
export const makeStudentInActive = function (student: StudentType) {
    student.isActive = false
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {

    return student.address.city.title === city

}

export const addMoneyToBudget = (building: GovermentBuildingsType, budget: number) => {
    building.budget += budget
}
export const repaireHouse = (houses: HousesType) => {
    houses.repaired = true
}
export const toFireStaff = (building: GovermentBuildingsType, staff: number) => {
    building.stuffCount -= staff
}

export const toHireStaff = (building: GovermentBuildingsType, staff: number) => {
    building.stuffCount += staff
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I respect for all ${city.citizensNumber} men`
    // return "Hello " + city.title + " citizens. I respect for all " + city.citizensNumber + " men"
}