import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { CustomTextField } from "../../../customTextField/index"

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

export default function FuncionariosInputAreaDocs({ onChange }) {

  const [stateNewCargo, setStateNewCargo] = useState()
  const [stateNewDepartamento, setStateNewDepartamento] = useState()
  const [stateNewDtAdmissao, setStateNewDtAdmissao] = useState()

  const handleChange = (setter, name, value) => {
    setter(value);
    onChange(name, value); // Passa os valores para o pai
  };

  return (
    <div className="inputs-area">
      <div className="input-line">
        
      </div>
    </div>
  );
}
