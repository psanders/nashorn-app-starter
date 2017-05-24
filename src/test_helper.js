#!/usr/bin/env jjs -cp .libs/jars/junit-4.12.jar:.libs/jars/hamcrest-core-1.3.jar -Dlog4j.configurationFile=./config/log4j2.xml -fv=false -doe=true

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
var assertSame = Packages.org.junit.Assert.assertSame;
var assertNotSame = Packages.org.junit.Assert.assertNotSame;
var fail = Packages.org.junit.Assert.fail;

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
                print(' ', 'test [', funName, ']','=> passed');
            } else {
                print(' ', 'test [', funName, ']','=> failed');

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