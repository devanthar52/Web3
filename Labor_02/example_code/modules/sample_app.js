var sample = require("./sample_module");

// this call would fail with:
// TypeError: Object #<Object> has no method 'f1'
//
// sample.f1();

// this call will work
sample.public_f1();



// this call requires the function directly, making it accessible without the
// module `sample` prefix
var public_f1 = require("./sample_module").public_f1;

public_f1();
