import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [funcionarioId, setFuncionarioId] = useState(null); // ID do Funcionario
  const [cargoId, setCargoId] = useState(null); // ID da cargo
  const [nomeFuncionario, setNomeFuncionario] = useState(null)

  return (
    <UserContext.Provider value={{ funcionarioId, setFuncionarioId, cargoId, setCargoId, nomeFuncionario, setNomeFuncionario }}>
      {children}
    </UserContext.Provider>
  );
}