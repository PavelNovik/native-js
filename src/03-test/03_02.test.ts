import {CityType} from "../02-test/02_02";
import {addMoneyToBudget, createMessage, repaireHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            }, {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            }, {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            }
        ],
        govermentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                stuffCount: 200,
                address: {
                    street: {
                        title: "Central str",
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                stuffCount: 1000,
                address: {
                    street: {
                        title: "South str",
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.govermentBuildings[0], 100000);

    expect(city.govermentBuildings[0].budget).toBe(300000)
    // expect(city.govermentBuildings[1].budget).toBe(500000)
})

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.govermentBuildings[1], -100000);

    // expect(city.govermentBuildings[0].budget).toBe(200000)
    expect(city.govermentBuildings[1].budget).toBe(400000)
})

test("House should be repaired", () => {
    repaireHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})
test("Staff should be fired", () => {
    toFireStaff(city.govermentBuildings[0], 20)

    expect(city.govermentBuildings[0].stuffCount).toBe(180)
})
test("Staff should be increased", () => {
    toHireStaff(city.govermentBuildings[0], 20)

    expect(city.govermentBuildings[0].stuffCount).toBe(220)
})

test("Greeting message should be correct", () => {
    const message = createMessage(city)

    expect(message).toBe("Hello New York citizens. I respect for all 1000000 men")
})