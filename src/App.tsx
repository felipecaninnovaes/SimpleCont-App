import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [irpjResult, setirpjResult] = useState("");
  const [csllResult, setcsllResult] = useState("");
  const [pisResult, setpisResult] = useState("");
  const [cofinsResult, setcofinsResult] = useState("");
  // const [name, setName] = useState("");
  const [receita_, setReceita] = useState("");
  const [retencao_irpj, setRetencao_irpj] = useState("");
  const [retencao_csll, setRetencao_csll] = useState("");
  const [retencao_pis, setRetencao_pis] = useState("");
  const [retencao_cofins, setRetencao_cofins] = useState("");
  
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setcsllResult(await invoke("greet", { name }));
  // }


  async function calcF() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    const receita_int = parseFloat(receita_)
  //  const retencao_csll_int = parseFloat(retencao_csll)
    const retencao_csll_int = parseFloat(retencao_csll)
    const retencao_irpj_int = parseFloat(retencao_irpj)
    const retencao_pis_int = parseFloat(retencao_pis)
    const retencao_cofins_int = parseFloat(retencao_cofins)
    setirpjResult(await invoke("irpj", { receita: receita_int, retencao: retencao_irpj_int }));
    setcsllResult(await invoke("csll", { receita: receita_int, retencao: retencao_csll_int }));
    setpisResult(await invoke("pis", { receita: receita_int, retencao: retencao_pis_int }));
    setcofinsResult(await invoke("cofins", { receita: receita_int, retencao: retencao_cofins_int }));
  }

  return (
    <div className="container">
      <h1>Simple Cont!</h1>


      <div className="row">
        <div>
          <input
            id="base-input"
            onChange={(e) => setReceita(e.currentTarget.value)}
            placeholder="Insira a receita..."
          />
            <input
              id="base-input"
              onChange={(e) => setRetencao_irpj(e.currentTarget.value)}
              placeholder="Insira o IRPJ..."
            />
            <input
              id="base-input"
              onChange={(e) => setRetencao_csll(e.currentTarget.value)}
              placeholder="Insira a CSLL..."
            />
            <input
              id="base-input"
              onChange={(e) => setRetencao_pis(e.currentTarget.value)}
              placeholder="Insira o PIS..."
            />
            <br></br>
            <input
              id="base-input"
              onChange={(e) => setRetencao_cofins(e.currentTarget.value)}
              placeholder="Insira o COFINS..."
            />
          <button type="button" onClick={() => calcF()}>
            Calcular
          </button>
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
  );
}

export default App;
