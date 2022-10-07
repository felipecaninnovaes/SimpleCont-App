
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod imposto;

#[tauri::command]
fn irpj_fun(receita: f32, retencao: f32) -> String {
    let _result: String = (imposto::basic::irpj(receita, retencao)).to_string();
    return _result;
}

#[tauri::command]
fn csll_fun(receita: f32, retencao: f32) -> String {
    let _result: String = (imposto::basic::csll(receita, retencao)).to_string();
    return _result;
}

#[tauri::command]
fn pis_fun(receita: f32, retencao: f32) -> String {
    let _result: String = (imposto::basic::pis(receita, retencao)).to_string();
    return _result;
}


#[tauri::command]
fn cofins_fun(receita: f32, retencao: f32) -> String {
    let _result: String = (imposto::basic::cofins(receita, retencao)).to_string();
    return _result;
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![irpj_fun, csll_fun, pis_fun, cofins_fun])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}