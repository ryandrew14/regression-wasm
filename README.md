# regression-wasm

This library is a WIP project to replace
[regression-js](https://github.com/Tom-Alexander/regression-js) with
a better web alternative.

The project is written to perform least-squares regression
algorithms in the Rust programming language, which will
then compile to 

### Issues with regression-js

Regression-js uses JavaScript Number type, which has
a max integer value of around 9 quadrillion. Numbers
in JavaScript are not precise by any means, and I'm hoping
that the WASM code will also run faster.