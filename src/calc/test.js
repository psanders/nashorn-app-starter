/**
 * @author Pedro Sanders
 */
import Calc from 'calc/calc'

// The ./test/test_helper will search for the "testGroup" variable
// Not very elegant but it works
export let testGroup = { name: "Calculator Test" }

testGroup.testAdd = function() {
    let calc = new Calc()
    assertTrue(calc.add(1, 2) == 3)
}