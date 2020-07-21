const sayHello = require("./sayHello");

test("returns string saying hi to name", function () {
    var text = sayHello("Daniel");
    expect(text).toBe("Hello Daniel");
  });