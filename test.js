import test from "node:test";
import assert from "node:assert/strict";
import add from "./calculator.js";

test("add summerer to tall", function(){
    const actual = add(2, 3);
    const expected = 5;
    assert.equal(actual, expected);
})
