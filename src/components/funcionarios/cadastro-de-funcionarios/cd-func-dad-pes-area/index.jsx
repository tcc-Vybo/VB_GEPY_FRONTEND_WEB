import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const genero = [
  {
    value: 'Masculino',
    label: "Masculino", 
  },
  {
    value: 'Feminino',
    label: "Feminino", 
  },
  {
    value: 'Outro',
    label: "Outro", 
  },
]

export default function FuncionariosInputAreaDadosPes({handleChange}) {
  const [stateNewNome, setStateNewNome] = useState();
  const [stateNewDtNasc, setStateNewDtNasc] = useState();
  const [stateNewGenero, setStateNewGenero] = useState();
  const [stateNewTelefone, setStateNewTelefone] = useState();
  const [stateNewEmail, setStateNewEmail] = useState("");

  return (
    <div className="inputs-area">
      <div className="input-line">
        <TextField
          label="Nome"
          variant="outlined"
          onChange={(e) => {
            setStateNewNome(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Nascimento"
          variant="outlined"
          onChange={(e) => {
            setStateNewDtNasc(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
        <TextField
          label="Genero"
          variant="outlined"
          select
          sx={{width: 200}}
          onChange={(e) => {
            setStateNewGenero(e.target.value);
            console.log(e.target.value);
          }}
        >
          {genero.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Telefone"
          variant="outlined"
          onChange={(e) => {
            setStateNewTelefone(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />

        <TextField
          label="Email"
          variant="outlined"
          onChange={(e) => {
            setStateNewEmail(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
        />
      </div>
    </div>
  );
}
