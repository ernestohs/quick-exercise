# Exercise
## Market + Auction Value CHALLENGE
--------------------

1. Write a function that takes the model id and year, and returns an object containing the calculated values (Market and Auction)
Example Function Output: `{marketValue: calculated value, auctionValue: calculated value}`. If we want to calculate the 'value' of a set and year, we multiply the ratio for that year with the cost in saleDetails
```
MarketValue = {cost} * {marketRatio}
AuctionValue = {cost} * {auctionRatio}
```
2. Adjust the function to ensure it handles incorrect input (EX: ID doesn't exist) graciously, you can do so however you prefer.
  
3. Test your function, pass the parameters below to it and log the result to the console.
Year 2007 ID 67352, Year 2011 ID 87964

## Before Run

`$ npm install`

## Tests

Unit tests for this exercise where written on [Jest](https://jestjs.io/) to give proof that the code works as requested, the rest of the code uses Vanilla Javascript.

`$npm run test`

## Code Coverage

`$npm run test:coverage`

### Last report

File         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------|----------|----------|----------|----------|-------------------|
All files    |      100 |      100 |      100 |      100 |                   |
 exercise.js |      100 |      100 |      100 |      100 |                   |
