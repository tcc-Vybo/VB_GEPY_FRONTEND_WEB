import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function FuncionariosInputAreaDocs({handleChange}) {

  const [stateNewCEP, setStateNewCEP] = useState()
  const [stateNewEndereco, setStateNewstateNewEndereco] = useState()
  const [stateNewNumero, setStateNewstateNewNumero] = useState()
  const [stateNewComplemento, setStateNewComplemento] = useState()
  const [stateNewBairro, setStateNewBairro] = useState()
  const [stateNewDtMunicipio, setStateNewDtMunicipio] = useState()
  const [stateNewUF, setStateNewUF] = useState()
  
  return (
    <div className="inputs-area">
      <div className="input-line">
        <TextField
          label="CEP"
          variant="outlined"
          onChange={(e) => {
            setStateNewCEP(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Endereço"
          variant="outlined"
          onChange={(e) => {
            setStateNewstateNewEndereco(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Nº"
          variant="outlined"
          onChange={(e) => {
            setStateNewstateNewNumero(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Complemento"
          variant="outlined"
          onChange={(e) => {
            setStateNewComplemento(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Bairro"
          variant="outlined"
          onChange={(e) => {
            setStateNewBairro(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <div className="input-line">
        <TextField
          label="Município"
          variant="outlined"
          onChange={(e) => {
            setStateNewDtMunicipio(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="UF"
          variant="outlined"
          onChange={(e) => {
            setStateNewUF(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        </div>
      </div>
    </div>
  );
}

