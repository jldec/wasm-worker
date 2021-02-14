extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

use shortscale::shortscale;

#[wasm_bindgen]
pub fn numwords(num: u64) -> String {
    shortscale(num)
}
