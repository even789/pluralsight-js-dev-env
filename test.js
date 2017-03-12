'use strict';

function test(x) {
  var y = 20;
  if (x !== undefined) {
    let y = 10;
    return y;
  }
  return y;
}

test(true);
