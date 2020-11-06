# regression-wasm

This library is a WIP project to replace
[regression-js](https://github.com/Tom-Alexander/regression-js) with
a better web alternative.

The project is written to perform least-squares regression
algorithms in the Rust programming language, which will
then compile to 

### Advantages over regression-js

1. Regression-js uses JavaScript Number type, which has
a max integer value of around 9 quadrillion. This means that
you will get incorrect results when working with numbers above that,
as well as smaller numbers in certain cases where they're squared and
summed during the algorithm.

2. Numbers in JavaScript are not precise by any means, so who knows how
much mathematic precision you lose when your only data type is

3. WASM code will [run faster](https://hacks.mozilla.org/2017/02/what-makes-webassembly-fast/).

4. WASM code will have smaller bundle sizes, as it's simple binaries as opposed
to JavaScript code.