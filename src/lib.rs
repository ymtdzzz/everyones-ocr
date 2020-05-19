mod utils;

use wasm_bindgen::prelude::*;
use js_sys::ArrayBuffer;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub enum FileType {
    PNG,
    JPG
}

#[wasm_bindgen]
pub struct InputFile {
    fileType: FileType,
    buffer: ArrayBuffer
}

#[wasm_bindgen]
impl InputFile {
    pub fn new(fileType: FileType, buffer: ArrayBuffer) -> InputFile {
        InputFile {
            fileType,
            buffer
        }
    }
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(s: &str) {
    alert(s);
}

#[wasm_bindgen]
pub fn ocr(input: InputFile) {
    alert(input.buffer.byte_length().to_string().as_str());
}
