export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovermentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    stuffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    govermentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}