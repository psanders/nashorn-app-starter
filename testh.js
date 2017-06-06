#!/usr/bin/jjs -cp .libs/bundle.deps.jar -doe=true -ot=true -scripting=true

load('.libs/node_modules/jvm-npm/src/main/javascript/jvm-npm.js')

var TestCase = Packages.junit.framework.TestCase
var TestSuite = Packages.junit.framework.TestSuite
var TestResult = Packages.junit.framework.TestResult

// Assertions
var assertEquals = Packages.org.junit.Assert.assertEquals
var assertNotEquals = Packages.org.junit.Assert.assertNotEquals
var assertTrue = Packages.org.junit.Assert.assertTrue
var assertFalse = Packages.org.junit.Assert.assertFalse
var assertArrayEquals = Packages.org.junit.Assert.assertArrayEquals
var assertNotNull = Packages.org.junit.Assert.assertNotNull
var assertSame = Packages.org.junit.Assert.assertSame
var assertNotSame = Packages.org.junit.Assert.assertNotSame
var fail = Packages.org.junit.Assert.fail

var ANSI_GREEN = "\u001B[32m"
var ANSI_RESET = "\u001B[0m"
var ANSI_RED = "\u001B[31m"

var THelper =  {
    test: function (path, name) {
        // XXX: This makes this code less portable
        var obj = require(path).testGroup

        if (obj == undefined) {
            print ('Nothing test found')
            quit()
        }

        var group = obj.name
        if (name != undefined) group = name

        print('Test group \'' + group + '\'')

        for (var key in obj){
            var funName = key;
            var fun = obj[key];

            if (typeof fun != "function") continue
            if (funName == "setup" || funName == "teardown") continue

            var TCase = Java.extend(TestCase, {
                runTest: fun
            });

            var result = new TCase().run()

            if (result.wasSuccessful()) {
                print(' ', '[', funName, '] =>', ANSI_GREEN + 'passed' + ANSI_RESET)
            } else {
                print(' ', '[', funName, '] =>', ANSI_RED + 'failed' + ANSI_RESET)
                var errors = result.errors()
                while (errors.hasMoreElements()) {
                    print(' ', '[x]', errors.nextElement());
                }
            }
       }
    }
}

var tests = $ARG
if (tests.length == 0) print ('Nothing test found')
tests.forEach(function(test) {
    THelper.test(test)
})
