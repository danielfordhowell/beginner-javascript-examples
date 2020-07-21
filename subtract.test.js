const subtract = require("./subtract");

test("substracts 3 - 2 to equal 1", function () {
  expect(subtract(3, 2)).toBe(1);
});

test("substracts 3 - 2 to equal 1", function () {
  expect(subtract(3, 2)).toBe(1);
});

test("subtracts 100 - 'a' to equal false", function () {
  expect(subtract(100, "a")).toBe(false);
});

test("subtracts 'a' - 100 to equal false", function () {
  expect(subtract("a", 100)).toBe(false);
});
