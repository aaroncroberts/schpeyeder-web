#!/bin/sh

echo "Compiling JavaScript..."

#
# Create a variables
#
PROJECT_ROOT="../$(dirname "$SCRIPT")"

python ${PROJECT_ROOT}/lib/closure-library/closure/bin/build/closurebuilder.py \
--root ${PROJECT_ROOT}/js \
--root ${PROJECT_ROOT}/lib/closure-library \
--namespace="schpeyeder.web.app" \
--output_file="${PROJECT_ROOT}/scripts/compiled.js" \
--output_mode=compiled \
--compiler_jar="compiler.jar" \
--compiler_flags="--angular_pass"

echo "Compilation complete!"
