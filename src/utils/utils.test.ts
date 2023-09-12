import { getAge } from "./utils"

describe("getAge", () => {
    it("date with format DD-MM-YYYY", () => {
        let ageBeforeCurrentDate = getAge("02-04-1990");
        expect(ageBeforeCurrentDate).toEqual(33);
        let agAfterCurrentDate = getAge("28-11-1990");
        expect(agAfterCurrentDate).toEqual(32);
    })
})