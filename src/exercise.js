module.exports = (function () {
  const data = {
    67352: {
      schedule: {
        years: {
          2006: {
            marketRatio: 0.311276,
            auctionRatio: 0.181383
          },
          2007: {
            marketRatio: 0.317628,
            auctionRatio: 0.185085
          },
          2008: {
            marketRatio: 0.324111,
            auctionRatio: 0.188862
          },
          2009: {
            marketRatio: 0.330725,
            auctionRatio: 0.192716
          },
          2010: {
            marketRatio: 0.363179,
            auctionRatio: 0.198498
          },
          2011: {
            marketRatio: 0.374074,
            auctionRatio: 0.206337
          },
          2012: {
            marketRatio: 0.431321,
            auctionRatio: 0.213178
          }
        },
        defaultMarketRatio: 0.02,
        defaultAuctionRatio: 0.02
      },
      saleDetails: {
        cost: 681252,
        retailSaleCount: 122,
        auctionSaleCount: 17
      },
      classification: {
        category: "Earthmoving Equipment",
        subcategory: "Dozers",
        make: "Caterpillar",
        model: "D8T"
      }
    },
    87390: {
      schedule: {
        years: {
          2016: {
            marketRatio: 0.613292,
            auctionRatio: 0.417468
          },
          2017: {
            marketRatio: 0.692965,
            auctionRatio: 0.473205
          },
          2018: {
            marketRatio: 0.980485,
            auctionRatio: 0.684991
          },
          2019: {
            marketRatio: 1.041526,
            auctionRatio: 0.727636
          },
          2020: {
            marketRatio: 1.106366,
            auctionRatio: 0.772935
          }
        },
        defaultMarketRatio: 0.06,
        defaultAuctionRatio: 0.06
      },
      saleDetails: {
        cost: 48929,
        retailSaleCount: 12,
        auctionSaleCount: 127
      },
      classification: {
        category: "Aerial Equipment",
        subcategory: "Boom Lifts",
        make: "JLG",
        model: "340AJ"
      }
    }
  };

  /**
   * Name of the missing argument
   * @param {string} name
   */
  function missingArgument(name) {
    throw TypeError(`Missing ${name} parameter`);
  }

  /**
   * Assert object contains key, if not throw error with message.
   * @param {object} target
   * @param {string} key
   * @param {string} message
   */
  function assert(target, key, message) {
    if (!Object.keys(target).includes(`${key}`)) {
      throw TypeError(message);
    }
  }

  /**
   * Get calculated Market and Auction values.
   * @param {number|string} id
   * @param {number|string} year
   * @returns object with market and auction values.
   */
  function calculate(
    id = missingArgument("id"),
    year = missingArgument("year")
  ) {
    assert(data, id, `The id:${id} does not exists in the data`);
    const record = data[id];
    const cost = record.saleDetails.cost;
    assert(
      record.schedule.years,
      year,
      `The year:${year} does not exists in the schedule for the id: ${id}`
    );
    const details = record.schedule.years[year];

    return {
      marketValue: cost * details.marketRatio,
      auctionValue: cost * details.auctionRatio
    };
  }
  return calculate;
})();
