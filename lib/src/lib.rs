use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(num: i32) {
    for i in 0..num {
        let str = format!("Hello, {}!", i);
    }
    alert("Hello, wasm-rs!");
}