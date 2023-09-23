import {CityType, GovermentBuildingsType, HousesType} from "../02-test/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter( h => h.address.street.title !== street)
}
export const getHousesOnTheStreet = (houses: Array<HousesType>, street: string) => {
   return houses.filter(h => h.address.street.title === street)
}

export const getBuildingsWithCorrectStuffCount = (buildings: Array<GovermentBuildingsType>, number: number) => {
return buildings.filter(b => b.stuffCount > number)
}