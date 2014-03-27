
ECHO Compiling Javascript files...

@ECHO ON
python ../lib/closure-library/closure/bin/build/closurebuilder.py^
 --root=../lib/closure-library/^
 --root=../js/^
 --namespace="schpeyeder.web.app"^
 --output_mode=compiled^
 --compiler_jar=compiler.jar^
 --compiler_flags="--angular_pass"^
 --compiler_flags="--language_in=ECMASCRIPT5"^
 --compiler_flags="--formatting=SINGLE_QUOTES"^
 --output_file=../scripts/compiled.js
@ECHO OFF

ECHO Compilation complete.
