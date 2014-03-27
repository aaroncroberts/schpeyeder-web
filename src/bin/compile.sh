#!/bin/sh

echo "Compiling JavaScript..."

python /Volumes/HDD\ STORAGE/documents/development/schpeyeder-web/src/lib/closure-library/closure/bin/build/closurebuilder.py \
--root /Volumes/HDD\ STORAGE/documents/development/schpeyeder-web/src \
--namespace="schpeyeder.web.app" \
--output_file="/Volumes/HDD STORAGE/documents/development/schpeyeder-web/src/js/compiled.js" \
--output_mode=compiled \
--compiler_jar="/Volumes/HDD STORAGE/documents/development/schpeyeder-web/src/bin/compiler.jar" \
--compiler_flags="--angular_pass"

echo "Compilation complete!"
