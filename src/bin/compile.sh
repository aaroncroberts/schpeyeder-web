#!/bin/sh

echo "Compiling JavaScript..."

python ../lib/closure-library/closure/bin/build/closurebuilder.py \
--root ../js \
--root ../lib/closure-library \
--namespace="schpeyeder.web.app" \
--output_file="../scripts/compiled.js" \
--output_mode=compiled \
--compiler_jar="compiler.jar" \
--compiler_flags="--angular_pass"

echo "Compilation complete!"
