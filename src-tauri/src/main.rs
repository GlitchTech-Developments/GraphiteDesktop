// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use curl::easy::Easy;
use tauri::{Manager, Window};

// This command must be async so that it doesn't run on the main thread.
#[tauri::command]
async fn close_splashscreen(window: Window) {
    // Close splashscreen
    window
        .get_window("apploader")
        .expect("no window labeled 'splashscreen' found")
        .close()
        .unwrap();
    // Show main window
    window
        .get_window("graphite")
        .expect("no window labeled 'main' found")
        .show()
        .unwrap();
}

// This command must be async so that it doesn't run on the main thread.
#[tauri::command]
async fn get_remote_status(url: &str) -> Result<&str, &str> {
    let mut easy = Easy::new();
    easy.url(url).unwrap();
    easy.write_function(|data: &[u8]| {
        // stdout().write_all(data).unwrap();
        Ok(data.len())
    })
    .unwrap();
    easy.perform().unwrap();

    // get the content-type then print it
    let con_type: &str = easy.content_type().unwrap().unwrap();
    let status = con_type.to_string() == "text/html".to_string();
    let pretty_status = if status { "online" } else { "offline" };

    return Result::Ok(pretty_status);
}

// Register the command:
fn main() {
    tauri::Builder::default()
        // Add this line
        .invoke_handler(tauri::generate_handler![
            close_splashscreen,
            get_remote_status
        ])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}
