import TextField from '@mui/material/TextField';

import { useState } from "react";





export default function FuncionariosInputAreaDadosPes({ nomeCompleto, dataNascimento, genero, telefone, email  }) {
  

  const handleChange = (name, value) => {
    mudando(name, value); // Passa os valores para o pai
  };

  return (
    <div className="inputs-area">
      <div className="input-line">
        
      </div>
    </div>
  );
}
