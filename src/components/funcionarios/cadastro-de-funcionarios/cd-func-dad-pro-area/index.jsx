import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function FuncionariosInputAreaDadosPro({handleChange}) {

  const [stateNewCargo, setStateNewCargo] = useState()
  const [stateNewDepartamento, setStateNewDepartamento] = useState()
  const [stateNewDtAdmissao, setStateNewDtAdmissao] = useState()

  return (
    <div className="inputs-area">
      <div className="input-line">
        <TextField
          label="Cargo"
          variant="outlined"
          onChange={(e) => {
            setStateNewCargo(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Departamento"
          variant="outlined"
          onChange={(e) => {
            setStateNewDepartamento(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Data de Admissão"
          variant="outlined"
          onChange={(e) => {
            setStateNewDtAdmissao(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
      </div>
    </div>
  );
}
