#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]


#[tauri::command]
fn irpj(receita: f32, retencao: f32) -> String {
    let irpj: f32 = (receita * 0.32 * 0.15) - retencao;
    let result: String= irpj.to_string();
    return result
}

#[tauri::command]
fn csll(receita: f32, retencao: f32) -> String  {
    let csll: f32 = (receita * 0.32 * 0.09) - retencao;
    let result: String= csll.to_string();
    return result
}

#[tauri::command]
fn pis(receita: f32, retencao: f32) ->  String {
    let pis: f32 = (receita * 0.0065) - retencao;
    let result: String = pis.to_string();
    return result
}

#[tauri::command]
fn cofins(receita: f32, retencao: f32)  -> String {
    let cofins: f32 = (receita * 0.03) - retencao;
    let result: String = cofins.to_string();
    return result
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![irpj, csll, pis, cofins])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}