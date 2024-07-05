import { useState } from "react";

import "./ImcCalc.css"

import Button from "./Button";

const ImcCalc = () => {
  const [height, setHeight] = useState("") // hooks de manipulação de dados
  const [weight, setWeight] = useState("")

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("")
    setWeight("")
  }


  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input type="text" 
            name="height" 
            id="height" 
            placeholder="Exemplo 1,65" 
            onChange={(e) => setHeight(e.target.value)} // VALOR PARA ALTURA DO USUÁRIO //
            value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input type="text" 
            name="weight" 
            id="weight" 
            placeholder="Exemplo 60,5" 
            onChange={(e) => setWeight(e.target.value)} // VALOR PARA PESO DO USUÁRIO //
            value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  )
}

export default ImcCalc;