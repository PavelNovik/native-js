import {CityType} from "./02_02";

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
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");

})

test("test city should contains hospital and fire station", () => {
    expect(city.govermentBuildings.length).toBe(2);

    expect(city.govermentBuildings[0].type).toBe("HOSPITAL");
    expect(city.govermentBuildings[0].budget).toBe(200000);
    expect(city.govermentBuildings[0].stuffCount).toBe(200);
    expect(city.govermentBuildings[0].address.street.title).toBe("Central str");

    expect(city.govermentBuildings[1].type).toBe("FIRE-STATION");
    expect(city.govermentBuildings[1].budget).toBe(500000);
    expect(city.govermentBuildings[1].stuffCount).toBe(1000);
    expect(city.govermentBuildings[1].address.street.title).toBe("South str");
})