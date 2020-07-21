const sum = require("./sum");

test("adds 1 + 2 to equal 3", function () {
  expect(sum(1, 2)).toBe(3);
});

test("adds 101 + 5 to equal 106", function () {
  expect(sum(101, 5)).toBe(106);
});
