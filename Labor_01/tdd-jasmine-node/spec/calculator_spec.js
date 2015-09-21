var calculator = require('../lib/calculator.js');

describe("Multiplication", function() {
  it("should multiply 2 and 3", function() {
    var product = calculator.multiply(2,3);
    expect(product).toBe(6);
  });
  it("should multiply 2 and 7", function() {
var product = calculator.multiply(2,7);
expect(product).toBe(14);
});

});
