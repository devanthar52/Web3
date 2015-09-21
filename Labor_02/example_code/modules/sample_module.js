f1 = function() {
  console.log("this is a private function and cannot be called outside this module");
}

// public_f1 exploses the otherwise private function f1
exports.public_f1 = f1;
