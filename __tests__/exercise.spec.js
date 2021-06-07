const getValues = require("../src/exercise");
describe("exercise", () => {
  describe("Validations", () => {
    describe("Missing parameters", () => {
      it("should handle when both parameters are missing", () => {
        expect(() => getValues()).toThrow(TypeError);
      });
      it("should handle when year parameter is missing", () => {
        expect(() => getValues(67352)).toThrow(TypeError);
      });
      it("should handle when id parameter is missing", () => {
        expect(() => getValues(undefined, 1987)).toThrow(TypeError);
      });
    });

    describe("Invalid values", () => {
      it("should handle an invalid id", () => {
        expect(() => getValues(1234, 2007)).toThrow(TypeError);
        expect(() => getValues(1234, 2007)).toThrow(
          "The id:1234 does not exists in the data"
        );
      });
      it("should handle an invalid year", () => {
        expect(() => getValues(87390, 1987)).toThrow(TypeError);
        expect(() => getValues(87390, 1987)).toThrow(
          "The year:1987 does not exists in the schedule for the id: 87390"
        );
      });
    });
  });

  describe("Values calculation", () => {
    const testCases = [
      {
        id: 67352,
        year: 2006,
        marketValue: 212057.397552,
        auctionValue: 123567.53151599999
      },
      {
        id: 67352,
        year: 2007,
        marketValue: 216384.71025600002,
        auctionValue: 126089.52642
      },
      {
        id: 67352,
        year: 2008,
        marketValue: 220801.26697199998,
        auctionValue: 128662.61522400001
      },
      {
        id: 67352,
        year: 2009,
        marketValue: 225307.06769999999,
        auctionValue: 131288.160432
      },
      {
        id: 67352,
        year: 2010,
        marketValue: 247416.420108,
        auctionValue: 135227.159496
      },
      {
        id: 67352,
        year: 2011,
        marketValue: 254838.66064800002,
        auctionValue: 140567.493924
      },
      {
        id: 67352,
        year: 2012,
        marketValue: 293838.293892,
        auctionValue: 145227.938856
      },
      {
        id: 87390,
        year: 2016,
        marketValue: 30007.764268,
        auctionValue: 20426.291772
      },
      {
        id: 87390,
        year: 2017,
        marketValue: 33906.084485,
        auctionValue: 23153.447444999998
      },
      {
        id: 87390,
        year: 2018,
        marketValue: 47974.150565,
        auctionValue: 33515.924639000004
      },
      {
        id: 87390,
        year: 2019,
        marketValue: 50960.825654,
        auctionValue: 35602.501844
      },
      {
        id: 87390,
        year: 2020,
        marketValue: 54133.382013999995,
        auctionValue: 37818.936615
      }
    ];

    testCases.forEach(testCase => {
      it(`should compute the correct market and auction values for ID: ${testCase.id} for year: ${testCase.year}`, () => {
        const actual = getValues(testCase.id, testCase.year);
        expect(actual.marketValue).toBe(testCase.marketValue);
        expect(actual.auctionValue).toBe(testCase.auctionValue);
      });
    });
  });
});
