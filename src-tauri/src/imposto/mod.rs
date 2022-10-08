#[warn(dead_code)]

pub mod basic {
    pub fn irpj(receita: f32, retencao: f32) -> String {
        let irpj: f32 = (receita * 0.32) * (0.15) - retencao;
        let _result: String= (format!("{:.2}", irpj)).to_string();
        return _result
    }
    
    
    pub fn csll(receita: f32, retencao: f32) -> String  {
        let csll: f32 = (receita * 0.32) * (0.09) - retencao;
        let _result: String= (format!("{:.2}", csll)).to_string();
        return _result
    }
    
    
    pub fn pis(receita: f32, retencao: f32) ->  String {
        let pis: f32 = (receita * 0.0065) - retencao;
        let _result: String = (format!("{:.2}", pis)).to_string();
        return _result
    }
    
    
    pub fn cofins(receita: f32, retencao: f32)  -> String {
        let cofins: f32 = (receita * 0.03) - retencao;
        let _result: String = (format!("{:.2}", cofins)).to_string();
        return _result
    }  
}

