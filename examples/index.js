const js = import("./node_modules/regression-wasm/regression_wasm.js");

js.then(js => {
  js.greet("WebAssembly");
});