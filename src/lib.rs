extern crate web_sys;

mod utils;

use image::*;
use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

// TODO: Remove this enum and trait
// This implementation is redundant but I couldn't find how to wasm export other dependencie's enum
#[wasm_bindgen]
#[derive(Debug)]
pub enum FileType {
    Png,
    Jpeg,
}

trait ImageFormatBinder {
    fn get_image_format(&self) -> ImageFormat;
}

impl ImageFormatBinder for FileType {
    fn get_image_format(&self) -> ImageFormat {
        match *self {
            FileType::Png => ImageFormat::Png,
            FileType::Jpeg => ImageFormat::Jpeg,
        }
    }
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct InputFile {
    file_type: FileType,
    buffer: Uint8Array,
}

#[wasm_bindgen]
impl InputFile {
    pub fn new(file_type: FileType, buffer: Uint8Array) -> InputFile {
        InputFile { file_type, buffer }
    }
}

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(s: &str) {
    alert(s);
}

#[wasm_bindgen]
pub fn ocr(input: InputFile) {
    utils::set_panic_hook();
   
    let image: ImageResult<DynamicImage> = image::load_from_memory_with_format(
        &input.buffer.to_vec(),
        input.file_type.get_image_format(),
    );
    log!("{:?}", input);
    alert(image.unwrap().width().to_string().as_str());
}
