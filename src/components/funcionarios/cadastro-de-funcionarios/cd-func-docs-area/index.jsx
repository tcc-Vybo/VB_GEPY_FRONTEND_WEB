import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const orgaoExpedidor = [
  { 
    value: 'SSP', 
    label: 'SSP' 
  },
  { 
    value: 'ITEP', 
    label: 'ITEP' 
  },
  { 
    value: 'IFP', 
    label: 'IFP' 
  },
  { 
    value: 'Polícia Civil', 
    label: 'Polícia Civil' 
  },
  { 
    value: 'DETRAN', 
    label: 'DETRAN' 
  }
]

export default function FuncionariosInputAreaDocs({handleChange}) {

  const [stateNewCargo, setStateNewCargo] = useState()
  const [stateNewDepartamento, setStateNewDepartamento] = useState()
  const [stateNewDtAdmissao, setStateNewDtAdmissao] = useState()

  return (
    <div className="inputs-area">
      <div className="input-line">
        <TextField
          label="RG"
          variant="outlined"
          onChange={(e) => {
            setStateNewCargo(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="CPF"
          variant="outlined"
          onChange={(e) => {
            setStateNewDepartamento(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Data de Expedição"
          variant="outlined"
          onChange={(e) => {
            setStateNewDtAdmissao(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />

        <TextField
          label="Orgão Expeditor"
          variant="outlined"
          select
          sx={{width: 200}}
          onChange={(e) => {
            setStateNewDtAdmissao(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        >
          {orgaoExpedidor.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}
