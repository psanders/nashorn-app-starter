/**
 * @author Pedro Sanders
 */
import Calc from 'calc/calc'

// The `src/test_helper.js` script will search for the "testGroup" variable
// Not very elegant but it works well
export let testGroup = { name: "Calculator Test" }

testGroup.testAdd = function() {
    let calc = new Calc()
    assertTrue(calc.add(1, 2) == 3)
}