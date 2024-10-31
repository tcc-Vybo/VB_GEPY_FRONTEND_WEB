import TextField from "@mui/material/TextField";
import { useState } from "react";

import { CustomTextField } from "../../../customTextField/index"

export default function FuncionariosInputAreaDocs({ onChange }) {

  

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

