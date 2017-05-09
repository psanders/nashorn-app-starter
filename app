#!/usr/bin/env bash

main_js="$(pwd)/main.js"

for i in $(ls lib); do
    DEPS=$DEPS"lib/$i:";
done;

jjs -Dlog4j.configurationFile=./log4j.xml -cp $DEPS -doe -ot -scripting=true "$main_js" -- "$@"
