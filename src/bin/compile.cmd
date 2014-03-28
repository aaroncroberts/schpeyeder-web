
ECHO Compiling Javascript files...

@ECHO ON
python ../common/closure-library/closure/bin/build/closurebuilder.py^
 --root=../common/closure-library/^
 --root=../app/^
 --namespace="schpeyeder.web.app"^
 --output_mode=compiled^
 --compiler_jar=compiler/compiler.jar^
 --compiler_flags="--angular_pass"^
 --compiler_flags="--language_in=ECMASCRIPT5"^
 --compiler_flags="--formatting=SINGLE_QUOTES"^
 --output_file=../assets/compiled.js
@ECHO OFF

ECHO Compilation complete.
