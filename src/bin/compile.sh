#!/bin/sh

echo "Compiling JavaScript..."

#
# Create a variables
#
PROJECT_ROOT="../$(dirname "$SCRIPT")"

python ${PROJECT_ROOT}/common/closure-library/closure/bin/build/closurebuilder.py \
--root ${PROJECT_ROOT}/app \
--root ${PROJECT_ROOT}/common/closure-library \
--namespace="schpeyeder.web.app" \
--output_file="${PROJECT_ROOT}/assets/compiled.js" \
--output_mode=compiled \
--compiler_jar="compiler/compiler.jar" \
--compiler_flags="--angular_pass"

echo "Compilation complete!"
