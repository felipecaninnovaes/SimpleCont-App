import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

import "../styles/pagesBase.css";

export function CalculoPresumido() {
  const [irpjResult, setirpjResult] = useState("");
  const [csllResult, setcsllResult] = useState("");
  const [pisResult, setpisResult] = useState("");
  const [cofinsResult, setcofinsResult] = useState("");
  const [receita_, setReceita] = useState("");
  const [retencao_irpj, setRetencao_irpj] = useState("");
  const [retencao_csll, setRetencao_csll] = useState("");
  const [retencao_pis, setRetencao_pis] = useState("");
  const [retencao_cofins, setRetencao_cofins] = useState("");

  async function calcF() {
    const receita_int = parseFloat(receita_)
    if (retencao_irpj !== "") {
      const retencao_irpj_int = parseFloat(retencao_irpj)
      setirpjResult(await invoke("irpj_fun", { receita: receita_int, retencao: retencao_irpj_int }));
    } else {
      setirpjResult(await invoke("irpj_fun", { receita: receita_int, retencao: 0.0 }));
    }

    if (retencao_csll !== "") {
      const retencao_csll_int = parseFloat(retencao_csll)
      setcsllResult(await invoke("csll_fun", { receita: receita_int, retencao: retencao_csll_int }));
    } else {
      setcsllResult(await invoke("csll_fun", { receita: receita_int, retencao: 0.0 }));
    }

    if (retencao_pis !== "") {
      const retencao_pis_int = parseFloat(retencao_pis)
      setpisResult(await invoke("pis_fun", { receita: receita_int, retencao: retencao_pis_int }));
    } else {
      setpisResult(await invoke("pis_fun", { receita: receita_int, retencao: 0.0 }));
    }

    if (retencao_cofins !== "") {
      const retencao_cofins_int = parseFloat(retencao_cofins)
      setcofinsResult(await invoke("cofins_fun", { receita: receita_int, retencao: retencao_cofins_int }));
    } else {
      setcofinsResult(await invoke("cofins_fun", { receita: receita_int, retencao: 0.0 }));
    }
  }

  return (
    <div className="container">
      <div className="app">
        <div className="itens">
          <div className="row">
            <div>
              <div className="Lines">
                <a>Receita da Empresa</a>
                <input
                  id="base-input"
                  onChange={(e) => setReceita(e.currentTarget.value)}
                  placeholder="Insira a receita..."
                />
              </div>
              <div className="Lines">
                <a>Receita do IRPJ</a>
                <input
                  id="base-input"
                  onChange={(e) => setRetencao_irpj(e.currentTarget.value)}
                  placeholder="Insira o retido do IRPJ..."
                />
              </div>
              <div className="Lines">
                <a>Receita da Empresa</a>
                <input
                  id="base-input"
                  onChange={(e) => setRetencao_csll(e.currentTarget.value)}
                  placeholder="Insira o retido da CSLL..."
                />
              </div>
              <div className="Lines">
                <a>Receita da Empresa</a>
                <input
                  id="base-input"
                  onChange={(e) => setRetencao_pis(e.currentTarget.value)}
                  placeholder="Insira o retido do PIS..."
                />
              </div>
              <div className="Lines">
                <a>Receita da Empresa</a>
                <input
                  id="base-input"
                  onChange={(e) => setRetencao_cofins(e.currentTarget.value)}
                  placeholder="Insira o retido do COFINS..."
                />
              </div>
              <div className="buttons">
                <button className="cal" type="button" onClick={() => calcF()}>
                  Calcular
                </button>
              </div>
            </div>
          </div>
          <p>
            <span>IRPJ: R$ {irpjResult}</span>
            <br></br>
            <span>CSLL: R$ {csllResult}</span>
            <br></br>
            <span>PIS: R$ {pisResult}</span>
            <br></br>
            <span>COFINS: R$ {cofinsResult}</span>
          </p>
        </div>
      </div>
    </div>
  );
}